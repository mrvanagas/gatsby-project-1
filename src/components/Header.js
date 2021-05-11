import React from 'react'
import {Link} from 'gatsby'

export default function Header() {
    return (
        <header>
            <h1>logo</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
            </nav>
        </header>
    )
}
