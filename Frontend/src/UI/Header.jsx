import { GrLogout } from "react-icons/gr";
import { FaUpload, FaUserAlt } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLogout } from "../Features/Auth/useLogout";
import MiniSpinner from "./MiniSpinner";

function Header() {
    const {logout , isLoggingOut} = useLogout()

    function loggingOut() {
        logout();
    }

    return  <header className="w-full fixed top-0 z-50 bg-header h-20 flex justify-between items-center px-5 overflow-hidden shadow-xl">
        <div className="w-fit">
            <img src="/graduation-logo-removebg-preview.png" alt="graduation project icon" width={175} height={175}/>
        </div>
        <div className="flex items-center text-icons text-2xl gap-4">
            <Link to = "/exploreVideos"><MdHomeFilled className="cursor-pointer"/></Link>
            <Link to = "/favoriteVideos"><MdOutlineFavorite className="cursor-pointer" /></Link>
            <Link to = "/uploadVideo"><FaUpload className="cursor-pointer" /></Link>
            <Link to = "/profile"><FaUserAlt className="cursor-pointer" /></Link>
            {isLoggingOut ? <MiniSpinner /> : <GrLogout className="cursor-pointer" onClick={loggingOut}/>}

        </div>
    </header>
}
export default Header;