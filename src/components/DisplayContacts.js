import React from "react"

export default function DisplayContacts() {
    return (
        <div className="display-contacts">
            <h2>Contact Me</h2>
            <p>Please feel free to contact with me via any convenient for you way {":)"}</p>
            <ul>
                <li>
                    <span className="green">Email: </span>
                    <a href="mailto:martynenkoad4@gmail.com">martynenkoad4@gmail.com</a>
                </li>
                <li>
                    <span className="green">Instagram: </span>
                    <a href="https://www.instagram.com/pterodaktel_40404">@pterodaktel_40404</a>
                </li>
                <li>
                    <span className="green">GitHub: </span>
                    <a href="https://github.com/martynenkoad">@martynenkoad</a>
                </li>
                <li>
                    <span className="green">WhatsApp: </span>
                    <a href="https://wa.me/31616748329">+31 616748329</a>
                </li>
            </ul>
        </div>
    )
}