import Head from "next/head";
import { useState } from "react";

const galleryImages = [
  { src: "/work1.jpeg", alt: "Project 1" },
  { src: "/work2.jpg", alt: "Project 2" },
  { src: "/work3.jpeg", alt: "Project 3" },
  { src: "/work4.jpeg", alt: "Project 4" },
  { src: "/work5.jpg", alt: "Project 5" },
  { src: "/work6.jpeg", alt: "Project 6" },
  { src: "/work7.jpg", alt: "Project 7" },
  { src: "/work8.jpg", alt: "Project 8" },
  { src: "/work9.jpg", alt: "Project 9" },
  { src: "/work10.jpeg", alt: "Project 10" },
  { src: "/work11.jpg", alt: "Project 11" },
  { src: "/work12.jpg", alt: "Project 12" },
  // Add more images as needed
];

export default function Gallery() {
  const [expandedImg, setExpandedImg] = useState(null);

  return (
    <>
      <Head>
        <title>Gallery | BODANT INNOVATIVE RESOURCE LTD</title>
      </Head>
      <section className="w-screen min-h-[60vh] py-20 px-4 sm:px-16 z-10 relative bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-center">Project Gallery</h1>
        <p className="max-w-3xl text-lg text-neutralDark mb-12 text-center">
          Explore some of our completed projects and works. Click on any image to view it in a larger size.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={img.alt}
              className="rounded-xl shadow-md cursor-pointer object-cover w-full h-60 transition-transform duration-300 hover:scale-105"
              onClick={() => setExpandedImg(img.src)}
            />
          ))}
        </div>
        {expandedImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setExpandedImg(null)}
          >
            <img
              src={expandedImg}
              alt="Expanded Work"
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
            <button
              className="absolute top-8 right-8 text-white text-4xl font-bold"
              onClick={() => setExpandedImg(null)}
            >
              &times;
            </button>
          </div>
        )}
      </section>
    </>
  );
}