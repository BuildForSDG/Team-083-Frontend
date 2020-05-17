import React, { Component } from 'react'
import banner3 from '../assets/images/banners/3.jpg'


export default class ContactUs extends Component {
    render() {
        return (
            <div>
            <section class="breadcrumb-area fixed-head gradient-overlay" style= {{ backgroundImage: 'url('+banner3+')' }}>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 centered">
                        <div class="banner-title">
                            <h2>Contact us</h2>
                        </div>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            <section class="section-padding gradient-overlay cl-white">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div class="section-title centered">
                            <h2>Any asking to us?</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6">
                        <div class="contact-form">
                            <form action="#">
                                <h4>Get in touch</h4>
                                <p>Send us a message if you need any help</p>
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="Phone" />
                                <input type="email" placeholder="Email" />
                                <textarea name="msg" rows="4" placeholder="Your message"></textarea>
                                <button type="submit" class="bttn-mid btn-fill">Send message</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="contact-content">
                            <h4>Contact Details</h4>
                            <p>130 Hollister Church Rd, Palatka, FL, 32177</p>
                            <p>745 Old Springville Rd, Springville, TN, 38256</p>
                            <h5>Call for emergencies</h5>
                            <p>+968659564</p>
                            <p>+56648246563596</p>
                            <div class="social">
                                <a href="" class="facebook-bg"><i class="fa fa-facebook"></i></a>
                                <a href="" class="twitter-bg"><i class="fa fa-twitter"></i></a>
                                <a href="" class="instagram-bg"><i class="fa fa-instagram"></i></a>
                                <a href="" class="pinterest-bg"><i class="fa fa-pinterest-p"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
