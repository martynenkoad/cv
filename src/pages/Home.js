import React, { useState } from "react"
import HomeDisplayInfo from "../components/HomeDisplayInfo"
import HomeMainInfo from "../components/HomeMainInfo"

export default function Home() {
    const [showInfo, setShowInfo] = useState({
        showHome: true,
        showPortfolio: false,
        showContacts: false
    })

    return (
        <div className="home">
            <HomeMainInfo 
              showInfo={showInfo}
              setShowInfo={setShowInfo}
            />
            <HomeDisplayInfo 
              showInfo={showInfo}
            />
        </div>
    )
}