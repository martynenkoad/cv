import React from "react"
import signup from "../assets/signup.png"
import login from "../assets/login.png"
import home from "../assets/home.png"
import home2 from "../assets/home2.png"
import mainpage from "../assets/mainpage.png"
import createchatfortwo from "../assets/createchatfortwo.png"
import creategroupchat from "../assets/creategroupchat.png"
import createchannel from "../assets/createchannel.png"
import chatinfosidebar from "../assets/chatinfosidebar.png"
import chatsettings from "../assets/chatsettings.png"
import messagemenu from "../assets/messagemenu.png"
import voicemessageinput from "../assets/voicemessageinput.png"
import voicemessage from "../assets/voicemessage.png"
import imageinput from "../assets/imageinput.png"
import imageeditor from "../assets/imageeditor.png"
import imagemessage from "../assets/imagemessage.png"
import navbar from "../assets/navbar.png"
import profile from "../assets/profile.png"
import editprofile from "../assets/editprofile.png"
import supportpage from "../assets/supportpage.png"
import reacticon from "../assets/reacticon.png"
import reduxicon from "../assets/reduxicon.png"
import nodeicon from "../assets/nodeicon.png"
import scssicon from "../assets/scssicon.png"
import mongo from "../assets/MongoDB_Logo.svg.png"
import htmlcss from "../assets/HTML-CSS-JS-Logo.png"
import struct1 from "../assets/struct-1.png"
import struct2 from "../assets/struct-2.png"
import struct3 from "../assets/struct-3.png"
import struct4 from "../assets/struct-4.png"
import struct5 from "../assets/struct-5.png"
import struct6 from "../assets/struct-6.png"
import struct7 from "../assets/struct-7.png"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function Chatadil() {
    return (
        <div className="chatadil">
            <div className="header">
                <Link to="/" className="arrow">
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                    Back
                </Link>
                <h2>Chatadil | A secure Chat For Friends</h2>
            </div>

            <div className="desc">
              <p>
                Chatadil is a secure, fast and convenient way to share messages, communicate with your friends, family, colleguages and whoever you need to!
                Our team works to provide you with all needed features for having and nice conversation.
              </p>
            </div>

            <div className="goals">
                <h3>Goals of the project:</h3>
                <ul>
                  <li>Secure and Fast Chat App</li>
                  <li>Beautiful and Modern Design</li>
                  <li>Convenient communication</li>
                </ul>
  
            </div>

            <div className="page">
            <h3>Registration Page</h3>
            <p>All the information about user (except profile image) is required to provide the other users with the information about their interlocutor.</p>
            <ul>
                <h4>Required fields:</h4>
                <li>First Name (latin symbols only);</li>
                <li>Last Name (latin symbols only);</li>
                <li>Username (latin symbols and numbers only);</li>
                <li>Email (must be unique);</li>
                <li>Password (the strong one is required).</li>
                <h4>Optional fields:</h4>
                <li>Profile Image.</li>
            </ul>

            <img 
              src={signup}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Log In Page</h3>
            <p>Password Recovery is available.</p>

            <img 
              src={login}
            />
        </div>

        <div class="page">
            <h3>Home Page</h3>
            <p>Home Page provides the main information about Chatadil and our team of Chatadil developers.</p>

            <img 
              src={home}
              alt=""
            />

            <p>Our Team:</p>
            <img 
              src={home2}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Chat Page (Main Page)</h3>
            <p>This is the main page for chatting. It inckudes two parts: sidebar and the main part with all the messages in current chat.</p>

            <img 
              src={mainpage}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Create Chat</h3>
            <p>If you click on that small '+' in the bottom of sidebar, you will be redirected to /add-chat page where you can choose the option of which chat tou want to create.</p>

            <ul>
                <h4>Following options include:</h4>
                <li>
                    <h4>Chat for Two</h4>
                    <p>After clicking on user's info, you will ve redirected to the main page. If the chat with such user has existed, nothing would be changed. If it did not, the new chat for two with that user will appear on the sidebar.</p>
                    <img 
                      src={createchatfortwo}
                      alt=""
                    />
                </li>
                <li>
                    <h4>Group Chat</h4>
                    <p>Chat Name is required. Optional fields are description of the chat and the chat image. To create a group chat, the number of its members must be more than 3 (including administrator of the group chat).</p>
                    <img 
                      src={creategroupchat}
                      alt=""
                    />
                </li>
                <li>
                    <h4>Channel</h4>
                    <p>Chat Name is required. Optional fileds are description of the channel and the channel image. It's not allowed to add the members but administrators of channel may later share their channel via its link.</p>
                    <img 
                      src={createchannel}
                      alt=""
                    />
                </li>
            </ul>
        </div>

        <div class="page">
            <h3>Chat Information</h3>

            <p>As the new chat is created, it appears on the sidebar. After clicking on three dots in the right corner of chat name, the following information about selected chat is displayed on the sidebar:</p>
            <ul>
                <li>Chat Name;</li>
                <li>Chat Image;</li>
                <li>Date of creation;</li>
                <li>Administrator of the chat;</li>
                <li>Chat Members;</li>
                <li>Button to Leave the Chat;</li>
                <li>Button to Edit the Chat (if current user is the administrator of selected chat).</li>
            </ul>
            <img 
              src={chatinfosidebar}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Chat Settings</h3>
            <p>Button "Edit Chat" redirects administrator of the chat to the chat settings.</p>

            <ul>
                <h4>Following parametres may be changed:</h4>
                <li>Chat Name;</li>
                <li>Chat Description;</li>
                <li>Chat Image;</li>
                <li>Members of the chat.</li>
            </ul>

            <p>The administrator can also copy the link to their channel (if selected chat is channel of course).</p>

            <img
              src={chatsettings}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Message Options</h3>

            <p>As for the main part of Chat Page, here all the messages are displayed. On the right click on the message, there appears a message menu which allows user to manipulate selected message. Users are able to:</p>
            <ul>
                <li>Reply to messages;</li>
                <li>Forward messages to other chats;</li>
                <li>Like / unlike messages;</li>
                <li>Edit (Update) messages (if the current user is the sender of the selected message);</li>
                <li>Delete messages (if the current user is the sender of the selected message).</li>
            </ul>

            <img 
              src={messagemenu}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Message Input</h3>

            <p>Users can share not only text messages, but also images and voice messages.</p>
            <ul>
                <li>
                    <h4>Text Input</h4>
                    <p>Text input allows users to share the text messages up to 2000 characters.</p>
                </li>
                <li>
                    <h4>Voice Message Input</h4>
                    <p>By clicking on mic icon, user can share the voice message if it is allowed by browser.</p>
                    <img 
                      src={voicemessageinput}
                      alt=""
                    />

                    <p>The voice messages are displayed in the next way:</p>

                    <img 
                      src={voicemessage}
                      alt=""
                    />
                </li>
                <li>
                    <h4>Image Input</h4>
                    <p>Users can also share the images by clicking on the attachment icon. Selected images (up to 4) are displayed in the next way:</p>
                    <img 
                      src={imageinput}
                      alt=""
                    />

                    <p>Users can also edit and crop the selected images by clicking on them:</p>
                    <img 
                      src={imageeditor}
                    />

                    <p>The images are displayed the next way:</p>
                    <img 
                      src={imagemessage}
                      alt=""
                    />
                </li>
            </ul>
        </div>

        <div class="page">
            <h3>Navbar</h3>
            <p>By clicking on the little arrow after the users' username, the user can access the navbar.</p>
            <ul>
                <p>It includes the following options:</p>
                <li>Settings;</li>
                <li>Profile;</li>
                <li>A button to log out.</li>
            </ul>

            <img 
              src={navbar}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Users' Profile</h3>
            <p>Users can access their profile information by clicking on their profile image, username or button "My Profile" which is placed in the navbar.</p>

            <img 
              src={profile}
              alt=""
            />
        </div>

        <div class="page">
            <h3>Profile Settings</h3>
            <p>Users can access this page either by clicking on the button "Settings" inside their navbar or by clicking the pen-icon near by their username on the profile information.</p>
            <ul>
                <h4>The following items can be updated:</h4>
                <li>First Name;</li>
                <li>Last Name;</li>
                <li>Username;</li>
                <li>Profile Image;</li>
                <li>Locale of the application (Ukrainian / English).</li>
            </ul>

            <img 
              src={editprofile}
              alt=""
            />

            <p>Moreover, on this page users can access the Support Page.</p>
        </div>

        <div class="page">
            <h3>Support Page</h3>
            <p>On this page, users are able to send the email with a question if they need.</p>

            <ul>
                <h4>Required fields:</h4>
                <li>Name of the user;</li>
                <li>Email of the user;</li>
                <li>Question.</li>
            </ul>
            <img 
              src={supportpage}
              alt=""
            />
        </div>

        <div class="skills">
            <h3>Skills used in the project:</h3>

            <div class="card-container">
                <div class="card">
                    <img 
                      src={reacticon}
                      alt=""
                    />
                    <h6>ReactJS</h6>
                </div>
                <div class="card">
                    <img 
                      src={reduxicon}
                      alt=""
                    />
                    <h6>Redux (React Redux)</h6>
                </div>

                <div class="card">
                    <img 
                      src={nodeicon}
                    />
                    <h6>NodeJS (ExpressJS)</h6>
                </div>
                <div class="card">
                    <img 
                      src={mongo}
                      alt=""
                    />
                    <h6>MongoDB</h6>
                </div>

                <div class="card">
                    <img 
                      src={scssicon}
                      alt=""
                    />
                    <h6>SCSS</h6>
                </div>
                <div class="card">
                    <img 
                      src={htmlcss}
                      alt=""
                    />
                    <h6>HTML, CSS, JS</h6>
                </div>
            </div>
        </div>

        <div className="page struct">
            <h3>Project Structure</h3>

                <p>The project consist of 2 parts: Backend and Frontend. The whole project was created by using the MERN-stack.</p>

                <h4>Backend:</h4>
                <img 
                  src={struct1}
                  alt=""
                />
                <img 
                  src={struct2}
                  alt=""
                />

                <h4>Frontend:</h4>
                <img 
                  src={struct3}
                  alt=""
                />
                <img 
                  src={struct4}
                  alt=""
                />
                <img 
                  src={struct5}
                  alt=""
                />
                <img 
                  src={struct6}
                  alt=""
                />
                <img 
                  src={struct7}
                  alt=""
                />
            </div>
        
        <div className="links">
            <h2>Links</h2>
            <p>
                <span className="">Chatadil (Deployed):</span>
                <Link to="https://chatadil.qamachine.com/">https://chatadil.qamachine.com/</Link>
            </p>
            <p>
                <span className="">Chatadil Code (GitHub):</span>
                <Link to="https://github.com/martynenkoad/-chatadil">https://github.com/martynenkoad/-chatadil</Link>
            </p>
        </div>

        <Footer />

        </div>
    )
}