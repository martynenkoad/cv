import React from "react"
import {Link} from "react-router-dom"
import home from "../assets/haterville_assets/home.png"
import clickhate from "../assets/haterville_assets/clickhate.png"
import createpost from "../assets/haterville_assets/createpost.png"
import diary from "../assets/haterville_assets/diary.png"
import editprofile from "../assets/haterville_assets/editprofile.png"
import followers from "../assets/haterville_assets/followers.png"
import login from "../assets/haterville_assets/login.png"
import rating from "../assets/haterville_assets/rating.png"
import settings from "../assets/haterville_assets/settings.png"
import shop1 from "../assets/haterville_assets/shop1.png"
import shop2 from "../assets/haterville_assets/home.png"
import signup1 from "../assets/haterville_assets/signup1.png"
import signup2 from "../assets/haterville_assets/signup2.png"
import support from "../assets/haterville_assets/support.png"
import reacticon from "../assets/reacticon.png"
import nodeicon from "../assets/nodeicon.png"
import scssicon from "../assets/scssicon.png"
import express from "../assets/express.png"
import mongo from "../assets/MongoDB_Logo.svg.png"
import htmlcss from "../assets/HTML-CSS-JS-Logo.png"
import Footer from "../components/Footer"

export default function Haterville() {
    return (
        <div className="haterville">
            <div className="header">
                <Link to="/" className="arrow">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                    Back
                </Link>
                <h1>Haterville</h1>
            </div>

            <div className="desc">
                <p>Haterville is the place for everyone who is tired of all the annoying stuff about their life just like as the main developer. Nowadays, most of social network apps have so strict rules where it's hard to express yourself and if you are in the bad mood, want to scream at someone and you do it lets say on Facebook then you most likely will be banned. In Haterville it's not always about being angry and a big dick, it's more about being funny and sarcastic person without any limitations {";)"}</p>
            </div>

            <div className="goals">
                <h3>Goals of the project:</h3>
                <ul>
                  <li>Anonymous Social Network App</li>
                  <li>An ecological way to express the aggression</li>
                  <li>A place to find friends or so called 'haters'</li>
                  <li>Just to have fun</li>
                </ul>
  
            </div>

            <div className="page">
              <h3>Registration</h3>
              <p>All the information about user except username, profile image and description is seen only for the current user. Moreover, all the profile images atre prepared in advance. That makes Haterville more anonymous and more interesting to use - later you will understand why.</p>
              <ul>
                <h4>Required fields:</h4>
                <li>First Name (latin symbols only);</li>
                <li>Last Name (latin symbols only);</li>
                <li>Username (latin symbols and numbers only, must be unique);</li>
                <li>Username (must be unique);</li>
                <li>Password (the strong one is required).</li>
                <h4>Optional fields:</h4>
                <li>Profile Image;</li>
                <li>Profile Description.</li>
            </ul>

              <img 
                src={signup1}
                alt=""
              />
              <img 
                src={signup2}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Log In Page</h3>
              <p>Password recovery is available.</p>
              <img 
                src={login}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Home Page</h3>
              <p>Authorized users can access and search all the posts in Haterville, share thair own posts, leave comments and like/unlike posts. Users can navigate through different pages using the sidebar. All pages are available in two modes: cold and hot one. All the screenshots from the app on these page will be represented in the cold mode (except the Settings page), but please - feel free to check how does the hot mode look like {";)"}</p>
              <img 
                src={home}
                alt=""
              />
              <p>Users can share various posts.</p>
              <img 
                src={createpost}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Diary Page</h3>
              <p>This is user's profile page. The followers, following, click-hate rating, posts of the user and their so-called 'haters' (or subscribers) are displayed here.</p>

              <img 
                src={diary}
                alt=""
              />

              <p>Once user click the 'Followers' or 'Following' link, they can see such page:</p>
              <img 
                src={followers}
                alt=""
              />
              <p>If user decides to follow the 'ClickHate Rating' link, they see the following page:</p>
              <img 
                src={rating}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Support Page</h3>
              <p>This is the page where the users can find the answer to the most recently asked questions.</p>

              <img 
                src={support}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Settings Page</h3>
              <p>This page contains the user's information, some links and the button which toggles the appearance of the web-site (cold / hot colour accents).</p>
              
              <img 
                src={settings}
                alt=""
              />

              <p>Here users can also edit their profile:</p>
              <img 
                src={editprofile}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Click Hate</h3>
              <p>A page where users can increase the number of their click-hates. Users get new click-hates as they simply click on that big beautiful button. They may also change the label on the button. Later, users can use their click-hates to achieve new profile-images.</p>
              
              <img 
                src={clickhate}
                alt=""
              />
            </div>

            <div className="page">
              <h3>Click Hate Shop</h3>
              <p>This is the page where users can change their profile image and moreover - get new profile image items depending on their click-hate rating.</p>
              
              <img 
                src={shop1}
                alt=""
              />

              <p>Every profile image has its story and description which can be previewed by clicking on the icon.</p>
              <img 
                src={shop2}
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
              src={scssicon}
            />
            <h6>SCSS</h6>
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
                <span>Haterville (Deployed):</span>
                <Link to="https://haterville.qamachine.com">https://haterville.qamachine.com</Link>
            </p>
            <p>
                <span>Haterville Code (GitHub):</span>
                <Link to="https://github.com/martynenkoad/haterville">https://github.com/martynenkoad/haterville</Link>
            </p>
      </div>

        <Footer color="rgb(103, 99, 238)" />

        </div>
    )
}