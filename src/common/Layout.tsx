import { Outlet } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar/Navbar";
import MainLoader from "../components/Loader/MainLoader";
import { useAppDispatch } from "../utils/redux-toolkit/hooks";
import { setIsMobile } from "../utils/redux-toolkit/windowSlice";

const Layout = () => {
	const [showLoader, setShowLoader] = useState(true);
	const dispatch = useAppDispatch();

	// resize handler
    const handleResize = useCallback(() => {
        dispatch(setIsMobile(window.innerWidth < 992));
    }, [dispatch]);

    useEffect(() => {
        // Set initial isMobile state
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

	useEffect(() => {
        // Simulate a loading screen
        const timer = setTimeout(() => setShowLoader(false), 1000);
        return () => clearTimeout(timer);
    }, []);

	return (
		<>
			{/* {showLoader ? (
				<MainLoader />
			) : ( */}
				<div className="Layout mt-[60px]" role="main">
					<Navbar />
					<Outlet />
				</div>
			{/* )} */}
		</>
	);
};

export default Layout;
