import React from "react";

export default function Aboutus() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-blue-50 p-6">
      <div className="w-full max-w-3xl mt-10 p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-6">
          <hr className="w-20 h-0.5 bg-blue-500 mr-2" />
          <span className="text-navy-700 font-semibold text-3xl sm:text-lg">
            About Us
          </span>
          <hr className="w-20 h-0.5 bg-blue-500 ml-2" />
        </div>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to <strong>Vaishno Management and Manpower Services</strong>
            , your trusted partner in talent acquisition and workforce
            solutions. At Vaishno, we specialize in connecting businesses with
            top-tier talent, providing comprehensive manpower solutions tailored
            to your unique needs.
          </p>
          <p>
            With a commitment to excellence and a focus on delivering results,
            Vaishno Management and Manpower Services stands as a beacon of
            reliability and professionalism in the recruitment industry. Our
            team of experienced recruiters possesses deep industry knowledge and
            a vast network of qualified candidates, enabling us to source the
            best talent across various sectors and industries.
          </p>
          <p>
            At Vaishno, we understand the critical role that manpower plays in
            driving business success. Whether you are a small startup or a large
            corporation, we offer a range of services to meet your staffing
            requirements, including permanent placement, temporary staffing,
            executive search, and project-based recruitment.
          </p>
          <p>
            Our dedication to client satisfaction sets us apart. We take the
            time to understand your company culture, values, and specific hiring
            needs to ensure that we provide candidates who not only possess the
            requisite skills and experience but also align with your
            organizational objectives.
          </p>
          <p>
            At Vaishno Management and Manpower Services, we believe in forging
            long-lasting partnerships built on trust, integrity, and mutual
            success. By leveraging our expertise and resources, we help
            businesses thrive by delivering top talent that drives innovation,
            productivity, and growth.
          </p>
          <p>
            Partner with Vaishno Management and Manpower Services today and
            experience the difference in recruitment excellence. Let us empower
            your business with the manpower solutions you need to achieve your
            goals and surpass expectations.
          </p>
        </div>
      </div>
    </div>
  );
}
