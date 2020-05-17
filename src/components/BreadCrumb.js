import React from 'react'

export default function BreadCrumb({ title, home, page }) {
    return (
        <section class="breadcrumb-area gradient-overlay">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 centered">
                    <div class="banner-title">
                        <h2>{title}</h2>
                    </div>
                    <ul>
                        <li><a href="/">{home}</a></li>
                        <li>{page}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}
