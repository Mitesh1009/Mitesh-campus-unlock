import Wrapper from "../wrapper";
import ContactForm from "../contact-form";

export default function ConnectSection() {
  return (
    <section className="py-12 bg-gray-50">
      <Wrapper>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-indigo-900">
          Connect with us
        </h2>
        <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto px-4">
          Getting confused? Don't know what's the best University & Course for
          your workforce? Don't you worry!
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
          <ContactForm />
        </div>
      </Wrapper>
    </section>
  );
}
