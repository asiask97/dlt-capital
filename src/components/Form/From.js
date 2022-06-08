import './Form.css'

function Form() {
  
  return (
    <div className='Form'>
        <div id="message_success" style={{display: 'none'}}> Your message was sent, thank you!</div>        
        <div className='form_inputs'>
          <input type="text" class="form_input name" name="name" id="name" placeholder="Name"></input>
          <input type="text" class="form_input email" name="email" id="email" placeholder="Email"></input>
          <textarea name="message" class="form_input message" id="message" cols="30" rows="6" placeholder="Message" ></textarea>
          <input type="submit" value="Send Message" class="form_input send_message"></input>
        </div>
       
    </div>
  );
}
export default Form;