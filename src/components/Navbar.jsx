import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#"><b>NEWS INDIA LIVE.COM</b> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Add News</Link>
                            <Link class="nav-link" to="/Delete"                                                                                                                                                                                                                   >Delete News</Link>
                            <Link class="nav-link" to="/Search">Search News </Link>
                            <Link class="nav-link " to="/View">View News </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar