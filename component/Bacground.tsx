// components/Background.tsx
import { FC } from "react";

const Background: FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#f5fff6] flex items-center justify-center">
      {/* Green Arc Background */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-green-500 rounded-t-[100%]" />
      
      {/* Content Placeholder */}
      <div className="relative z-10 text-center">
        {/* 👇 Ye jagah tum custom content ke liye use kar sakte ho */}
        <h2 className="text-3xl font-bold">Your Content Here</h2>
        <p className="text-gray-600 mt-2">This is empty background component</p>
      </div>
    </div>
  );
};

export default Background;
