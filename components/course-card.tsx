import Image from "next/image";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  image: string;
  image2: string;
  btn1: string;
  btn2: string;
  btn3: string;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative h-48">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-white py-1 px-2 rounded-tr-lg">
          <div className="flex items-center">
            <span className="text-xs font-medium">
              <Image
                src={course.image2 || "/placeholder.svg"}
                alt={course.title}
                width={70}
                height={70}
              ></Image>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
          {course.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-orange-500">
            {course.btn1}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-orange-500">
            {course.btn2}
          </span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-orange-500">
            {course.btn3}
          </span>
        </div>
      </div>
    </div>
  );
}
