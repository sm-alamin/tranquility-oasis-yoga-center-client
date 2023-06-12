import ProgressBar from "@ramonak/react-progress-bar";


const SingleInstructor = ({instructor}) => {
    const {_id, instructor_name, instructor_email, instructor_position, instructor_photo} = instructor;
    return (
        <div className="border p-5 rounded-xl bg-custom">
                <img src={instructor_photo} alt="" className="w-full h-64" />
                <div className="text-center">
                <p className="text-xs text-secondary">{instructor_position}</p>
                <h3 className="text-3xl font-bold">{instructor_name}</h3>
                <h6 className="text-sm font-bold">{instructor_email}</h6>
                </div>
                <div className="flex flex-col">
                <span>Flow </span>
                <ProgressBar bgColor="#567444" animateOnRender={true} transitionDuration="3s" initCompletedOnAnimation={3} completed={97} />
                <span>Kundaini </span>
                <ProgressBar bgColor="#567444" transitionDuration="4s" animateOnRender={true} initCompletedOnAnimation={3} completed={75} />
                <span>Hatha </span>
                <ProgressBar bgColor="#309444" transitionDuration="5s" animateOnRender={true} initCompletedOnAnimation={3} completed={86} />
                </div>
            </div>
    );
};

export default SingleInstructor;