import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css'
import { JackInTheBox, Slide,Roll } from "react-awesome-reveal";
import plantImg from '/plant.gif'

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <Slider {...settings} className="mb-20">
      <div className="bg-1 relative"> 
        <div className="flex flex-col justify-center items-start ms-5" style={{height: '400px'}}>
           <JackInTheBox delay={2e3} cascade damping={2e-1}> <h3 className="text-7xl font-extrabold text-white">Meditation</h3></JackInTheBox>
           <div className="flex gap-2">
           <Slide><p className="text-white text-3xl">Practice </p></Slide>
            <Roll><span className="text-indigo-600 text-3xl">for All</span></Roll>
           </div>
           
        </div>
        <div className="w-56 p-3 text-indigo-600 rounded-lg bg-custom shadow-custom absolute bottom-32 right-12">
          <img src={plantImg} alt="" className="relative -top-8 left-20"/>
          <Roll delay={2e3} cascade damping={2e-1}><p>Transform your body and mind through our Yoga Course, where you'll learn the art of harmonizing breath, movement, and intention.</p></Roll>
        </div>
      </div>
      <div className="bg-2 relative">
      <div className="flex flex-col justify-center items-end mr-5" style={{height: '400px'}}>
           <JackInTheBox delay={2e3} cascade damping={2e-1}> <h3 className="text-7xl font-extrabold text-white">Meditation</h3></JackInTheBox>
           <div className="flex gap-2">
           <Slide><p className="text-white text-3xl">Practice </p></Slide>
            <Roll><span className="text-indigo-600 text-3xl">for All</span></Roll>
           </div>
           
        </div>
        <div className="w-56 p-3 text-indigo-600 rounded-lg bg-custom shadow-custom absolute bottom-32 left-12">
          <img src={plantImg} alt="" className="relative -top-8 left-20"/>
          <Roll delay={2e3} cascade damping={2e-1}><p>Transform your body and mind through our Yoga Course, where you'll learn the art of harmonizing breath, movement, and intention.</p></Roll>
        </div>
      </div>
      <div className="bg-3 relative">
      <div className="flex flex-col justify-center items-start ms-5" style={{height: '400px'}}>
           <JackInTheBox delay={2e3} cascade damping={2e-1}> <h3 className="text-7xl font-extrabold text-white">Meditation</h3></JackInTheBox>
           <div className="flex gap-2">
           <Slide><p className="text-white text-3xl">Practice </p></Slide>
            <Roll><span className="text-indigo-600 text-3xl">for All</span></Roll>
           </div>
           
        </div>
        <div className="w-56 p-3 text-indigo-600 rounded-lg bg-custom shadow-custom absolute bottom-32 right-12">
          <img src={plantImg} alt="" className="relative -top-8 left-20"/>
          <Roll delay={2e3} cascade damping={2e-1}><p>Transform your body and mind through our Yoga Course, where you'll learn the art of harmonizing breath, movement, and intention.</p></Roll>
        </div>
      </div>
      <div className="bg-4 relative">
      <div className="flex flex-col justify-center items-end mr-5" style={{height: '400px'}}>
           <JackInTheBox delay={2e3} cascade damping={2e-1}> <h3 className="text-7xl font-extrabold text-white">Meditation</h3></JackInTheBox>
           <div className="flex gap-2">
           <Slide><p className="text-white text-3xl">Practice </p></Slide>
            <Roll><span className="text-indigo-600 text-3xl">for All</span></Roll>
           </div>
           
        </div>
        <div className="w-56 p-3 text-indigo-600 rounded-lg bg-custom shadow-custom absolute bottom-32 left-12">
          <img src={plantImg} alt="" className="relative -top-8 left-20"/>
          <Roll delay={2e3} cascade damping={2e-1}><p>Transform your body and mind through our Yoga Course, where you'll learn the art of harmonizing breath, movement, and intention.</p></Roll>
        </div>
      </div>
     
    </Slider>
  );
};

export default Banner;
