import Image from "next/image";

import { Suspense } from "react";

import FirstForm from "./component/form";
import result from "./component/temporary/finished";
export default function Home() {
  
  return (
    <Suspense fallback = {<Loading />}>
      <FirstForm></FirstForm>
      

      </Suspense>
  );
}

function Loading(){
  return <h4>..Loading your page..</h4>
}
