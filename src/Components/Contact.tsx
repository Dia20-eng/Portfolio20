import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { Button, useMatches } from "@mantine/core";
import {  IconArrowRight,  } from "@tabler/icons-react";
import { FormatError } from '../../node_modules/pdfjs-dist/types/src/shared/util.d';
import { validateForm } from "./Validation";
import { MessagePayload } from '../../node_modules/@firebase/messaging/dist/esm/src/interfaces/public-types.d';
import { error } from "console";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";
const Contact=()=>{
    const form={
        name:"",
        email:"",
        phone:"",
        message:""

    }
    const [formData,setformData]=useState<{[key:string]:string}>(form);
    const[formError,setFormError]=useState<{[key:string]:string}>(form);
     const handleChange=(id:string,value:string)=>{
         setformData({...formData,[id]:value});
         setFormError({...formError,[id]: validateForm(id, value)});
     }

     const handleSubmit = async () => {
        let valid = true;
        let newFormError: { [key: string]: string } = {};
        // console.log("FormData before submission:", formData); 
    
        for (let key in formData) {
            const error = validateForm(key, formData[key]); 
            if (error && error.length > 0) { 
                newFormError[key] = error;
                valid = false;
            }
        }
    
        setFormError(newFormError); 
        if(valid){
            setformData(form);
            const docRef = await addDoc(collection(db, "diaportfolio"),formData);
            toast.success('Submitted successfully !', {duration:4000});
        }
        else{
            toast.error("Some error occured please try again.",{duration:4000});

        }
     }
     const btn=useMatches({
        xsm:'xs',
        md:'md',
        sm:'sm',
        ld:'lg'

     })
    return <div className ="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10  my-10 font-mono" id="Contact">
      <h1  className="text-4xl mb-10 text-center font-bold text-textColor"><span className="text-primarycolor">05.&nbsp;</span>Contact</h1>
      <div data-aos="flip-left" data-aos-duration="300" className=" w-[70%] lg-mx:w-full hover:shadow-[0_0_6px_0_#64FFDA]  m-auto  flex flex-col gap-6 rounded-3xl  border border-primarycolor  p-8" >
           <div className="text-3xl  text-white flex gap-2 items-center sm-mx:text-2xl xs-mx:xt-xl font-semibold">Let's Connect</div>
           <FloatingInput  id="name" name="Name" value={formData.name} handleChange={handleChange}error={formError.name}/>
           <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange}error={formError.email}/>
           <FloatingInput id="phone" name="Phone Number" value={formData.phone} handleChange={handleChange}error={formError.phone}/>
           <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange}error={formError.message}/>
           <Button  onClick={handleSubmit}rightSection={<IconArrowRight size={20}/>} fullWidth className="!text-bgcolor !font-bold" variant="filled" size={btn} radius="lg" color="#64FFDA">Send</Button>

      </div>
      </div>

}
export default Contact;