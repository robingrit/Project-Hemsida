import { useEffect, useState } from 'react';
import "./navbar.scss"
import { useLocation, useNavigate } from 'react-router-dom'; // Import Link, useLocation, and useNavigate

const logo_url = new URL('../../assets//EGG_logga_light_notxt2024.png', import.meta.url);

function Navbar() {
    const [navbarHeight, setNavbarHeight] = useState<number>(0);
    const [menuOpen, setMenuOpen] = useState<boolean>(false); // State to track menu
    const [scrollToSection, setScrollToSection] = useState<string | null>(null); // Section to scroll to after navigating
    const location = useLocation(); // Track the current route
    const navigate = useNavigate(); // Navigate to other routes

    // Scroll to the section with a calculated offset for the navbar height
    const scrollToClass = (className: string) => {
        const target = document.querySelector(`.${className}`) as HTMLElement | null;
        if (target) {
            const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
    };

    // Handle the Home button click
    const handleHomeClick = () => {
        if (location.pathname === '/') {
            // If already on the homepage, scroll to the home section
            scrollToClass('home_wrapper');
        } else {
            // If on a different page, navigate to the homepage
            navigate('/');
        }
    };

    // Handle other section clicks (e.g., Intro, Products, etc.)
    const handleSectionClick = (sectionClassName: string) => {
        if (location.pathname === '/') {
            // If already on the homepage, just scroll to the section
            scrollToClass(sectionClassName);
        } else {
            // If on a different page, set the section to scroll to and navigate to the homepage
            setScrollToSection(sectionClassName);
            navigate('/');
        }
    };

    useEffect(() => {
        if (scrollToSection && location.pathname === '/') {
            // Scroll to the section after the homepage is loaded
            scrollToClass(scrollToSection);
            setScrollToSection(null); // Clear the section to avoid unwanted scrolls
        }
    }, [scrollToSection, location.pathname]); // Run this effect when the route changes or scrollToSection is set

    useEffect(() => {
        const updateNavbarHeight = () => {
            const navbar = document.querySelector('.navbar_wrapper') as HTMLElement | null;
            if (navbar) {
                setNavbarHeight(navbar.getBoundingClientRect().height);
            }
        };

        // Update navbar height on mount and window resize
        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);

        return () => {
            window.removeEventListener('resize', updateNavbarHeight);
        };
    }, []);

    return (
        <div className="navbar_wrapper">
            <div id="left_container">
              <img src={logo_url.toString()} alt="Logo"
               onClick={handleHomeClick} 
               style={{ cursor: "pointer" }}   />
                <h2 id="brand_name" onClick={handleHomeClick}>En God Granne</h2>
            </div>

            <div
                id="right_container"
                className={menuOpen ? "open" : ""}
                onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
            >
                <h2 onClick={handleHomeClick}>Hem</h2>
                <h2 onClick={() => handleSectionClick('intro_wrapper')}>Intro</h2>
                <h2 onClick={() => handleSectionClick('products_intro_wrapper')}>Produkter</h2>
                <h2 onClick={() => handleSectionClick('about_wrapper')}>Om oss</h2>
                {/* <h2 onClick={() => handleSectionClick('partners_wrapper')}>Partners</h2> */}
                <h2 onClick={() => handleSectionClick('method-wrapper')}>Metod</h2>
                <h2 onClick={() => handleSectionClick('footer_wrapper')}>Kontakt</h2>

                
                {/*  <h2>
                    <Link to="/produkter">products</Link> 
                </h2> */}
            </div>

            {/* Hamburger icon */}
            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Navbar;
