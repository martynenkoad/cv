import React from "react"

export default function Header({ setShowInfo }) {

    const toggleShowInfo = (wantedSection = "HOME") => {
        switch (wantedSection) {
            case "HOME":
                return setShowInfo({
                    showHome: true,
                    showPortfolio: false,
                    showContacts: false
                })
            case "PORTFOLIO":
                return setShowInfo({
                    showHome: false,
                    showPortfolio: true,
                    showContacts: false
                })
            case "CONTACTS":
                return setShowInfo({
                    showHome: false,
                    showPortfolio: false,
                    showContacts: true
                })
        }
    }

    return (
        <div className="header bg-grads">
            <h3>Anastasiia Martynenko</h3>
            <div className="navigation">
                <span 
                  className="nav-btn"
                  onClick={() => toggleShowInfo("HOME")}
                >
                    Home
                </span>
                <span
                  className="nav-btn"
                  onClick={() => toggleShowInfo("PORTFOLIO")}
                >
                    Portfolio
                </span>
                <span 
                  className="nav-btn"
                  onClick={() => toggleShowInfo("CONTACTS")}
                >
                    Contacts
                </span>
            </div>
        </div>
    )
}