import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5";

function Search({setSearchValue , isDisabled}) {
    const {register , handleSubmit , reset} = useForm();

    function handleSubmitFunction({searchedVideos}) {
        // console.log(searchedVideos)
        setSearchValue(searchedVideos)
    }
    
    return  <form onSubmit={handleSubmit(handleSubmitFunction)} className="w-1/3 mx-auto">
        <div className="relative w-full">
            <input className="w-full px-3 py-2 rounded-full border-2 border-buttons
focus-visible:outline-buttons" type="text" placeholder="Search For Videos..."  {...register("searchedVideos")}/>
            <button type="submit" className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-5 text-xl">
                <IoSearch className=" "/>
            </button>
        </div>
    </form>
}
export default Search;