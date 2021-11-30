import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div id='contact'>
            <h1 className='logo-text'>Contact</h1>
            <div className='mail-contact mb-5'>
                <h4 className='px-2'>Having an project idea in mind?</h4>
                <a href="mailto:subhasri32viji@gmail.com" rel="noreferrer" className='btn btn-sm btn-success'>Let's Discuss</a>
            </div>
            <div className='mail-contact mb-5'>
                <div className='contacts p-4 text-center'>
                    <i class="fad fa-envelope"></i> <span>subhasri32viji@gmail.com</span>
                </div>
                <div className='contacts p-4 text-center'>
                    <i class="fad fa-mobile-alt"></i> <span>+91 9003368260</span>
                </div>
                <div className='contacts p-4 text-center mb-3'>
                <i class="fad fa-map-marker-alt"></i> <span>Chennai, TamilNadu</span>
                </div>
            </div>
            <div className="footer mt-3">
                <span className='float-left'>
                    <a href="https://github.com/subhasri32/" target='_blank' rel="noreferrer" className='btn btn-sm btn-success btn-circle'><i class="fab fa-github"></i></a>&emsp;
                    <a href="https://www.linkedin.com/in/vijayalakshmi-selvavinayakam/" target='_blank' rel="noreferrer" className='btn btn-sm btn-success btn-circle'><i class="fab fa-linkedin"></i></a>&emsp;
                </span>
                <span>Copyright © 2021. </span>&emsp; <span> All Rights Reserved by Vijayalakshmi S </span>
            </div>
        </div>
    )
}

export default Contact
