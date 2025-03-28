const socialLinks = Object.freeze([
	{ href: "https://your-portfolio-link.com", icon: "fas fa-globe", label: "Portfolio" },
	{ href: "https://linkedin.com/in/your-profile", icon: "fab fa-linkedin", label: "LinkedIn" },
	{ href: "https://github.com/your-github", icon: "fab fa-github", label: "GitHub" },
	{ href: "https://facebook.com/your-profile", icon: "fab fa-facebook", label: "Facebook" },
]);

const SocialIcons = () => {
	return (
		<div className="flex justify-center space-x-4 rtl:space-x-reverse mb-4 text-2xl">
			{socialLinks.map((link, index) => (
				<a
					key={index}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={link.label} // ✅ Accessibility improvement
					title={link.label} // ✅ Tooltip for better UX
					className="hover:text-gray-400 transition focus:outline-none focus:ring focus:ring-gray-500 rounded"
				>
					<i className={link.icon} aria-hidden="true"></i> {/* ✅ Decorative icon */}
				</a>
			))}
		</div>
	);
};

export default SocialIcons;
