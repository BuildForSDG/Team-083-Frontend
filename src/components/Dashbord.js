import React, { Component } from 'react'
import Sidebar from './Sidebar'
import BreadCrumb from './BreadCrumb'

export default class Dashbord extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Welcome back!' home='Home' page='Dashboard' />
        <section class="section-padding-2 gradient-overlay poly-particle">
            <div class="container">
                <div class="row">
                    <Sidebar />
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>US Doller</h4>
                                        <p>&#36; 20657.47 USD</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Euro</h4>
                                        <p>&#163; 20657.47 EU</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Canadian Doller</h4>
                                        <p>&#163; 20657.47 CAD</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Pound</h4>
                                        <p>&#163; 20657.47 GBP</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Yen</h4>
                                        <p>&#165; 20657.47 YEN</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>US Doller</h4>
                                        <p>&#36; 20657.47 USD</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Pound</h4>
                                        <p>&#163; 20657.47 GBP</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Yen</h4>
                                        <p>&#165; 20657.47 YEN</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>US Doller</h4>
                                        <p>&#36; 20657.47 USD</p>
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
