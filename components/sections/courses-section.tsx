import Wrapper from "../wrapper";
import CourseCard from "../course-card";
import { courses } from "@/utils/data";

export default function CoursesSection() {
  return (
    <section className="py-12 bg-orange-50">
      <Wrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Courses Offered For Your Team
        </h2>

        <div className="flex justify-center mb-8 space-x-4 overflow-x-auto pb-2">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            All Courses
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md">
            Bachelor's
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md">
            Executive Programs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
