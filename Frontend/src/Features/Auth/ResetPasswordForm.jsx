import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useToggleShowPassword } from "../../Hooks/useToggleShowPassword";
import { useResetPassword } from "./useResetPassword";

import Form from "../../UI/Form";
import PasswordInput from "../../UI/PasswordInput";
import MiniSpinner from "../../UI/MiniSpinner";

function ResetPasswordForm() { 
    const navigate = useNavigate()
    const {register , handleSubmit , formState , getValues , reset } = useForm();
    const {errors} = formState;

    const [showPassword , handleSetShowPassword] = useToggleShowPassword()
    const [showPasswordConfirmation , handleSetShowPasswordConfirmation] = useToggleShowPassword()

    const {resetPassword , isResettingPassword} = useResetPassword()

    function handleSubmitFunction(data) {
        resetPassword(data , {
            onSuccess : () => navigate("/exploreVideos", { replace: true }),
            onError : () => reset(),
        })
    }

    return  <div className="flex flex-col gap-10 items-center justify-center h-dvh w-full bg-mainBlue">
    <Form onSubmit={handleSubmit(handleSubmitFunction)}>
        <p className="text-center text-text text-2xl opacity-70 italic">Enter your new password that will be used from now on</p>
        <PasswordInput
            showPassword = {showPassword} 
            handleSetShowPassword = {handleSetShowPassword} 
            errors = {errors?.password?.message} 
            isDisabled={isResettingPassword} 
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
            isDisabled={isResettingPassword} 
            register = {register}
            fieldName= "passwordConfirmation"
            placeholder= "Confirm Password"
            requiredMessage= "this field is required"
            lengthMessage= "password must be at least 8 characters long."
            validate = {(value) => value===getValues().password || "confirm password need to match password"}
        />

<button
                      type="submit"
                      disabled = {isResettingPassword}
                      className="flex w-full justify-center rounded-md bg-buttons px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons"
                    >
                      {isResettingPassword ? <MiniSpinner /> : "Reset your password now"}
                    </button>
    </Form>
</div>
}
export default ResetPasswordForm;