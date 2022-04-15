import React from "react"
import { LgText } from "components/LgText"
import { Input } from "components/Input"
import { Checkbox } from "components/Checkbox"
import { SubmitButton } from "components/Button"
import Image from  "assets/image.png"
import { LinkButton } from "components/Link"


export const CreateAccountContent = () => {
  return (
    <>
        <div className="flex flex-row">
         <div className="relative bg-linearGradient">
           <img src={Image} /> 
           <span className="absolute bottom-40 left-5 text-justify text-white shadow-textShadow px-10 text-xl">Building exceptional services with Back Office Support and Business Perfomance</span>
          </div>
          <div className="px-10 pt-5">
             <LgText text="Create Account" />
             <p className="text-accent text-base leading-5">Build an exceptional business</p>

             <div className="mt-5" >
               <form>
                   <div className="flex justify-between">
                     <Input
                        type={"text"}
                        label={"First Name"}
                        placeholder={"Enter your first name"}
                     />
                      <Input
                        type={"text"}
                        label={"Last Name"}
                        placeholder={"Enter your last name"}
                     />
                   </div>

                   <Input
                        type={"telephone"}
                        label={"Phone Number"}
                        placeholder={"Enter your phone number"}
                     />

                    <Input
                        type={"email"}
                        label={"Email Address"}
                        placeholder={"Enter your email"}
                     />

                    <Input
                        type={"password"}
                        label={"Password"}
                        placeholder={"Enter your password"}
                     />

                    <div className="flex flex-row justify-between content-center">
                     <Checkbox />
                     <p>Forgot Password?</p>
                   </div>
                    <SubmitButton type={"submit"} text={"Sign Up"} />
                    <span>Got an Account?</span>
                    {/* <LinkButton text={"Sign In"} /> */}
               </form>
             </div>
          </div>
        </div>
    </>
  )
}

