import BackButton from "./BackButton";

function Error({errorText}) {
    return  <div className="w-full h-dvh bg-secondaryGray flex items-center justify-center">
        <BackButton  to = "explorer"/>
        <p className="bg-red-800 text-secondaryGray px-7 py-4 text-xl rounded-full uppercase font-bold">{errorText ? errorText : "an error occurred please try again🚫🚫"}</p>
    </div>
}
export default Error;