import React from "react"
import Footer from "./components/Footer"
import About from "./components/About"
import Info from "./components/Info"
import Interests from "./components/Interests"

export default function App() {
    return (
        <div className="container">
            <Info />
            <div className="about__interests--container">   
                <About />
                <Interests />
            </div>
            <Footer />
        </div>
    )
}