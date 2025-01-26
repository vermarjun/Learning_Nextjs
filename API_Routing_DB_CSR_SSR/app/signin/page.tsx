"use client"
import axios from "axios"
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function(){
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    async function handleSubmit(){
        const {data} = await axios.post("http://localhost:3000/api/v1/signin", {
            username: usernameRef.current?.value,
            password: passwordRef.current?.value
        });
        if (data.message == "Done"){
            router.push("/home")
        } else {
            console.log(data.error)
        }
    }
    return <div className="w-screen h-screen flex justify-center items-center bg-black">
    <div className="w-80 gap-5 h-32 text-white flex flex-col justify-center items-center">
      <p className="font-normal text-xl">
        Signin page
      </p>
      <input type="text" ref={usernameRef} placeholder="Username" className="bg-neutral-900 w-full py-2 rounded-xl px-3"/>
      <input type="text" ref={passwordRef} placeholder="Password" className="bg-neutral-900 w-full py-2 rounded-xl px-3"/>
      <div onClick={handleSubmit} className="bg-neutral-900 w-full py-2 rounded-xl text-center hover:cursor-pointer">
        Submit
      </div>
    </div>
  </div>
}