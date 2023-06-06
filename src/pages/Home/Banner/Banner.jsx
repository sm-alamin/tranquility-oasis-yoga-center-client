import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <Slider {...settings} className="mb-20">
      <div className="bg-1"> 
        <div className="flex flex-col justify-center items-start ms-5" style={{height: '400px'}}>
            <h3 className="text-7xl font-extrabold text-white slider-text1">Meditation</h3>
           <div className="flex gap-2">
           <p className="text-white text-3xl slider-text2">Practice </p>
            <span className="text-green-300 text-3xl slider-text3">for All</span>
           </div>
           
        </div>
      </div>
      <div className="bg-2">
      <div className="flex flex-col justify-center items-start ms-5" style={{height: '400px'}}>
            <h3 className="text-7xl font-extrabold text-white slider-text1">Meditation</h3>
           <div className="flex gap-2">
           <p className="text-white text-3xl slider-text2">Practice </p>
            <span className="text-green-300 text-3xl slider-text3">for All</span>
           </div>
           
        </div>
      </div>
      <div className="bg-3">
      <div className="flex flex-col justify-center items-start ms-5" style={{height: '400px'}}>
            <h3 className="text-7xl font-extrabold text-white slider-text1">Meditation</h3>
           <div className="flex gap-2">
           <p className="text-white text-3xl slider-text2">Practice </p>
            <span className="text-green-300 text-3xl slider-text3">for All</span>
           </div>
           
        </div>
      </div>
      <div className="bg-4">
       <div className="flex flex-col justify-center items-start ms-5" style={{height: '400px'}}>
            <h3 className="text-7xl font-extrabold text-white slider-text1">Meditation</h3>
           <div className="flex gap-2">
           <p className="text-white text-3xl slider-text2">Practice </p>
            <span className="text-green-300 text-3xl slider-text3">for All</span>
           </div>
           
        </div>
      </div>
     
    </Slider>
  );
};

export default Banner;
