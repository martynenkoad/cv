import React from "react"
import DisplayContacts from "./DisplayContacts"
import DisplayCV from "./DisplayCV"
import DisplayPortfolio from "./DisplayPortfolio"

export default function HomeDisplayInfo({ showInfo }) {
    return (
        <div className="home-display-info">
            {
                showInfo.showHome &&
                <div className="fade-in-top">
                    <DisplayCV />
                </div>
            }
            {
                showInfo.showPortfolio &&
                <div className="fade-in-top">
                    <DisplayPortfolio />
                </div>
            }
            {
                showInfo.showContacts &&
                <div className="fade-in-top">
                    <DisplayContacts />
                </div>
            }
        </div>
    )
}