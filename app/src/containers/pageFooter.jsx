import React from 'react';

const getYear = () => {
    let d = new Date();
    return d.getFullYear();
}

const MainFooter = () => {
    return (
        <footer id="mu-footer" role="contentinfo">
            <div className="container">
                <div className="mu-footer-area">
                    <p className="mu-copy-right">&copy; Copyright {getYear()}  <a rel="nofollow" href="http://cholacs-systems.co.ke">Cholacs Systems</a></p>
                </div>
            </div>

        </footer>
    )
}
export default MainFooter;