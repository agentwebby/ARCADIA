import Image from "next/image";

import { Suspense } from "react";


export default function Home() {
  
  return (
    <div
      style={{display: "flex",justifyContent:"center",alignItems: "flex-start",
              marginTop:"200px",marginBottom: "30px"              
      }
      }>
    <Image
      src="/ui/img1.png"
      width={250}
      height={250}
      alt="Arcadia"
      priority
      quality={100}
    />
    </div>
      

    
  );
}

