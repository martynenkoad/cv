import React from "react"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import about from "../assets/emo_assets/about.png"
import emohome from "../assets/emo_assets/emohome.png"
import login from "../assets/emo_assets/login.png"
import signup from "../assets/emo_assets/signup.png"
import support from "../assets/emo_assets/support.png"
import notes from "../assets/emo_assets/notes.png"
import reacticon from "../assets/reacticon.png"
import nodeicon from "../assets/nodeicon.png"
import express from "../assets/express.png"
import mongo from "../assets/MongoDB_Logo.svg.png"
import htmlcss from "../assets/HTML-CSS-JS-Logo.png"

export default function EmoDiary() {
    return (
        <div className="emo">
            <div className="header">
                <Link to="/" className="arrow">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                    Back
                </Link>
                <h1>Emo Diary</h1>
            </div>

            <div className="desc">
                <p>Emo Diary is <span className="pink">not a simple</span> diary. The main concept of this app is to provide people with a <span className="pink">free self-therapy</span>. Nowadays, many people feel themselves unaccepted and that makes their lives less comfortable. With the help of Emo Diary, users are able to express their feelings and stay sure that they are <span className="pink">accepted and loved</span>.</p>
                <p>Emo Diary <span className="pink">is designed</span> in cute emo-styles. The main idea behind such styling is to <span className="pink">catch he attention</span> of people who just want to have fun. These people start using Emo Diary just as a joke, and then their psycological state gets <span className="pink">better and better</span>.</p>
            </div>

            <div className="page">
              <h3>Registration</h3>
              <p>All the information about user is private. It makes the app secure and creates the atmosphere of trust so that users can stay sure their thoughts are not available for the other people.</p>
              <ul>
                <h4>Required fields:</h4>
                <li>First Name (latin symbols only);</li>
                <li>Last Name (latin symbols only);</li>
                <li>Username/login (latin symbols and numbers only, must be unique);</li>
                <li>Password (the strong one is required).</li>
            </ul>

              <img 
                src={signup}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Log In Page</h3>
              <p>Intuitively understandable.</p>
              <img 
                src={login}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Home Page</h3>
              <p>Home Page contains the information about the app. It is designed as the app for emos in 2007 and looks pretty attractive {":)"}</p>
              <img 
                src={emohome}
                alt=""
              />
            </div>

            <div className="page">
              <h3>About Page</h3>
              <p>This page consists of accordeons with the most recently asked questions about Emo Diary.</p>

              <img 
                src={about}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Notes</h3>
              <p>The main page where users can share their thoughts via writing notes. All the CRUD operations are available. The page by itself is available only for the authorized users.</p>

              <img 
                src={notes}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Support Page</h3>
              <p>This page contains just some links. Most of them are for the psycological support as the main goal of Emo Diary itself is to provide users with the self-therapy.</p>
              
              <img 
                src={support}
                alt=""
              />
            </div>

        <div className="skills">
        <h3>Skills used in the project:</h3>
        <div className="card-container">
          <div className="card">
            <img 
              src={reacticon}
            />
            <h6>ReactJS</h6>
          </div>
          <div className="card">
            <img 
              src={nodeicon}
            />
            <h6>NodeJS</h6>
          </div>
          <div className="card">
            <img 
              src={express}
            />
            <h6>ExpressJS</h6>
          </div>        
          <div className="card">
            <img 
              src={htmlcss}
            />
            <h6>HTML, CSS, JS</h6>
          </div>
          <div className="card">
            <img 
              src={mongo}
            />
            <h6>MongoDB</h6>
          </div> 
        </div>
      </div>

      <div className="links">
            <h2>Links</h2>
            <p>
                <span>Emo Diary (Deployed):</span>
                <Link to="https://emome.qamachine.com">https://emome.qamachine.com</Link>
            </p>
            <p>
                <span>EmoDiary Code (GitHub):</span>
                <Link to="https://github.com/martynenkoad/emodiary">https://github.com/martynenkoad/emodiary</Link>
            </p>
      </div>

        <Footer color="rgb(175, 6, 85)" />

        </div>
    )
}