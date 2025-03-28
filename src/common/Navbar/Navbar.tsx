import { useState, useEffect, useRef, useCallback, memo } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../utils/redux-toolkit/hooks";
import Logo_Img from "../../assets/images/logo.png";
import Cart_Img from "../../assets/images/cart.png";
import "./Navbar.css";
import { navLinksTypes } from "../../utils/types/types";


// Define navigation links
const navLinks: navLinksTypes = [
    { title: "الرئيسية", link: "/", engTitle: "main" },
    { title: "تسجيل الدخول", link: "/login", engTitle: "login" },
    { title: "عربة التسوق", link: "/cart", icon: Cart_Img, engTitle: "cart" },
    { title: "المنتجات", link: "/products", engTitle: "products" },
];
export const permitedRoutes = navLinks.map((link) => link.link);


const Navbar = () => {
    const [isActive, setIsActive] = useState(false); // Track menu state
    const cartCount = useAppSelector((state) => state.cart.count);
    const isMobile = useAppSelector((state) => state.window.isMobile);

    const menuRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    // Toggle menu visibility (memoized for performance)
    const toggleMenu = useCallback((event?: React.MouseEvent<HTMLDivElement>) => {
        event?.stopPropagation();
        setIsActive((prev) => !prev);
    }, []);

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
                {/* =============================== Logo =============================== */}
                <NavLink to="/" className="logo">
                    <img src={Logo_Img} alt="شعار الموقع" className="h-[40px]" />
                </NavLink>

                {/* =============================== Mobile Menu Toggle =============================== */}
                {isMobile && (
                    <div
                        ref={buttonRef}
                        className={`burger-menu toggler ${isActive ? "active" : ""}`}
                        onClick={toggleMenu}
                        role="button"
                        tabIndex={0}
                        aria-label="فتح القائمة"
                    >
                        <div>
                            <span className="one"></span>
                            <span className="two"></span>
                            <span className="three"></span>
                        </div>
                    </div>
                )}

                {/* =============================== Overlay to close menu on click =============================== */}
                {isMobile && isActive && (
                    <div
                        className="overlay fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsActive(false)}
                        aria-hidden="true" 
                    ></div>
                )}

                {/* =============================== Navigation Menu =============================== */}
                <ul ref={menuRef} className={`main-list ${isActive || !isMobile ? "active" : ""} z-50`}>
                    {navLinks.map((link) => (
                        <li key={link.title}>
                            <NavLink
                                to={link.link}
                                className={({ isActive }) => (isActive ? "active" : "")}
                                onClick={() => setIsActive(false)}
                                aria-label={link.engTitle}
                            >
                                <div className="flex gap-4 lg:gap-2 items-center relative">
                                    {link.title}
                                    {/* Cart Icon with Badge */}
                                    {link.icon && (
                                        <div className="relative" aria-hidden="true">
                                            <img className="h-[20px]" src={link.icon} alt="عربة التسوق" />
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

export default memo(Navbar);
