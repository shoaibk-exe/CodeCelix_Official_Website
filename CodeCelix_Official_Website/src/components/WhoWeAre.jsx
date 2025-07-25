import React from "react";
import OurMission from "/WhoWeAre/Our-mission.jpg"
const WhoWeAre = () => (
  <section className="px-6 py-12 text-center">
    <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
    <p className="max-w-3xl mx-auto text-gray-700 mb-12">
      CODECELIX is a forward-thinking technology company dedicated to
      transforming businesses through innovative digital solutions. We combine
      technical expertise with creative vision to deliver exceptional results
      that drive growth and success.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ">
      <div className="flex flex-col items-center transition-shadow duration-300 group cursor-pointer">
        <div class="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 ">
          <i class="ri-lightbulb-line text-3xl text-[#922e2e] w-8 h-8 flex items-center justify-center"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">Innovation</h3>
        <p className="text-gray-600">
          We embrace cutting-edge technologies and creative solutions to solve
          complex challenges and drive digital transformation.
        </p>
      </div>
      <div className="flex flex-col items-center transition-shadow duration-300 group cursor-pointer">
        <div class="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group  group-hover:bg-red-100">
          <i class="ri-shield-check-line text-3xl text-[#922e2e] w-8 h-8 flex items-center justify-center"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">Integrity</h3>
        <p className="text-gray-600">
          We build trust through transparent communication, ethical practices,
          and delivering on our promises every time.
        </p>
      </div>
      <div className="flex flex-col items-center transition-shadow duration-300 group">
        <div class="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100">
          <i class="ri-rocket-line text-3xl text-[#922e2e] w-8 h-8 flex items-center justify-center"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">Delivery</h3>
        <p className="text-gray-600">
          We ensure timely, high-quality project delivery that exceeds
          expectations and drives measurable business results.
        </p>
      </div>
    </div>

    <div className="bg-pink-50 p-6 rounded-xl flex flex-col lg:flex-row items-center gap-6">
      <div className="flex-1 text-left">
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="mb-4 text-gray-700">
          To empower businesses with innovative technology solutions that drive
          growth, enhance efficiency, and create lasting value in the digital
          age.
        </p>
        <ul className="flex flex-wrap gap-8 text-green-600">
          <li className="flex items-center gap-2"><i class="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>Expert Team</li>
          <li className="flex items-center gap-2"><i class="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>Proven Track Record</li>
          <li className="flex items-center gap-2"><i class="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>24/7 Support</li>
        </ul>
      </div>
      <div className="flex-1">
        <img
          src={OurMission} 
          alt="CODECELIX Team Collaboration" class="w-full h-auto rounded-xl object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
);

export default WhoWeAre;
