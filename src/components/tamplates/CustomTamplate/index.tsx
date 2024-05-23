"use client";
import Custom1 from "@/components/organism/Custom1";
import Custom2 from "@/components/organism/Custom2";
import Custom3 from "@/components/organism/Custom3";
import CustomBGImage from "@/components/organism/CustomBGImage";
import { useEffect, useState } from "react";

const CustomTamplate = () => {
  const [level, setLevel] = useState(3);
  const [content, setContent] = useState(<Custom3></Custom3>);

  useEffect(() => {
    switch (level) {
      case 1:
        setContent(<Custom1></Custom1>);
        break;
      case 2:
        setContent(<Custom2></Custom2>);
        break;
      case 3:
        setContent(<Custom3></Custom3>);
        break;
      case 4:
        setContent(<Custom1></Custom1>);
        break;
      case 5:
        setContent(<Custom1></Custom1>);
        break;
      case 6:
        setContent(<Custom1></Custom1>);
        break;
    }
  }, [level]);

  return (
    <div>
      <div className="relative w-100vw h-66vw">
        <CustomBGImage />
        <div className="z-10 absolute w-full h-full flex justify-center">
          <div className="flex flex-col items-center w-1300 h-45vw border-x border-t border-black bg-white">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTamplate;
