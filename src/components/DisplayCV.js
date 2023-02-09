import React from "react"
import nodeicon from "../assets/nodeicon.png"
import express from "../assets/express.png"
import feathers from "../assets/feathers.png"
import reacticon from "../assets/reacticon.png"
import reduxicon from "../assets/reduxicon.png"
import scssicon from "../assets/scssicon.png"
import vue from "../assets/vue.png"
import vuex from "../assets/vuex.png"
import htmlcss from "../assets/HTML-CSS-JS-Logo.png"
import ts from "../assets/typescript-def.png"
import mongo from "../assets/MongoDB_Logo.svg.png"
import mysql from "../assets/mysql.png"

export default function DisplayCV() {
    return (
        <div className="display-cv">
            <div className="section">
                <h2>Employement History</h2>
                <div className="history">
                    <span className="date">Jun 2021 - Oct 2021:</span>
                    <span>Front-End Developer at HireBrains (Ukrainian Branch)</span>
                </div>
                <div className="history">
                    <span className="date">Oct 2021 - Present:</span>
                    <span>Various Freelance Projects</span>
                </div>
            </div>

            <div className="section">
                <h2>Education</h2>
                <div className="history">
                    <span className="date">2021 - Present:</span>
                    <span>Kyiv National University (Software Development)</span>
                </div>
            </div>

            <div className="section">
                <h2>Skills</h2>
                <h4>Front-End Development</h4>
                <div className="skill">
                    <div className="skills-section">
                        <div>
                            <img
                              src={reacticon}
                              alt="React Icon"
                            />
                            <p>ReactJS</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img
                              src={reduxicon}
                              alt="Redux Icon"
                            />
                            <p>Redux</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img
                              src={ts}
                              alt="TypeScript Icon"
                            />
                            <p>TypeScript</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img
                              src={vue}
                              alt="Vue Icon"
                            />
                            <p>VueJS</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img
                              src={vuex}
                              alt="VueX Icon"
                            />
                            <p>Vuex</p>
                        </div>
                    </div>

                    <div className="skills-section">
                        <div>
                            <img
                              src={scssicon}
                              alt="SCSS Icon"
                            />
                            <p>SCSS</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img
                              src={htmlcss}
                              alt="HTML+CSS+JS Icon"
                            />
                            <p>HTML, CSS, JS</p>
                        </div>
                    </div>
                </div>

                <h4>Back-End Development</h4>
                <div className="skill">
                    <div className="skills-section">
                        <div>
                            <img
                              src={nodeicon}
                              alt="Node Icon"
                            />
                            <p>NodeJS</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img
                              src={express}
                              alt="Express Icon"
                            />
                            <p>ExpressJS</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img
                              src={feathers}
                              alt="Feathers Icon"
                            />
                            <p>FeathersJS</p>
                        </div>
                    </div>
                </div>

                <h4>DataBases</h4>
                <div className="skill">
                    <div className="skills-section">
                        <div>
                            <img 
                              src={mongo}
                              alt="MongoDB Icon"
                            />
                            <p>MongoDB</p>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div>
                            <img 
                              src={mysql}
                              alt="MySQL Icon"
                            />
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="section">
                <h2>Languages</h2>
                <p>blabla bla</p>
            </div> */}
        </div>
    )
}