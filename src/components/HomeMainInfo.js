import React from "react"
import Header from "./Header"
import MainSection from "./MainSection"

export default function HomeMainInfo({ showInfo, setShowInfo }) {
    return (
        <div className="home-main-info">
            <Header 
              showInfo={showInfo}
              setShowInfo={setShowInfo}
            />
            <MainSection 
              showInfo={showInfo}
              setShowInfo={setShowInfo}
            />
        </div>
    )
}