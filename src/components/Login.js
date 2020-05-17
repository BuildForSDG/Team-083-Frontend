import React, { Component } from 'react'
import securityCode from '../assets/images/security-code.jpg'
import BreadCrumb from './BreadCrumb'


export default class Login extends Component {
    render() {
        return (
            <div>
            <BreadCrumb title='Welcome Back!' home='Home' page='Login' />
            <section class="hero-section">
            <div class="hero-area wave-animation">
                <div class="single-hero gradient-overlay">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-5 col-md-6 col-sm-10 centered">
                                <div class="hero-sub">
                                    <div class="table-cell">
                                        <div class="hero-left">
                                            <h2>Login here</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ad. Doloribus</p>
                                            <div class="account-form">
                                                <form action="dashboard.html" class="row">
                                                    <div class="col-xl-12">
                                                        <input type="email" placeholder="User/Email" required />
                                                    </div>
                                                    <div class="col-xl-12">
                                                        <input type="password" placeholder="Password" required />
                                                    </div>
                                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <input type="text" placeholder="Security code" required />
                                                    </div>
                                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <img src={securityCode} alt="" />
                                                    </div>
                                                    <div class="col-xl-12">
                                                        <button type="submit" class="bttn-mid btn-fill w-100">Login now</button>
                                                    </div>
                                                </form>
                                                <div class="extra-links">
                                                    <a href="forgot-password.html">Forgot password</a>
                                                    <a href="register.html">Register now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
