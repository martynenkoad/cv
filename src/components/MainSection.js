import React from "react"
import ava from "../assets/ava.jpeg"

export default function MainSection({ setShowInfo }) {

    const handleContactsClick = () => {
        setShowInfo({
            showHome: false,
            showPortfolio: false,
            showContacts: true
        })
    }

    return (
        <div className="main-section">
            <img 
              src={ava}
              alt="ava"
            />

            <div className="text">
                <h2>Anastasiia Martynenko</h2>
                <p>Full-Stack Web Developer</p>
                <p className="location">
                        <span className="material-symbols-outlined">
                            pin_drop
                        </span>
                    <span className="location-text">
                        Location: 
                    </span>
                    Breda, Netherlands
                </p>
            </div>

            <div className="buttons">
                <span 
                  className="nav-btn"
                  onClick={handleContactsClick}
                >
                    Contact Me
                </span>
            </div>
        </div>
    )
}