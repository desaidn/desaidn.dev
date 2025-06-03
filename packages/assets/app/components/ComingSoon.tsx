import type { ReactElement } from "react";

export default function ComingSoon(): ReactElement {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <h1 className="text-gray-200 text-3xl lg:text-4xl font-bold mb-2">
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
}
