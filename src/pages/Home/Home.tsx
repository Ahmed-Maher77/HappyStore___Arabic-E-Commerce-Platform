import LandingSlider from "../../components/LandingSlider/LandingSlider";
import SlideImage_1 from "../../assets/images/prod4.png";
import SlideImage_2 from "../../assets/images/slider1.png";
import SlideImage_3 from "../../assets/images/prod3.png";

const homeSlides = [
    {title: "هناك خصم كبير", description: "خصم يصل ٥٠% عند شرائك", image: SlideImage_1, bgColor: "#a8daea"},
    {title: "هناك خصم كبير", description: "اشتري منتجاتك المفضلة", image: SlideImage_2, bgColor: "#c1d2ff"},
    {title: "هناك خصم كبير", description: "احصلي على أدوات مطبخك بأقل الأسعار", image: SlideImage_3, bgColor: "#fbdfee"},
];

const Home = () => {
	return <div className="Home-Page" style={{height: "calc(100vh - 60px)"}}>
        <LandingSlider slides={homeSlides} />
        
        
    </div>;
};

export default Home;
