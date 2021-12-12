import { useState, useEffect } from "react"
import bgDesktop from "../images/bg-header-desktop.svg"
import bgMobile from "../images/bg-header-mobile.svg"

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    })

    return (
        <header>
            {width >= 550 ?  
            <img src={bgDesktop} alt="background-desktop-header" />
            : <img src={bgMobile} alt="background-mobile-header" />
            }
        </header>
    )
}

export default Header
