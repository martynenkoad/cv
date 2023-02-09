import React from "react"
import { Link } from "react-router-dom"
import chatadil from "../assets/chatadil-head.png"
import emo from "../assets/emo-head.png"
import mac from "../assets/mac-head.png"
import haterville from "../assets/haterville-head.png"

export default function DisplayPortfolio() {
    return (
        <div className="display-portfolio">
            <h2>Portfolio</h2>
            <span>The projects displayed on these page are not commercial. The most of commercial projects I took part in are currently protected by NDA.</span>
            <br /><br />
            <span>Please select the project you want to take a look at and click on it.</span>

            <div className="projects">
                <Link 
                  className="project"
                  to="/chatadil"
                >
                    <img 
                      src={chatadil}
                      alt=""
                    />
                    Chatadil
                </Link>
                <Link 
                  className="project"
                  to="/mac-donalds"
                >
                    <img 
                      src={mac}
                      alt=""
                    />
                    MacDonalds
                </Link>
                <Link 
                  className="project"
                  to="/haterville"
                >
                    <img 
                      src={haterville}
                      alt=""
                    />
                    Haterville
                </Link>
                <Link 
                  className="project"
                  to="/emo-diary"
                >
                    <img 
                      src={emo}
                      alt=""
                    />
                    Emo Diary
                </Link>
            </div>
        </div>
    )
}