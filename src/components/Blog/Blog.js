import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h2 className='blog-title'>blog section</h2>
           <div className='blog-container'>
           <div className='blog'>
                <h3>Authentication</h3>
                <p>
                Authentication  is a process to confirm user identity to access the system.
.
It usually requires an email address, password.
 Authentication is the first step of authorization

                </p>
                <h3>Authorization</h3>
                <p>
                Authorization is a process of  verifying whether access is allowed or not.
It’s determines what user can and cannot access
Authorization will done after successful authentication

                </p>
            </div>

            <div className='blog'>
                <h3>Why I use firebase</h3>
                <p>
                I use firebase because  Firebase  is the most popular authentication system now. It has great  feature lick backend service, easy to use SDKs etc…
Implementing Firebase Authentication is relatively fast and easy

                </p>
                <h3>other authentication</h3>
                <ul>
                    <li>Multi-factor authentication</li>
                    <li>Certificate-based authentication</li>
                    <li>Biometric authentication</li>
                    <li>Token-based authentication</li>
                </ul>
                
            </div>
            <div className='blog'>
                
                <h3>Firebase provides services accept authentication, Most useful of them are </h3>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Remote Config</li>
                    <li>Dynamic Links</li>
                </ul>
            </div>
           </div>
        </div>
    );
};

export default Blog;