
import Iletisim from "@/components/Iletisim";
import { FeaturesTitle } from "@/components/Features";
import Process from "@/components/Process";
import { DrawerDialogDemo } from "../Draw";



export default function Cards() {
  return (
    <>
      <div className=" flex flex-col items-center justify-center   bg-black lg:px-12">
{/* bg-no-repeat  bg-cover  bg-center bg-[url('/img/bg2.jpg')] */}
      <FeaturesTitle />

<div className="">
  <Process />
</div>


        <div className="relative m-4 p-8">
          <DrawerDialogDemo />
        </div>
      </div>
    </>
  );
}


