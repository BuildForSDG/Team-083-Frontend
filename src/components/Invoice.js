import React, { Component } from 'react'
import BreadCrumb from './BreadCrumb'
import Sidebar from './Sidebar'


export default class Invoice extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Invoice' home='Dashboard' page='Invoice' />
            <section class="section-padding gradient-overlay poly-particle">
            <div class="container">
                <div class="row">
                <Sidebar />
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">                               
                                    <div class="dashboard-content">
                                        <div class="row">
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div class="dashboard-inner-content">
                                                    <div class="card">
                                                        <h5 class="card-header">My Invoices</h5>
                                                        <div class="card-body">
                                                            <div class="row justify-content-end">
                                                                <div class="col-xl-8">
                                                                    <div class="essen-btns">
                                                                        <a href="" class="active"><i class="ti-check-box"></i>All Invoices</a>
                                                                        <a href=""><i class="ti-pencil"></i>Create Invoice</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="table-responsive table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm site-table">
                                                                <table class="table table-striped">
                                                                    <thead class="thead-dark">
                                                                        <tr>
                                                                        <th scope="col">Name</th>
                                                                        <th scope="col">Email</th>
                                                                        <th scope="col">Amount</th>
                                                                        <th scope="col">Publish</th>
                                                                        <th scope="col">Status</th>
                                                                        <th scope="col">Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
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
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
