import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-red-50 to-red-100 min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20tech%20innovation%20workspace%20with%20floating%20digital%20elements%2C%20holographic%20interfaces%2C%20and%20clean%20minimalist%20design.%20Left%20side%20should%20have%20subtle%20gradient%20background%20perfect%20for%20text%20overlay%2C%20right%20side%20featuring%20futuristic%20technology%20concepts%2C%20neural%20networks%2C%20and%20abstract%20geometric%20shapes%20in%20red%20and%20burgundy%20tones.%20Professional%2C%20clean%2C%20and%20inspiring%20atmosphere.&width=1920&height=1080&seq=hero-bg-red-1&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Innovative
              <span className="text-[#922e2e]"> Tech Solutions</span>
              <br />
              for Tomorrow
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              At CODECELIX, we transform ideas into powerful digital experiences. Our cutting-edge technology solutions drive innovation, enhance productivity, and deliver exceptional results for businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#922e2e] text-white px-8 py-4 rounded-full hover:bg-[#7a2525] transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
                Get Started Today
              </button>
              <button className="border-2 border-[#922e2e] text-[#922e2e] px-8 py-4 rounded-full hover:bg-[#922e2e] hover:text-white transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#922e2e]">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#922e2e]">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#922e2e]">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#922e2e] to-red-600 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Sleek%20modern%20dashboard%20interface%20displaying%20analytics%20charts%2C%20data%20visualizations%2C%20and%20futuristic%20UI%20elements.%20Clean%20design%20with%20red%20and%20burgundy%20accents%2C%20floating%20cards%2C%20and%20innovative%20technology%20graphics.%20Professional%20tech%20company%20product%20showcase%20with%20modern%20typography%20and%20clean%20layout.&width=600&height=400&seq=hero-img-red-1&orientation=landscape"
                alt="CODECELIX Innovation Dashboard"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
