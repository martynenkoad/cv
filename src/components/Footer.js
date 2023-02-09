import React from "react"
import { Link } from "react-router-dom"

export default function Footer({ color }) {
    return (
        <div className="footer">
          <Link to="/" style={{ color }}>
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
            <h2>Return back</h2>
          </Link>
        </div>
    )
}