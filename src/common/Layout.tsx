import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, memo } from "react";
import { useAppDispatch } from "../utils/redux-toolkit/hooks";
import { setIsMobile } from "../utils/redux-toolkit/windowSlice";
import Navbar, { permitedRoutes } from "./Navbar/Navbar";
import MainLoader from "../components/Loader/MainLoader";
import Footer from "../components/Footer/Footer";

const Layout = () => {
	const [showLoader, setShowLoader] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const dispatch = useAppDispatch();
    const location = useLocation();

	// Handle window resize
    const handleResize = useCallback(() => {
        dispatch(setIsMobile(window.innerWidth < 992));
    }, [dispatch]);

    useEffect(() => {
        handleResize(); // Set initial mobile state
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

	useEffect(() => {
        const timer = setTimeout(() => setShowLoader(false), 1000); // Simulate loading screen
        setShowFooter(permitedRoutes.includes(location.pathname));
        return () => clearTimeout(timer);
    }, [location.pathname]);

	return (
		<>
			{/* {showLoader ? (
				<MainLoader />
			) : ( */}
				<div className="Layout mt-[60px]" role="main">
					<Navbar />
					<Outlet />
					{showFooter && <Footer />}
				</div>
			{/* )} */}
		</>
	);
};

export default Layout;
