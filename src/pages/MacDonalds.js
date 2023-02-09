import React from "react"
import home from "../assets/mac_assets/home.png"
import homeFoundMac from "../assets/mac_assets/home-found-mac.png"
import ip1 from "../assets/mac_assets/ip-1.png"
import ip2 from "../assets/mac_assets/ip-2.png"
import aboutHeader from "../assets/mac_assets/about+header.png"
import aboutMenu from "../assets/mac_assets/about+menu.png"
import struct1 from "../assets/mac_assets/struct-1.png"
import struct2 from "../assets/mac_assets/struct-2.png"
import struct3 from "../assets/mac_assets/struct-3.png"
import { Link } from "react-router-dom"
import vue from "../assets/vue.png"
import vuex from "../assets/vuex.png"
import typescript from "../assets/typescript-def.png"
import nodeicon from "../assets/nodeicon.png"
import scssicon from "../assets/scssicon.png"
import htmlcss from "../assets/HTML-CSS-JS-Logo.png"
import express from "../assets/express.png"
import Footer from "../components/Footer"

export default function MacDonalds() {
    return (
        <div className="mac-donalds">
            <div className="header">
            <Link to="/" className="arrow">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                    Back
                </Link>
            <h1>MAC Donalds</h1>
        </div>

        <div class="desc">
          <p>The project which provides you with all the needed information about your MAC- and IP- address.</p>
        </div>

        <div class="goals">
          <h3>Goals of the project:</h3>

          <ul>
              <li>Let users know more about their device</li>
              <li>Convenient and beautiful design</li>
              <li>Improve VueJS & Typescript Skills</li>
          </ul>
        </div>

        <div class="page">
          <h3>Home Page</h3>
          <p>This page is pretty simple. You can use input to type your MAC-address. Of course, this input will be parsed and will not let users to input the wrong characters.</p>
          
          <img 
            src={home}
            alt=""
          />
        </div>

      <div class="page">
        <h3>Home Page | Your MAC Address is found</h3>
        <p>After connecting to the backend, received information is displayed for the user.</p>
        
        <img 
          src={homeFoundMac}
          alt=""
        />
      </div>

      
      <div class="page">
        <h3>About Page</h3>
        <p>This page contains information about MAC- & IP- addresses which was interesting for me while doing the project. Users can search wanted questions using the searchbar. On this screen you can also see the navbar.</p>
        
        <img 
          src={aboutMenu}
          alt=""
        />

        <p>A little title when you hover over the header will suggest user to click on it. If they do (and if they have the appropriate screen width), they will see a beautiful header. :)</p>

        <img 
          src={aboutHeader}
        />
      </div>

      
      <div class="page">
        <h3>IP Page</h3>
        <p>User can click on the button to get the information about their IP-address.</p>
        
        <img 
          src={ip1}
          alt=""
        />

        <p>After fetching to the backend, the information about IP-address appears on the screen. Also the animation is beautiful.</p>

        <img 
          src={ip2}
        />
      </div>

      <div class="skills">
        <h2>Skills used in the project:</h2>
        <div class="card-container">
          <div class="card">
            <img 
              src={vue}
            />
            <h6>VueJS</h6>
          </div>
          <div class="card">
            <img 
              src={vuex}
            />
            <h6>Vuex</h6>
          </div>
          <div class="card">
            <img 
              src={typescript}
            />
            <h6>Typescript</h6>
          </div>

          <div class="card">
            <img 
              src={nodeicon}
            />
            <h6>NodeJS</h6>
          </div>
          <div class="card">
            <img 
              src={express}
            />
            <h6>ExpressJS</h6>
          </div>
          <div class="card">
            <img 
              src={scssicon}
            />
            <h6>SCSS</h6>
          </div>         
          <div class="card">
            <img 
              src={htmlcss}
            />
            <h6>HTML, CSS, JS</h6>
          </div> 
        </div>
      </div>

      <div class="page struct">
        <h3>Project Structure</h3>
        <p>The project consists of both Backend & Frontend.</p>
        <h4>Backend:</h4>
        <img 
          src={struct1}
          alt=""
        />
        <h4>Frontend:</h4>
        <img 
          src={struct2}
          alt=""
        />
        <img 
          src={struct3}
          alt=""
        />
      </div>

      <div className="links">
            <h2>Links</h2>
            <p>
                <span>MacDonalds Code (GitHub):</span>
                <Link to="https://github.com/martynenkoad/mac-ip">https://github.com/martynenkoad/mac-ip</Link>
            </p>
      </div>

      <Footer color="rgb(19, 178, 19)" />
        </div>
    )
}