"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Mrs. Rahman",
    role: "Mother of 5 Years Old",
    comment:
      "Hero Kidz এর খেলনাগুলো আমার সন্তানের শেখার আগ্রহ অনেক বাড়িয়েছে। খেলতে খেলতেই শেখে!",
    bg: "bg-gradient-to-br from-pink-50 to-pink-100",
  },
  {
    name: "Mr. Hasan",
    role: "Father of 7 Years Old",
    comment:
      "খুবই ভালো কোয়ালিটি এবং নিরাপদ খেলনা। একজন অভিভাবক হিসেবে আমি পুরোপুরি সন্তুষ্ট।",
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    name: "Mrs. Akter",
    role: "Mother of 4 Years Old",
    comment:
      "শিশুর সৃজনশীলতা বাড়ানোর জন্য Hero Kidz নিঃসন্দেহে সেরা। Highly recommended!",
    bg: "bg-gradient-to-br from-green-50 to-green-100",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="py-20 bg-base-200 overflow-hidden">
      <div className="container mx-auto px-4 text-center">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Happy <span className="text-primary">Parents</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-12 max-w-xl mx-auto"
        >
          আমাদের পণ্য ব্যবহার করে অভিভাবকদের বাস্তব অভিজ্ঞতা
        </motion.p>

        {/* Animated Card */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={index}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -120, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`card ${testimonials[index].bg} shadow-xl`}
          >
            <div className="card-body text-center">
              <p className="italic text-gray-700 leading-relaxed">
                “{testimonials[index].comment}”
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-lg">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button onClick={prev} className="btn btn-outline btn-sm">
              ← Previous
            </button>
            <button onClick={next} className="btn btn-primary btn-sm">
              Next →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
