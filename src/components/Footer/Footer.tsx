import { memo } from "react";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
	return (
		<footer className="main-bg text-white text-center py-6 rtl">
			<div className="container mx-auto px-4">
				<SocialIcons />

                {/* ============== Copyrights ============== */}
				<p className="text-sm">
					جميع الحقوق محفوظة &copy; {new Date().getFullYear()} |
					<a
						href="https://your-portfolio-link.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#4FC3F7] hover:underline mx-2 font-semibold"
					>
						أحمد ماهر
					</a>
				</p>
			</div>
		</footer>
	);
};

export default memo(Footer);
