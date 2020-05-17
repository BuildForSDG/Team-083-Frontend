import React, { Component } from 'react'
import Sidebar from './Sidebar'
import BreadCrumb from './BreadCrumb'

export default class WithdrawMoney extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Withdraw Money' home='Dashboard' page='Withdraw Money' />

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
                                            <h5 class="card-header">Withdraw Money</h5>
                                            <div class="card-body">
                                                <form action="#">
                                                    <div class="row justify-content-end">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="a-trans">Enter Amount</label>
                                                            <input type="text" placeholder="0.00" id="a-trans" />
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyhf">Select Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencyhf">
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyfghg">Select Bank</label>
                                                            <select name="currency-select" class="select-bar" id="currencyfghg">
                                                                <option value="">Bank London</option>
                                                                <option value="">Bank of SG</option>
                                                                <option value="">National bank</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                           <button type="submit">Withdraw now</button>
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
                                            <h5 class="card-header">Withdraw History</h5>
                                            <div class="card-body">
                                                <div class="table-responsive table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm site-table">
                                                    <table class="table table-striped">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                            <th scope="col">Trx</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Bank</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-warning">Pending</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
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
