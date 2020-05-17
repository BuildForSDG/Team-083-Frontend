import React, { Component } from 'react'
import BreadCrumb from './BreadCrumb'
import Sidebar from './Sidebar'

export default class ExchangeCurrency extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Exchange Currency' home='Dashboard' page='Exchange Currency' />
            <section class="section-padding gradient-overlay poly-particle">
            <div class="container">
                <div class="row">
                    <Sidebar />
                       <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="dashboard-inner-content">
                                        <div class="card">
                                            <h5 class="card-header">Exchange Currency Form</h5>
                                            <div class="card-body">
                                                <form action="#">
                                                    <div class="row justify-content-end">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="a-trans">Amount Exchange</label>
                                                            <input type="text" placeholder="0.00" id="a-trans"/>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyhf">From Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencyhf">
                                                                <option value="">Select Currency</option>
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyfghg">To Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencyfghg">
                                                                <option value="">Select Currency</option>
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                           <button type="submit">Check Calculation</button>
                                                        </div>
                                                    </div>
                                                </form>
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
