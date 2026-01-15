import React from 'react';
import { stats } from './DataStats';

const Stats = ({ 
  patternImage = '/logo/pattern1.png',
}) => {
 

  return (
    <div style={{ background: "var(--bg-navy-gradient)" }} className="w-full py-20  relative overflow-hidden">
      
        <div 
          className="absolute top-0 left-0 pointer-events-none overflow-hidden"
          style={{
            width: '',
            height: '470px',
          }}
        >
          <img 
            src={patternImage} 
            alt="" 
            className="w-full h-full object-contain"
            style={{
              opacity: 1
            }}
          />
        </div>
      
        <div 
          className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
          style={{
            width: '',
            height: '470',
          }}
        >
          <img 
            src={patternImage} 
            alt="" 
            className="w-full h-full object-contain"
            style={{
              transform: 'rotate(180deg)',
              opacity: 1
            }}
          />
        </div>
      

      {/* Stats Container */}
      <div className="max-w-[1438px] mx-auto relative z-10">
        <div className="bg-white rounded-lg shadow-xl px-8 md:px-16 py-12 max-w-[1055px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-charcoalGray mb-2"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(28px, 4vw, 36px)',
                    lineHeight: '44px'
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-charcoalGray"
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    lineHeight: '22px'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;