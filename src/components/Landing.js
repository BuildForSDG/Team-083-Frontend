import React, { Component } from 'react'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
import icon5 from '../assets/images/icons/5.png'
import icon6 from '../assets/images/icons/6.png'
import icon7 from '../assets/images/icons/7.png'
import icon8 from '../assets/images/icons/8.png'
import icon9 from '../assets/images/icons/9.png'
import icon10 from '../assets/images/icons/10.png'
import brand1 from '../assets/images/brands/1.png'
import brand2 from '../assets/images/brands/2.png'
import brand3 from '../assets/images/brands/3.png'
import brand4 from '../assets/images/brands/4.png'
import brand5 from '../assets/images/brands/5.png'
import brand6 from '../assets/images/brands/6.png'
import brand7 from '../assets/images/brands/7.png'
import brand8 from '../assets/images/brands/8.png'

export default class Landing extends Component {
    render() {
        return (
        <div>
            <section class="hero-section" >
                <div class="hero-area">
                <div id="particles-js"></div>
                    <div class="single-hero">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-9 centered">
                                    <div class="hero-sub">
                                        <div class="table-cell">
                                            <div class="hero-left">
                                                <h4>#1 flexible and light weight online gateway</h4>
                                                <h1>Start Transection with us to get a special voucher</h1>
                                                <a href="register.html" class="bttn-mid btn-fill"><i class="ti-pencil"></i>Register</a>
                                                <a href="login.html" class="bttn-mid btn-emt"><i class="ti-unlock"></i>Login</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section-padding-2 gradient-overlay poly-particle">
            <div class="triangle-particle">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-7 centered">
                            <div class="section-title cl-white">
                                <h2>How it works</h2>
                                <p>Distinctio necessitatibus atque voluptatem nesciunt quae corporis. Omnis iste laudantium tenetur, temporibus ipsa nemo ullam.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center centered">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-box">
                                <img src={icon1} alt=""/>
                                <h3>How to spend</h3>
                                <p>A better way to present your money using fully featured digital</p>
                                <a href="" class="bttn-small btn-fill">Learn more</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-box">
                                <img src={icon2} alt=""/>
                                <h3>Your website</h3>
                                <p>A better way to present your money using fully featured digital</p>
                                <a href="" class="bttn-small btn-fill">Learn more</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-box">
                                <img src={icon3} alt=""/>
                                <h3>Deposit</h3>
                                <p>A better way to present your money using fully featured digital</p>
                                <a href="" class="bttn-small btn-fill">Learn more</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-box">
                                <img src={icon4} alt=""/>
                                <h3>How to spend</h3>
                                <p>A better way to present your money using fully featured digital</p>
                                <a href="" class="bttn-small btn-fill">Learn more</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-box">
                                <img src={icon5} alt=""/>
                                <h3>Your website</h3>
                                <p>A better way to present your money using fully featured digital</p>
                                <a href="" class="bttn-small btn-fill">Learn more</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-box">
                                <img src={icon6} alt=""/>
                                <h3>Deposit</h3>
                                <p>A better way to present your money using fully featured digital</p>
                                <a href="" class="bttn-small btn-fill">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-padding blue-bg">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 centered">
                    <div class="section-title cl-white">
                        <h2>Payment Gateways</h2>
                        <p>voluptates dolore enim corrupti ducimus nisi dolorem, labore animi</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand1} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand2} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand3} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand4} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand5} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand1} alt="" /></a>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand1} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand2} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand3} alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                    <div class="single-brands">
                        <a href=""><img src={brand4} alt="" /></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col centered">
                    <a href="" class="bttn-small btn-emt">Explore all</a>
                </div>
            </div>
        </div>
    </section>
        </div>
        )
    }
}
