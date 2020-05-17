import React, { Component } from 'react'
import BreadCrumb from './BreadCrumb'
import Sidebar from './Sidebar'

export default class RequestMoney extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Request Money' home='Dashboard' page='Request Money' />
            <section class="section-padding gradient-overlay poly-particle">
            <div class="container">
                <div class="row">
                    <Sidebar />
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content mb-30">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="dashboard-inner-content">
                                        <div class="card">
                                            <h5 class="card-header">Request Money</h5>
                                            <div class="card-body">
                                                <form action="#">
                                                    <div class="row">
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                            <label for="a-trans">Request Amount</label>
                                                            <input type="text" value="0" id="a-trans" />
                                                        </div>
                                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                            <label for="currencygsd">Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencygsd">
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-6">
                                                            <input type="email" placeholder="Receiver Username / Email /Phone" />
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                           <button type="submit">Send Request</button>
                                                        </div>
                                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                           <label for="textareagsd">Note for Transection</label>
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
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="dashboard-inner-content">
                                        <div class="card">
                                            <h5 class="card-header">Received Request(5)</h5>
                                            <div class="card-body">
                                                <div class="row justify-content-end">
                                                    <div class="col-xl-8">
                                                        <div class="essen-btns">
                                                            <a href="" class="active"><i class="ti-money"></i>Received Money</a>
                                                            <a href=""><i class="ti-location-arrow"></i>Send Money</a>
                                                            <a href=""><i class="ti-pencil"></i>Request Money</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="table-responsive table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm site-table">
                                                    <table class="table table-striped">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                            <th scope="col">Trx</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Username</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Paid</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-warning">Unaid</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Paid</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Paid</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Paid</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="centered">
                                                    <button class="bttn-small btn-fill"><i class="ti-angle-double-down"></i> Load more</button>
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
