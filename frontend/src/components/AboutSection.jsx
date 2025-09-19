import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 text-center mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Circle image / emoji */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-blue-300 grid place-items-center shadow-lg">
              <span className="text-6xl">🎓</span>
            </div>
          </div>

          {/* Text */}
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              I'm Kshitij Pandey, an Operations &amp; Supply Chain professional with a continuous
              improvement mindset. I hold an MSc in Advanced Engineering Management (Merit) from
              Leeds Beckett University, specialising in AI’s impact on supply chain integration.
            </p>
            <p className="mb-4">
              My expertise spans Kaizen implementation, 5S methodology, JIT systems and data-driven
              decision making using Excel/Power BI and CRM systems. I’ve delivered measurable
              results across automotive, retail and manufacturing.
            </p>
            <p>
              Based in Oxford, UK — I’m passionate about leveraging AI and technology to modernise
              operations while maintaining customer satisfaction and operational excellence.
            </p>
          </div>
        </div>

        {/* Four small pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[
            ['📈','Data Analysis','Excel, Power BI, KPI tracking'],
            ['⚙️','Process Improvement','Lean, Kaizen, 5S'],
            ['🚚','Supply Chain','Planning, forecasting, logistics'],
            ['👥','Leadership','Stakeholder comms, mentoring']
          ].map(([icon, title, desc], i) => (
            <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full grid place-items-center mx-auto mb-4 text-2xl">
                {icon}
              </div>
              <div className="font-semibold text-blue-900 mb-1">{title}</div>
              <div className="text-sm text-gray-600">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
