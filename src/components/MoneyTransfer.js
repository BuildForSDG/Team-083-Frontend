import React, { Component } from 'react'
import Sidebar from './Sidebar'
import BreadCrumb from './BreadCrumb'


export default class MoneyTransfer extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Money Transfer' home='Dashboard' page='Money Transfer' />
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
                                            <h5 class="card-header">Money Transfer Form</h5>
                                            <div class="card-body">
                                                <form action="#">
                                                    <div class="row">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="a-trans">Amount Transfer</label>
                                                            <input type="text" value="0" id="a-trans"/>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencygsd">Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencygsd">
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="chargedfffffg">Charge: 1.85 % + 10.00</label>
                                                            <input type="text" readonly="readonly" value="0" id="chargedfffffg" />
                                                        </div>
                                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6">
                                                            <input type="email" placeholder="Receiver Username / Email /Phone" />
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                           <button type="submit">Transfer money</button>
                                                        </div>
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                           <label for="textareagsd">Note for Recipient</label>
                                                           <textarea name="textarea" rows="4" id="textareagsd"></textarea>
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
