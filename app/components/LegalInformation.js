import React from 'react';
import { Layers, Package, Flag, Store, Tag } from 'lucide-react';

const LegalInformation = () => {
  const legalInfo = [
    {
      label: 'Manufactured By',
      value: 'Jaimala Design Company, 806, Wave Executive Floors, Wave City, Ghaziabad, Uttar Pradesh',
      icon: Layers
    },
    {
      label: 'Packed By',
      value: 'Jaimala Design Company, 806, Wave Executive Floors, Wave City, Ghaziabad, Uttar Pradesh',
      icon: Package
    },
    {
      label: 'Country Of Origin',
      value: 'INDIA',
      icon: Flag
    },
    {
      label: 'Marketed By',
      value: 'Jaimala Design Company, 806, Wave Executive Floors, Wave City, Ghaziabad, Uttar Pradesh',
      icon: Store
    },
    {
      label: 'Commodity',
      value: 'Garlands',
      icon: Tag
    }
  ];

  return (
    <div className="container mx-auto">
      <div className= "mx-auto bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 p-3">
          <h2 className="text-lg md:text-3xl font-bold text-white text-center tracking-wider uppercase">
            Legal Information
          </h2>
        </div>
        
        <div className=" p-3 space-y-2">
          {legalInfo.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-6 p-5 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300"
            >
              <div className="bg-orange-100 p-3 rounded-full">
                <item.icon className="w-6 h-6 text-orange-600" strokeWidth={1.5} />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-1">
                      {item.label}
                    </h3>
                    {item.label !== 'Country Of Origin' && (
                      <p className="text-gray-600 text-xs md:text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                  
                  {item.label === 'Country Of Origin' && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wider">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-100 p-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <span role="img" aria-label="verified" className="text-xl">🛡️</span>
            <span className="text-sm font-medium text-gray-700">
              Officially Verified Legal Information
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalInformation;