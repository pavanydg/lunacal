import { RightBottom } from "@/components/RightBottom";
import { RightTop } from "@/components/RightTop";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <div className="bg-[#616161] h-[689px] w-[836px] rounded-3xl my-24">
        </div>
        <div className="relative flex flex-col justify-between rounded-3xl my-24">
          <RightTop />
          <div className="flex justify-center ">
            <div className="w-[612px] h-1 flex justify-center rounded-sm shadow-[0px_4px_4px_rgba(0,0,0,0.33)]">
              <div className="bg-gradient-to-b from-[#282828] to-[#F8F8F8] w-[612px] h-1 opacity-10">
              </div>
            </div>
          </div>
          <RightBottom />
        </div>
      </div>
    </div>
  );
}
