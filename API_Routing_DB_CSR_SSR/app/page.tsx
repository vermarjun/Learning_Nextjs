"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function onSignin(){
    router.push("/signin")
  }
  function onSignup(){
    router.push("/signup")
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="w-80 gap-5 h-32 text-white flex flex-col justify-center items-center">
        <p className="font-normal text-xl">
          Hey, This is my first next.js website!
        </p>
        <div onClick={onSignin} className="bg-neutral-900 w-full py-2 rounded-xl text-center hover:cursor-pointer">
          Signin
        </div>
        <div onClick={onSignup} className="bg-neutral-900 w-full py-2 rounded-xl text-center hover:cursor-pointer">
          Signup
        </div>
      </div>
    </div>
  );
}
