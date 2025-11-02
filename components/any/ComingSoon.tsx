import Link from "next/link";
import React from "react";

const ComingSoon = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-3xl font-semibold mb-4">Coming Soon 🚧</h1>
      <p className="text-gray-600 max-w-md">
        We&apos;re currently working on this feature to bring you an even better
        experience. Please check back later!
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </section>
  );
};

export default ComingSoon;
