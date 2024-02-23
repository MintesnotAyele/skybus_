import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <section id="fancy-form">
        
        <div className="container">
        <img className="" src="https://cdn.pixabay.com/photo/2014/04/03/11/55/bus-312564_640.png" />
          <div className="form-sections">
            <div className="Form-left">
              <h1>Get In Touch</h1>
              <div className="line"></div>
              <p>Contact us for latest news and updates. subscribe our news letter :</p><br />
              <h4>ADDRESS</h4>
              <span>123, Main Street,INE ABDLE SEFER 1001</span>
              <hr /><br /><br />
              <h4>PHONE</h4>
              <span>(+251)9 456 7890</span>
              <hr /><br /><br />
              <h4>EMAIL</h4>
              <span>abdlwahid@gmail.com</span>
              <hr /> <br />
            </div>
            <div className="Form-right">
              <h1>Contact Us</h1>
              <div className="line"></div>
              <form action="" method="post">
                <h5>NAME</h5>
                <input type="text" /><br /><br />
                <h5>EMAIL</h5>
                <input type="email" /><br /><br />
                <h5>PHONE</h5>
                <input type="number" /><br /><br />
                <h5>YOUR MESSAGE</h5>
                <textarea name="" id="" cols="50" rows="7"></textarea><br />
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
