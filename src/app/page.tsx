import Image from "next/image";
import { Suspense } from "react";
import UploadForm from "./ui/uploadForm";


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
        className="centered-container centered-image"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <UploadForm  />
      </Suspense>
    </div>
  );
}



