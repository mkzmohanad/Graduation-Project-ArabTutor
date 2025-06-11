import { Link } from "react-router-dom";

function EachUserFavoritesVideos({eachVideo}) {

    return <div className="w-1/4 h-80 flex flex-col items-center justify-center gap-6 relative hover:scale-105 duration-500 bg-white shadow-lg px-3 rounded-2xl overflow-hidden">
        <Link to ="/dubbingVideo" state={{ videoData: eachVideo }} className="bg-black absolute z-10 w-full h-full cursor-pointer opacity-0"></Link>
        <iframe className="w-full h-52 rounded-xl" src={eachVideo}></iframe>
    </div>
}
export default EachUserFavoritesVideos;