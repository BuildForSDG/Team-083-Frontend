import React, { Component } from 'react'

export default class Newsletter extends Component {
    render() {
        return (
            <section class="section-padding gradient-overlay">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 centered cl-white">
                    <div class="section-title mb-20">
                        <h2>Update from our newslatter</h2>
                    </div>
                    <div class="newslatter">
                        <form action="#">
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit"><i class="fa fa-paper-plane"></i></button>
                        </form>
                        <p><i class="fa fa-info-circle"></i>We will never send spam</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}
