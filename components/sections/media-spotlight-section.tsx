import Image from "next/image";
import Wrapper from "../wrapper";
import { mediaSpotlights } from "@/utils/data";

export default function MediaSpotlightSection() {
  return (
    <section className="py-12">
      <Wrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Media Spotlight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaSpotlights.map((media, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-48">
                <Image
                  src={media.image || "/placeholder.svg"}
                  alt={media.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  {media.title}
                </h3>
                <p className="text-xs text-gray-500 bg-orange-500 p-2 text-center text-white mt-2">
                  {media.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
            Explore Media
          </button>
        </div>
      </Wrapper>
    </section>
  );
}
