import { HiMiniAtSymbol } from "react-icons/hi2";

import Form from "../../UI/Form";
import Input from "../../UI/Input";
import InputBox from "../../UI/InputBox";
import InputIcon from "../../UI/InputIcon";
import ErrorLabel from "../../UI/ErrorLabel";
import { useForm } from "react-hook-form";
import { useForgetPasswordEmailConfirmation } from "./useForgetPasswordEmailConfirmation";
import MiniSpinner from "../../UI/MiniSpinner";

function ForgetPasswordEmailConfirmationForm() {
    const {register , handleSubmit , formState , reset } = useForm();
    const {errors} = formState; 

    const {forgetPasswordEmailConfirmation , isConfirming} = useForgetPasswordEmailConfirmation();

    function handleSubmitFunction(data) {
        // console.log(data)
        forgetPasswordEmailConfirmation(data , {
            onSettled : () => reset()
        })
    }

    return  <div className="flex flex-col gap-10 items-center justify-center h-dvh w-full bg-mainBlue">
        <Form onSubmit={handleSubmit(handleSubmitFunction)}>
            <p className="text-center text-text text-2xl opacity-70 italic">Enter your used email to reset your password</p>
            <InputBox>
                <div className="relative">
                    <Input type = "email" disabled={isConfirming} placeholder ="Your Email" {...register("email" , {
                        required : "please enter your email first"
                    })}/>
                    <InputIcon>
                        <HiMiniAtSymbol />
                    </InputIcon>
                </div>
                <ErrorLabel error={errors?.email?.message} />
            </InputBox>

                    <button
                      type="submit"
                      disabled = {isConfirming}
                      className="flex w-full justify-center rounded-md bg-buttons px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttons"
                    >
                      {isConfirming ? <MiniSpinner /> : "send reset password URL"}
                    </button>
        </Form>
    </div>
}
export default ForgetPasswordEmailConfirmationForm;