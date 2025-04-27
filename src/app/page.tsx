import Image from "next/image";
import form1 from "./ui/form1"
import { Suspense } from "react";
import Form1 from "./ui/form1";
import SubmitButton from "./ui/submitButton";


export default function Home() {
  
  return (
    <div className="centered-container">
      <Image
        src="/ui/img1.png"
        width={250}
        height={250}
        alt="Arcadia"
        priority
        quality={100}
        className="centered-container"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Form1/>
      </Suspense>
    </div>
      

    
  );
}



