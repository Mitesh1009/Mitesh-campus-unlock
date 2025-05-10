import Image from "next/image";
import Link from "next/link";
import bannerImage from "../../images/banner-image.png";

export default function HeroBanner() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row bg-orange-500">
          <div className="md:w-1/2 text-white p-8 md:p-16">
            <h1 className="text-5xl font-bold leading-tight">
              Cultivate a<br />
              culture
              <br />
              of learning
            </h1>
            <div className="mt-8">
              <Link
                href="/universities"
                className="inline-block bg-black text-white px-6 py-3"
              >
                Explore Universities
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 h-64 md:h-auto md:aspect-[4/3] relative">
            <Image
              src={bannerImage}
              alt="Students in lecture hall"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
