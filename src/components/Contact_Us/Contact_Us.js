import Form from '../Form/From';
import './Contact_Us.css';
function Contact_Us() {
  
    
    return (
        <div className="Contact_Us">
            <div className='contact_heading'>
                <h1>CONTACT US</h1>
            </div>
            <div className='form_body'>
                <div className='form'>
                    <Form/>
            </div>
            </div>
        </div>
    );
}

export default Contact_Us;