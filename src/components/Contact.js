import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ecg75ix', 
        'template_y9eybu4', 
        form.current, 
        '_1Ufj8fAuLxE3CZ5Y'
      )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-container'>
    <section id="contact">
        <h1 class="section-header" id='contact-heading'>Contact us</h1>
        <div class="contact-wrapper">
          <form class="form-horizontal" role="form" ref={form} onSubmit={sendEmail}>

            <input type="text" className='form-control' id="name" placeholder="NAME" name="user_name" required />
            <input type="email" class="form-control" id="email" placeholder="EMAIL" name="user_email" required />
            <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required />

            <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div class="alt-send-button">
                <i class="fa fa-paper-plane" />
                <span class="send-text">SEND</span>
              </div>
            </button>
          </form>
          <div class="direct-contact-container">
                <hr />
                <hr />
                <br />
                <ul class="contact-list">  
                    <li class="list-item">
                      <i class="fa fa-envelope fa-2x">
                        <span class="contact-text gmail">
                          <a href="mailto:#" title="Send me an email">
                            hello@fivemmgames.com
                          </a>
                        </span>
                      </i>
                    </li>
                </ul>
                <br />
                <hr />
                <hr />
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact