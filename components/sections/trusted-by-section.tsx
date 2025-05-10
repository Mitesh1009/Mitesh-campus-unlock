import Image from "next/image";
import Wrapper from "../wrapper";
import { trustedCompanies } from "@/utils/data";

export default function TrustedBySection() {
  return (
    <section className="py-12 bg-purple-800 text-white">
      <Wrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Trusted by over 15,000 millions of
          <br />
          learners around the world
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={100}
                height={50}
                className="object-contain h-10 md:h-12 opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
