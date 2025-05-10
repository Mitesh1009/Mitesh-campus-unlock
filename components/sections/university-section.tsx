import Image from "next/image";
import { universities } from "@/utils/data";

export default function UniversitySection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Empower Your Workforce Through
        <br />
        Top Universities
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
        {universities.map((uni, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={uni.logo}
              alt={uni.name}
              width={100}
              height={100}
              className="object-contain h-16"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
