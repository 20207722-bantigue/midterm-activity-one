import { useState } from 'react';
import {Link} from "react-router"
const Navigation = () =>{
    const [hoveredLink, setHoveredLink] = useState(null);

    const linkStyle = (isHovered) => ({
        textDecoration: 'none',
        color: isHovered ? '#007bff' : '#333',
        fontWeight: 'bold',
        transition: 'color 0.3s'
    });

    return (
        <nav style={{
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Link 
                to="/Home" 
                style={linkStyle(hoveredLink === 'home')}
                onMouseEnter={() => setHoveredLink('home')}
                onMouseLeave={() => setHoveredLink(null)}
            >Home</Link>
            <Link 
                to="/About" 
                style={linkStyle(hoveredLink === 'about')}
                onMouseEnter={() => setHoveredLink('about')}
                onMouseLeave={() => setHoveredLink(null)}
            >About</Link>
            <Link 
                to="/Students" 
                style={linkStyle(hoveredLink === 'students')}
                onMouseEnter={() => setHoveredLink('students')}
                onMouseLeave={() => setHoveredLink(null)}
            >Students</Link>
        </nav>
    )
}

export default Navigation;