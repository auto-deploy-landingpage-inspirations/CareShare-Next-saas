import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <h1 className="text-xl font-bold text-center mt-14">
        <span className="text-green-500">CareShare</span> blogs
      </h1>

      <div className="flex md:flex-row flex-col justify-center  flex-wrap gap-4 m-10">
        <div className="max-w-xl">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <Image
              alt="blog-img"
              src="/blog-img.jpg"
              width={600}
              height={200}
            />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2022-10-10"
                className="block text-xs text-gray-500"
              >
                10th Feb 2024{" "}
              </time>

              <h3 className="mt-0.5 text-lg text-gray-900">
                Volunteer Spotlight: Making a Difference with CareShare
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Food security is not just about providing meals; it's about
                ensuring that all individuals have consistent access to enough
                food for an active and healthy life. That's why CareShare takes
                a holistic approach to tackling food insecurity, focusing on
                both short-term relief efforts and long-term solutions.
              </p>
            </div>
          </article>
        </div>
        <div className="max-w-xl">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <Image
              alt="blog-img"
              src="/blog-img2.jpg"
              width={600}
              height={200}
            />

            <div className="bg-white p-4 sm:p-6">
              <time
                datetime="2023-12-10"
                className="block text-xs text-gray-500"
              >
                {" "}
                10th April 2024{" "}
              </time>

              <h3 className="mt-0.5 text-lg text-gray-900">
                Empowering Through Education: CareShare's Impact on
                Underprivileged Communities
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                In our latest initiative, we have launched a scholarship program
                aimed at providing financial assistance to bright and deserving
                students from low-income backgrounds. Through generous donations
                from our supporters and partners, we have been able to award
                scholarships to dozens of students, allowing them to pursue
                their dreams of higher education.
              </p>
            </div>
          </article>
        </div>
        <button
          className="my-10 bg-green-500 px-20 py-5 rounded-md text-lg text-white font-bold text-center
      hover:bg-blue-500"
        >
          Read more Blogs..
        </button>
      </div>
    </>
  );
}
