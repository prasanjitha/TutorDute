import React, { Component } from 'react'
import './css/LandingPage.css'
export class LangingPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <div class="wrapper">
                        <div class="logo"> <img src="homePage.jpg" alt=""></img>
                        </div>
                    </div>
                    <div class="welcome-text">
                        <a href="#">Get Started</a>

                    </div>
                    <div class="sign-button">
                        <Link to="/about">  <a href="#">Sign In</a>
                        </Link>
                    </div>
                </header>

            </div>
        )
    }
}

export default LangingPage
