function Button({type , onClick , disabled , children}) {

    const styles = {
        videoOperations : "bg-buttons font-bold px-3 py-2 rounded-xl text-text italic hover:scale-110 duration-500",
        confirmation : "font-bold bg-green-500 text-white rounded-full px-5 py-2 hover:scale-105 duration-300",
        cancel : "font-bold bg-red-500 text-white rounded-full px-5 py-2 hover:scale-105 duration-300",
        operations : "bg-buttons text-white font-bold px-3 py-2 rounded-xl text-text italic hover:scale-110 duration-300",
        landingPageButtons : "bg-buttons text-white font-bold px-3 py-2 w-full text-2xl rounded-xl text-text italic hover:scale-110 duration-500",
        danger : "font-bold bg-red-900 uppercase text-white rounded-full px-5 py-2 hover:scale-105 duration-300"
    }

    const disabledStyle = "!cursor-not-allowed opacity-50 "

    return  <button disabled = {disabled} onClick ={onClick} className={`${styles[type]} ${disabled && disabledStyle}`}>{children}</button>
}
export default Button;