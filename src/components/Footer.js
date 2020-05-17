import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer class="footer-area section-padding-2 blue-bg wave-animation">
            <div class="container">
                <div class="row mb-40">
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget footer-nav">
                            <h3>Regular links</h3>
                            <ul>
                                <li><a href="">home</a></li>
                                <li><a href="">Wallet</a></li>
                                <li><a href="">Case Studies</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget footer-nav">
                            <h3>Essentials</h3>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Recent event</a></li>
                                <li><a href="">Developers</a></li>
                                <li><a href="">Affiliate program</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget footer-nav">
                            <h3>Essentials</h3>
                            <ul>
                                <li><a href="">About</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Recent event</a></li>
                                <li><a href="">Developers</a></li>
                                <li><a href="">Affiliate program</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-widget">
                            <a href=""><img src="assets/images/logo.png" alt=""/></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dicta</p>
                            <div class="m-app mb-20">
                                <a href=""><i class="fa fa-apple"></i>App Store</a>
                                <a href=""><i class="fa fa-play"></i>Google Play</a>
                            </div>
                            <div class="social">
                                <a href="" class="cl-facebook"><i class="fa fa-facebook"></i></a>
                                <a href="" class="cl-twitter"><i class="fa fa-twitter"></i></a>
                                <a href="" class="cl-youtube"><i class="fa fa-youtube-play"></i></a>
                                <a href="" class="cl-pinterest"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 centered cl-white copyright mt-50">
                        <p class="mb-0">Copyright &copy; 2020 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}
