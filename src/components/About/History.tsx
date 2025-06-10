
import React from 'react';

const History = () => {
  const milestones = [
    { year: '1999', event: 'MediCare Hospital was founded with a vision to provide quality healthcare' },
    { year: '2005', event: 'Expanded with a new wing and advanced medical equipment' },
    { year: '2010', event: 'Introduced specialized departments for cardiology and neurology' },
    { year: '2015', event: 'Achieved accreditation for excellence in patient safety' },
    { year: '2020', event: 'Opened state-of-the-art emergency department' },
    { year: '2024', event: 'Celebrating 25 years of serving the community' }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a leading healthcare provider, 
            our journey has been marked by continuous growth and innovation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
