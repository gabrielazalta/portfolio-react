import React from 'react';

function Footer() {
    return(
        <footer>
            <div className="row m-4 pt-5">
                <div className="col-4"></div>
                <div className="col-4 text-center mb-3">
                    <h1 className="sub-title">lets get connected!</h1>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row m-4 p-5 shadow">
                <div className="col-1"></div>
                <div className="text-center col-2">
                    <a href="mailto:gzalta96@gmail.com" className="fa fa-envelope-o"></a>
                </div>
                <div className="text-center col-2">
                    <a href="tel:786-780-6948" className="fa fa-phone"></a>
                </div>
                <div className="text-center col-2">
                    <a href="https://github.com/gabrielazalta" className="fa fa-github"></a>
                </div>
                <div className="text-center col-2">
                    <a href="https://www.linkedin.com/in/gabriela-zalta/" className="fa fa-linkedin"></a>
                </div>
                <div className="text-center col-2">
                    <a href="https://www.instagram.com/gabrielazalta/" className="fa fa-instagram"></a>
                </div>
                <div className="col-1"></div>
            </div>
        </footer>
    );
}

export default Footer;