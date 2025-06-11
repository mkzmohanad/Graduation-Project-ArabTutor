import { Link } from "react-router-dom";

function ForgetPasswordAction({path , action ,children}) {
    return  <div className="flex gap-3 text-text text-sm sm:text-base">{children}<Link to={`/${path}`} className="font-semibold text-buttons underline italic">{action}</Link></div>
}
export default ForgetPasswordAction;