import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useLogin } from "./useLogin";

import Loading from "../../UI/Loading";
import PasswordInput from "../../UI/PasswordInput";
import { useToggleShowPassword } from "../../Hooks/useToggleShowPassword";
import InputBox from "../../UI/InputBox";
import Input from "../../UI/Input";
import { HiMiniAtSymbol } from "react-icons/hi2";
import InputIcon from "../../UI/InputIcon";
import ErrorLabel from "../../UI/ErrorLabel";
import ForgetPasswordAction from "../../UI/ForgetPasswordAction";

function LoginForm(){
    const navigate = useNavigate();
    const {register , handleSubmit , formState , reset} = useForm()
    const {errors} = formState; 

    const {login , isLogging} = useLogin();
    const [showPassword , handleSetShowPassword] = useToggleShowPassword();

    function handleSubmitFunction(loginData) {
      login(loginData , {
        onSuccess : () => navigate("/exploreVideos"),
        onError : () => reset(),
      })
    }

    if(isLogging) return <Loading />

    return<>
            <div className="flex h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-mainBlue">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-text">
                  Welcome Back to ArabTutor
                </h2>
              </div>         
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(handleSubmitFunction)}>

                  <InputBox>
                    <div className="relative">
                        <Input type = "email" disabled={isLogging} placeholder ="Your Email" {...register("email" , {
                            required : "please enter your email first"
                        })}/>
                        <InputIcon>
                            <HiMiniAtSymbol />
                        </InputIcon>
                    </div>
                    <ErrorLabel error={errors?.email?.message} />
                  </InputBox>

                  <PasswordInput
                    showPassword = {showPassword} 
                    handleSetShowPassword = {handleSetShowPassword} 
                    errors = {errors?.password?.message} 
                    isDisabled={isLogging} 
                    register = {register}
                    fieldName= "password"
                    placeholder= "Enter Password"
                    requiredMessage= "please enter your password first"
                    lengthMessage= "password must be at least 8 characters long."
                  />
      
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-buttons px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons"
                    >
                      Log in
                    </button>
                  </div>
                </form>
      
                <p className="mt-10 text-center text-sm/6 text-text">
                  Create New Account?{' '}
                  <button onClick={() => navigate("/signup")} className="font-semibold text-buttons">
                  Click here{' '}
                  </button>
                </p>
                <ForgetPasswordAction path = "forgetPassword" action = "Reset Password Now">{"Forgot your password?"}</ForgetPasswordAction>
              </div>
            </div>
        </>
}
export default LoginForm;