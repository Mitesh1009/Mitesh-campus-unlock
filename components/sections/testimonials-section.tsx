"use client";

import { useState, useRef, useEffect } from "react";
import Wrapper from "../wrapper";
import TestimonialCard from "../testimonial-card";
import { testimonials } from "@/utils/data";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount =
        index * (carouselRef.current.scrollWidth / testimonials.length);
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-12">
      <Wrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Read firsthand experiences and stories of success from students who
          have excelled with Campus Unlock
        </p>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-full md:w-auto"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
            onClick={prevSlide}
          >
            <span className="sr-only">Previous</span>
            &larr;
          </button>
          <button
            className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center"
            onClick={nextSlide}
          >
            <span className="sr-only">Next</span>
            &rarr;
          </button>
        </div>
      </Wrapper>
    </section>
  );
}
