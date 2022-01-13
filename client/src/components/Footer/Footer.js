import React from 'react';
import './footer.css';

function Footer() {
    return (

        <footer className="footer-container text-white text-center text-lg-start bg-info">

            <div className="container p-4">

                <div className="row">

                    <div className="col-lg-9 col-md-12 mb-4 mb-md-0">
                        <h4 className="text-light">React-Nodejs</h4>
                        <p>
                         this is a test.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-12 mb-4 mb-md-0">

                        <h4 className="text-light mb-0">Links</h4>

           
                                <a href='https://www.linkedin.com/in/valentín-sznitowski/'>
                                    <i className='fa fa-linkedin'></i>
                                </a>
                       
                                <a href='https://www.instagram.com/valentin_sznitowski/'>
                                    <i className='fa fa-instagram'></i>
                                </a>

                         
                                <a href='https://github.com/sznitowski'>
                                    <i className='fa fa-github'></i>
                                </a>
               
                                <a href='#'>
                                    <i className='fa fa-google-plus-square'></i>
                                </a>
               
                    </div>

                </div>
            </div>

            <div className="text-center p-3">
                © 2021 Copyright: Valentin Sznitowski
            </div>

        </footer>
    )
}





export default Footer;

