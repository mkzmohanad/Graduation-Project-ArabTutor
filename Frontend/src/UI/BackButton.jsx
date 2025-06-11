import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function BackButton({to}){
    const navigate = useNavigate();
    
    function goingBack() {
        if(to === "explorer")   navigate("/exploreVideos")
        if(to === "stepBack")   navigate(-1)
    }

    return  <div onClick={goingBack} className="flex gap-1 absolute left-0 top-32 ml-10 items-center text-xl underline font-semibold cursor-pointer italic bg-buttons py-2 px-4 rounded-full text-text hover:scale-105 duration-300">
        <IoMdArrowRoundBack />
        <p>Back</p>
    </div>
}
export default BackButton;