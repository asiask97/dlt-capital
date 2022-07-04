import { useRef, useState } from 'react';
import './Form.css'
import ReCAPTCHA from "react-google-recaptcha"
import axios from 'axios';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] =useState('');
  const [alert, setAlert] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const url = 'https://yzftdip992.execute-api.eu-west-1.amazonaws.com/dev/email/send'
  const recaptchaRef = useRef(null);


  //FORM
  const handleSubmit = e =>{
    e.preventDefault();
    if(name.length == 0 || email.length == 0 || message.length == 0 ){
      setAlert('Please fill in all of the feilds to send');
    }
    else if(!email.includes('@')) setAlert('Invalid email')
    else if(!isVerified)setAlert('ReCAPTCHA error, try again.')
    else{
      setAlert('Sending');
      const payload ={
        name: name,
        email: email,
        content: message
      }
        post(url, payload, function (err, res) {
          if (err) { return error(err) }
          success()
        })
    }
  }

  function post(url, body, callback) {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", function () {
      if (req.status < 400) {
        callback(null, JSON.parse(req.responseText));
      } else {
        callback(new Error("Request failed: " + req.statusText));
      }
    });
    req.send(JSON.stringify(body));
  }

   // RECAPTCHA
   function verifyCallBack(e) {
    console.log(e);
    
    const token = e;
    const toSend = {'token' : token};

    
    var req = new XMLHttpRequest();
    req.open("POST", 'https://yzftdip992.execute-api.eu-west-1.amazonaws.com/dev/post', true);

    req.addEventListener("load", function () {
      let response = JSON.parse(req.responseText)
      setIsVerified(response.success)
    });
    req.send(JSON.stringify(toSend));
    
  }

  function success () {
    setAlert('Your message was send')
    setEmail('');
    setMessage('');
    setName('');
    recaptchaRef.current.reset();

  }
  function error (err) {
    setAlert('There was an error with sending your message - check if all information is correct')
    console.log(err);
    recaptchaRef.current.reset();

  }



  return (
    <div className='Form'>
        <div id="confirm_message">{alert}</div>   
        <div className='form_inputs'>
          <input  
                value={name}
                onChange={ e => {
                  setName(e.target.value);
                }}
                type="text" 
                class="form_input name" 
                name="name" 
                id="name" 
                placeholder="Name" 
                required>
          </input>
          <input 
                value={email}
                onChange={ e => {
                  setEmail(e.target.value);
                }}
                type="text" 
                class="form_input email" 
                name="email" 
                id="email" 
                placeholder="Email" 
                required>
          </input>
          <textarea
                value={message}
                onChange={ e => {
                  setMessage(e.target.value);
                }}
                name="message" 
                class="form_input message" 
                id="message" 
                cols="30" 
                rows="6" 
                placeholder="Message" 
                required>
          </textarea>
          <div className='recaptcha'>
            <ReCAPTCHA
                sitekey='6Lejw3YgAAAAAKEnb6j9X0cktYVQNCzEfuMp3cMv'
                onChange={verifyCallBack}
                ref={recaptchaRef}
            />
          </div>
          <input 
                onClick={handleSubmit} 
                type="submit" 
                value="Send Message" 
                class="form_input send_message">
          </input>
        </div>
    </div>
  );
}
export default Form;