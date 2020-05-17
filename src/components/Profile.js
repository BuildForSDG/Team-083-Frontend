import React, { Component } from 'react'
import Sidebar from './Sidebar'
import BreadCrumb from './BreadCrumb'

export default class Profile extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Profile Settings' home='Dashboard' page='Profile Settings' />
        <section class="section-padding-2 gradient-overlay poly-particle">
            <div class="container">
                <div class="row">
                    <Sidebar />
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Hi, Larry Page</h4>
                                        <p>Customer id: 23658795</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>General Balance</h4>
                                        <p>&#36; 20657.47 USD</p>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                    <div class="single-currency-box">
                                        <h4>Bank Account</h4>
                                        <p><i class="ti-check"></i> Holdings Bank Corp</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-30">
                            <div class="card-header">
                                Profile Info <a href="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit Profile info"><i class="ti-pencil"></i></a>
                            </div>
                            <div class="card-body">
                                <div class="profile-card-body">
                                    <div class="row">
                                        <div class="col-sm-3">
                                            <div class="thumb">
                                                <img src="assets/images/profile.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-3 col-5">
                                            <div class="left-info">
                                                <p>Name</p>
                                                <p>Date of Birth</p>
                                                <p>Address</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 col-7">
                                            <div class="right-info">
                                                <p>Larry Page</p>
                                                <p>05-12-1990</p>
                                                <p>2040  Kennedy Court, Worcester-1250, Massachusetts</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-30">
                            <div class="card-header">
                                Security <a href="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit Security info"><i class="ti-pencil"></i></a>
                            </div>
                            <div class="card-body">
                                <div class="profile-card-body">
                                    <div class="row">
                                        <div class="col-sm-3 col-5">
                                            <div class="left-info">
                                                <p>Password</p>
                                                <p>Mobile Number</p>
                                                <p>2F Verification</p>
                                                <p>Security question</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 col-7">
                                            <div class="right-info">
                                                <p>*************</p>
                                                <p>(+012) 345 678 90</p>
                                                <p><i class="ti-na cl-red"></i> Off</p>
                                                <p><i class="ti-na cl-red"></i> Off</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-30">
                            <div class="card-header">
                                Email Info<a href="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit Email info"><i class="ti-pencil"></i></a>
                            </div>
                            <div class="card-body">
                                <div class="profile-card-body">
                                    <div class="row">
                                        <div class="col-sm-3 col-5">
                                            <div class="left-info">
                                                <p>Primary Email</p>
                                                <p>Secondary Email</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 col-7">
                                            <div class="right-info">
                                                <p>clarkmc@outlook.com</p>
                                                <p>loveforguys@outlook.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-30">
                            <div class="card-header">
                                Account Settings<a href="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit Account info"><i class="ti-pencil"></i></a>
                            </div>
                            <div class="card-body">
                                <div class="profile-card-body">
                                    <div class="row">
                                        <div class="col-sm-3 col-5">
                                            <div class="left-info">
                                                <p>Account Status</p>
                                                <p>Language</p>
                                                <p>Time Zone</p>
                                                <p>Account Type</p>
                                                <p>Logged In Devices</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 col-7">
                                            <div class="right-info">
                                                <p><i class="ti-crown cl-green"></i> Active</p>
                                                <p>English (United States)</p>
                                                <p>(GMT-04: 00) Washington, DC</p>
                                                <p>Personal</p>
                                                <p>Desktop Chrome Windows 10</p>
                                                <p>iPhone X</p>
                                                <p>Mozila Firefox</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-30">
                            <div class="card-header">
                                Account Closing
                            </div>
                            <div class="card-body">
                                <div class="profile-card-body">
                                    <div class="row">
                                        <div class="col-sm-3 col-5">
                                            <div class="left-info text-right">
                                                <p>Want to Close?</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-9 col-7">
                                            <div class="right-info">
                                                <a href=""><i class="ti-close cl-red"></i> Close Account</a>
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
