import React, { useState, useLayoutEffect } from 'react'
import "./NavBar.css"

function NavBar(props) {

    const [isScrolled, setIsScrolled] = useState(false);


    const onScroll = (e) => {
        const scrollPosition = window.scrollY;
        const maxScroll = 10;
        if (scrollPosition > maxScroll) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [setIsScrolled])


    return (
        <div className={["navbar", isScrolled && "navbar--scrolled"].filter(e => !!e).join(' ')}>
            <h1 className="navbar__title">Marvel Team Builder</h1>
        </div>
    )
}

export default NavBar