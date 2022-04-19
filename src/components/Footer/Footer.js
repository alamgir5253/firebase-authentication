import React from 'react';
import './Footer.css'
// import payment from '../../images/payment.jpg'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='footer-page'>
            <h2 className='footer-title'>CONTACT WITH ME</h2>
            <div className='footer-container'>
                <div>
                    <h4>address</h4>
                    <p>503 Old Street road</p>
                    <p>kamgangin chor, dhaka-1211</p>
                    </div>
                <div className='address'>
                    <ul>
                        <h4>contact info</h4>
                        <li>alamgir5253@gmail.com</li>
                        <li>call: 01871752480</li>
                        
                    </ul>
                </div>
                <div>
                    {/* <h5>payment by</h5> */}
                    {/* <img className='footer-img' src={payment} /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;