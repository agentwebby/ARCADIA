import Image from "next/image";
import form1 from "./ui/form1"
import { Suspense } from "react";
import Form1 from "./ui/form1";
import SubmitButton from "./ui/submitButton";


export default function Home() {
  
  return (
    <div 
      style={{justifyContent:"center"}}>
    <div
      style={{justifyContent:"center"}}>
    <Image
      src="/ui/img1.png"
      width={250}
      height={250}
      alt="Arcadia"
      priority
      quality={100}
    />
    <div
      style={{justifyContent:"center"}}>
    <Form1></Form1>
    </div>

    </div>


    </div>
      

    
  );
}



