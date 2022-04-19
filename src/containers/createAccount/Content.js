import React from "react"
import { LgText } from "components/LgText"
import { Input } from "components/form/Input"
import { Checkbox } from "components/form/Input"
import { SubmitButton } from "components/Button/Button"
import Image from  "assets/image.png"
import { LinkButton } from "components/Link"
import { Link } from "react-router-dom"


export const CreateAccountContent = () => {
  return (
    <>
        <div className="flex flex-row justify-between">
         <div className="relative bg-linearGradient">
           <img src={Image} /> 
           <span className="absolute bottom-40 left-5 text-justify text-white shadow-textShadow px-10 text-xl">Building exceptional services with Back Office Support and Business Perfomance</span>
          </div>
          <div className="px-20 pt-5">
             <LgText text="Create Account" />
             <p className="text-accent text-base leading-5 py-2 font-thin">Build an exceptional business</p>

             <div className="mt-4" >
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
                        className={"ml-5"}
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

                    <div className="flex flex-row justify-between content-center py-2">
                     <Checkbox 
                      type={"checkbox"}
                      name={"check"}
                      checked
                     />
                     <p className="text-sec text-sm ">Forgot Password?</p>
                   </div>
                    <SubmitButton type={"submit"}  text={"Sign Up"} />
                    <span  className="text-tert text-sm py-5 text-center block">Got an Account? <Link className="text-sec ml-2" to="/">Sign In</Link> </span>
                    {/* <LinkButton text={"Sign In"} /> */}
               </form>
             </div>
          </div>
        </div>
    </>
  )
}

