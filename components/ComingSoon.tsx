import React from "react";

interface Props {
  onClose?: () => void;
}

const ComingSoon = ({ onClose }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
      <h1 className="text-3xl font-semibold mb-4">Coming Soon 🚧</h1>
      <p className="text-gray-600 max-w-md">
        We&apos;re currently working on this feature. Please check back later!
      </p>
      <button onClick={onClose} className="mt-4">
        Close
      </button>
    </div>
  );
};

export default ComingSoon;
