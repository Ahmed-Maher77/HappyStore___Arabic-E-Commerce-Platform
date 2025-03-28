import Logo_Img from "../../assets/images/logo.png";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { navLinksTypes } from "../../utils/types/types";
import Cart_Img from "../../assets/images/cart.png";
import { useAppSelector } from "../../utils/redux-toolkit/hooks";

// Define navigation links
const navLinks: navLinksTypes = [
    { title: "الرئيسية", link: "/", engTitle: "main" },
    { title: "تسجيل الدخول", link: "/login", engTitle: "login" },
    { title: "عربة التسوق", link: "/cart", icon: Cart_Img, engTitle: "cart" },
    { title: "المنتجات", link: "/products", engTitle: "products" },
];

const Navbar = () => {
    const [isActive, setIsActive] = useState(false); // Menu toggle state
    const cartCount = useAppSelector((state) => state.cart.count); // Cart item count
    const isMobile = useAppSelector((state) => state.window.isMobile); // Mobile view state

    const menuRef = useRef<HTMLUListElement>(null); // Ref for menu
    const buttonRef = useRef<HTMLDivElement>(null); // Ref for burger button

    // Toggle menu visibility
    const toggleMenu = (event?: React.MouseEvent<HTMLDivElement>) => {
        event?.stopPropagation();
        setIsActive((prev) => !prev);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current?.contains(event.target as Node) || 
                buttonRef.current?.contains(event.target as Node)
            ) {
                return;
            }
            setIsActive(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="nav-user relative">
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="logo">
                    <img src={Logo_Img} alt="logo" className="h-[40px]" />
                </NavLink>

                {/* Burger Menu (Mobile Only) */}
                {isMobile && (
                    <div
                        ref={buttonRef}
                        className={`burger-menu toggler ${isActive ? "active" : ""}`}
                        onClick={toggleMenu}
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle menu"
                    >
                        <div>
                            <span className="one"></span>
                            <span className="two"></span>
                            <span className="three"></span>
                        </div>
                    </div>
                )}

                {/* Overlay (Closes menu when clicked) */}
                {isMobile && isActive && (
                    <div
                        className="overlay fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsActive(false)}
                    ></div>
                )}

                {/* Navigation Menu */}
                <ul
                    ref={menuRef}
                    className={`main-list ${isActive || !isMobile ? "active" : ""} z-50`}
                >
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <NavLink
                                to={link.link}
                                className={({ isActive }) => (isActive ? "active" : "")}
                                onClick={() => setIsActive(false)}
                            >
                                <div className="flex gap-4 lg:gap-2 items-center relative">
                                    {link.title}
                                    {/* Cart Icon with Count Badge */}
                                    {link.icon && (
                                        <div className="relative">
                                            <img className="h-[20px]" src={link.icon} alt={link.title} />
                                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                                {cartCount > 99 ? "99+" : cartCount}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
