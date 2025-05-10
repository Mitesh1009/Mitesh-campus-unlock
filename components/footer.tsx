import Link from "next/link";
import Wrapper from "./wrapper";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <Wrapper>
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center md:justify-start text-center">
            <span className="text-orange-400 font-bold text-2xl">Campus</span>
            <span className="text-white font-bold text-2xl">Unlock</span>
          </div>
          <p className="mt-2 max-w-xl">
            Campus Unlock is your intuitive online educational guide, helping
            students with a wide range of learning opportunities from top
            universities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:text-orange-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/our-programs" className="hover:text-orange-300">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/universities" className="hover:text-orange-300">
                  Universities
                </Link>
              </li>
              <li>
                <Link
                  href="/meet-our-experts"
                  className="hover:text-orange-300"
                >
                  Meet Our Experts
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews-testimonials"
                  className="hover:text-orange-300"
                >
                  Reviews & Testimonials
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-orange-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-orange-300">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Online Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/finance" className="hover:text-orange-300">
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/marketing"
                  className="hover:text-orange-300"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/courses/hr" className="hover:text-orange-300">
                  HR
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/operations"
                  className="hover:text-orange-300"
                >
                  Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/business-analytics"
                  className="hover:text-orange-300"
                >
                  Business Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/organizational-leadership"
                  className="hover:text-orange-300"
                >
                  Organizational Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-science"
                  className="hover:text-orange-300"
                >
                  Data Science and Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/project-management"
                  className="hover:text-orange-300"
                >
                  Project Management
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/digital-marketing"
                  className="hover:text-orange-300"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/view-all"
                  className="hover:text-orange-300"
                >
                  View All
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Online & Distance Colleges
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/colleges/online-mba"
                  className="hover:text-orange-300"
                >
                  Best College for Online MBA
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges/online-ms-cs"
                  className="hover:text-orange-300"
                >
                  Best College for Online MS in CS
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges/online-ms-ds"
                  className="hover:text-orange-300"
                >
                  Best College for Online MS in DS
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges/online-ms-ce"
                  className="hover:text-orange-300"
                >
                  Best College for Online MS in CE
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges/online-ms-ee"
                  className="hover:text-orange-300"
                >
                  Best College for Online MS in EE
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges/online-ms-me"
                  className="hover:text-orange-300"
                >
                  Best College for ME (Online)
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges/online-ms-is"
                  className="hover:text-orange-300"
                >
                  Best College for Online MS in IS
                </Link>
              </li>
              <li>
                <Link
                  href="/colleges/online-ms-ba"
                  className="hover:text-orange-300"
                >
                  Best College for Online MS in BA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@campusunlock.com
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1-800-555-0123
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                123 Main St, Suite 456, Anytown 12345
              </p>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-orange-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-orange-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-orange-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-orange-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-300">
            <p>
              Copyright © {new Date().getFullYear()} Campus Unlock. All rights
              reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="/privacy" className="hover:text-orange-300">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-orange-300">
                Terms
              </Link>
              <Link href="/sitemap" className="hover:text-orange-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
