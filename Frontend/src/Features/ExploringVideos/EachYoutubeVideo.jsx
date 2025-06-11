import { Link } from "react-router-dom";

function EachYoutubeVideo({eachVideo}) {
    
    return <div className="w-1/4 h-80 flex flex-col items-center justify-center gap-6 relative hover:scale-105 duration-500 bg-white shadow-lg px-3 rounded-2xl overflow-hidden">
        <Link to ="/dubbingVideo" state={{ videoData: eachVideo }} className="bg-black absolute z-10 w-full h-full cursor-pointer opacity-0"></Link>
        <iframe className="w-full h-52 rounded-xl" src={`https://www.youtube.com/embed/${eachVideo.id.videoId}`}>
            {eachVideo.snippet.title}
        </iframe>
        <div className="w-full text-center font-bold text-xl text-text">
            <p>{eachVideo.snippet.title}</p>
        </div>
    </div>
}
export default EachYoutubeVideo;