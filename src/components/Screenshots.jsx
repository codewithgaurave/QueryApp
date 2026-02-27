import React from "react";
import img1 from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'
import img3 from '../../public/img3.jpg'
import img4 from '../../public/img4.jpg'
import img5 from '../../public/img5.jpg'

const screenshotUrls = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

export default function Screenshots() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <h3 className="text-3xl text-center font-semibold mb-8 underline-animate">App Screenshots</h3>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Experience the exact mobile interface — optimized for surveys, forms and fast responses.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 place-items-center">
          {screenshotUrls.map((s, i) => (
            <div
              key={i}
              className="
                bg-white rounded-[2.2rem] p-3 shadow-xl hover:shadow-2xl
                transition transform hover:-translate-y-1 cursor-pointer
                w-[200px] sm:w-[220px] md:w-[240px]
              "
            >
              {/* MOBILE FRAME (9:16 aspect ratio) */}
              <div className="relative w-full aspect-[9/16] bg-black rounded-[1.8rem] overflow-hidden">
                {/* Top notch line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-black rounded-b-2xl z-20" />

                {/* SCREEN IMAGE */}
                <img
                  src={s}
                  alt={`screenshot-${i}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-[1.6rem]"
                />
              </div>

              {/* Bottom home bar */}
              <div className="w-20 h-1.5 bg-gray-300 rounded-full mx-auto mt-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
