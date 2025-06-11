import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useSignUp } from "./useSignup";

import Loading from "../../UI/Loading";
import InputBox from "../../UI/InputBox";
import Input from "../../UI/Input";
import InputIcon from "../../UI/InputIcon";
import { HiMiniAtSymbol, HiOutlineUser } from "react-icons/hi2";
import ErrorLabel from "../../UI/ErrorLabel";
import PasswordInput from "../../UI/PasswordInput";
import { useToggleShowPassword } from "../../Hooks/useToggleShowPassword";

function SignupForm() {
    const navigate = useNavigate();
    const {register , handleSubmit , formState , reset , getValues} = useForm();
    const {errors} = formState;

    const [showPassword , handleSetShowPassword] = useToggleShowPassword()
    const [showPasswordConfirmation , handleSetShowPasswordConfirmation] = useToggleShowPassword()

    const {signup , isSigningUp} = useSignUp();

    function handleSubmitFunction(signupData) {
      signup(signupData , {
        onSuccess : () => navigate("/exploreVideos"),
        onError : () => reset(),
      })
    }

    if(isSigningUp) return <Loading />

    return<>
            <div className="flex h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-mainBlue">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-text">
                  Sign up to your account
                </h2>
              </div>
                 
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit(handleSubmitFunction)}>
                <InputBox>
                <div className="relative">
                    <Input type = "text" placeholder="Username" disabled={isSigningUp} {...register("username" , {
                        required : "this field is required",
                    })}/>
                   <InputIcon>
                       <HiOutlineUser />
                    </InputIcon>
                </div>
                <ErrorLabel error = {errors?.username?.message} />
            </InputBox>

            <InputBox>
                <div className="relative">
                    <Input type = "email" placeholder="Your Email" disabled={isSigningUp} {...register("email" , {
                        required : "this field is required",
                    })}/>
                    <InputIcon>
                        <HiMiniAtSymbol />
                    </InputIcon>
                </div>
                <ErrorLabel error = {errors?.email?.message} />
            </InputBox>

            <PasswordInput
                showPassword = {showPassword} 
                handleSetShowPassword = {handleSetShowPassword} 
                errors = {errors?.password?.message} 
                isDisabled={isSigningUp} 
                register = {register}
                fieldName= "password"
                placeholder= "Create Password"
                requiredMessage= "this field is required"
                lengthMessage= "password must be at least 8 characters long."
            />

            <PasswordInput
                showPassword = {showPasswordConfirmation} 
                handleSetShowPassword = {handleSetShowPasswordConfirmation} 
                errors = {errors?.passwordConfirmation?.message} 
                isDisabled={isSigningUp} 
                register = {register}
                fieldName= "passwordConfirmation"
                placeholder= "Confirm Password"
                requiredMessage= "this field is required"
                lengthMessage= "password must be at least 8 characters long."
                validate = {(value) => value===getValues().password || "confirm password need to match password"}
            />
      
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-buttons px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
      
                <p className="mt-10 text-center text-sm/6 text-text">
                  Already Have an Account?{' '}
                  <button onClick={() => navigate("/login")} className="font-semibold text-buttons">
                    Click Here
                  </button>
                </p>
              </div>
            </div>
        </>
}
export default SignupForm;