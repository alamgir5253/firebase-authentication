import React from 'react';
import './Packages.css'
const Packages = () => {
    return (
        <div>
            <h1 className='packages-title'>my Packages</h1>
            <div className='package-container'>
                <div className='package'>
                    <h5>regulur</h5>
                    <h3>$999</h3>
                    <ul>
                        <li>Free Consultation</li>
                        <li>Fully Edited Photo</li>
                        <li>High resolution files</li>
                        <li>Copyright Free</li>

                    
                    </ul>
                </div>
                <div className='package'>
                    <h5>Best</h5>
                    <h3>$1999</h3>
                    <ul>
                        <li>Fully Edited Photo</li>
                        <li>Password protected Online Gallery</li>
                        <li>Wedding Album 30 Page</li>
                        <li>Copyright Free</li>
                        <li>unlimited access to contact</li>
                    </ul>
                </div>
                <div className='package'>
                    <h5>premium</h5>
                    <h3>$3000</h3>
                    <ul>
                        <li>Free Consultation for 3 week</li>
                        <li>Fully Edited Photo</li>
                        <li>Album Size: 30x20cm</li>
                        <li>High resolution files</li>
                        <li>Copyright Free</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Packages;