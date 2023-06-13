import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { GrYoga } from "react-icons/gr";
import { BiBody } from "react-icons/bi";
import { IoMdPulse } from "react-icons/io";
import { RiHeartPulseLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { JackInTheBox, Slide,Roll, Fade } from "react-awesome-reveal";

const Benifit = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "linear",
        });
        window.addEventListener("scroll", AOS.refresh);

    return () => {
      window.removeEventListener("scroll", AOS.refresh);
    };
      }, []);
  return (
    <div>
      <SectionHeader
        heading="The Main Reasons to Practice Yoga"
        tagline="Keep Healthy and Be Happy"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center p-2 " data-aos="fade-down">
        <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center gap-2">
          <div>
            <JackInTheBox><h3 className="text-custom">Good for Health</h3></JackInTheBox>
            <Slide><p className="text-slate-400">
              Yoga Fit is where you can find balance, harmony and energy. Yoga
              Fit is where you can find balance, harmony and energy.
            </p></Slide>
          </div>
         <Fade><div className="w-16 h-16 border rounded-s-full bg-custom">
         <GrYoga className="text-3xl mt-4 ms-3 text-indigo-600"/>
         </div></Fade>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div>
           <JackInTheBox> <h3 className="text-custom">Good for Body</h3></JackInTheBox>
           <Slide> <p className="text-slate-400">
              Yoga Fit is where you can find balance, harmony and energy. Yoga
              Fit is where you can find balance, harmony and energy.
            </p></Slide>
          </div>
         <Fade><div className="w-16 h-16 border rounded-s-full bg-custom">
         <BiBody className="text-3xl mt-4 ms-3 text-indigo-600"/>
         </div></Fade>
        </div>
        </div>

        <div>
            <img src='https://cdn.dribbble.com/users/2168142/screenshots/6310387/peerfit-walkcycles.gif' alt="" />
        </div>

        <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center gap-2">
          <div>
            <JackInTheBox><h3 className="text-custom">Good for Cardio</h3></JackInTheBox>
            <Slide><p className="text-slate-400">
              Yoga Fit is where you can find balance, harmony and energy. Yoga
              Fit is where you can find balance, harmony and energy.
            </p></Slide>
          </div>
        <Fade> <div className="w-16 h-16 border rounded-s-full bg-custom">
         <RiHeartPulseLine className="text-3xl mt-4 ms-3 text-indigo-600"/>
         </div></Fade>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div>
           <JackInTheBox> <h3 className="text-custom">Good for Breathing</h3></JackInTheBox>
            <Slide><p className="text-slate-400">
              Yoga Fit is where you can find balance, harmony and energy. Yoga
              Fit is where you can find balance, harmony and energy.
            </p></Slide>
          </div>
        <Fade> <div className="w-16 h-16 border rounded-s-full bg-custom">
         <IoMdPulse className="text-3xl mt-4 ms-3  text-indigo-600"/>
         </div></Fade>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Benifit;
