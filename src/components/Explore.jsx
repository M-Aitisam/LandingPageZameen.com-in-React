import React from 'react';

const Explore = () => {
  const cards = [
    {
      title: "New Projects",
      description: "The best investment opportunities",
      icon: "explore1.png", // Replace with actual icons
     
    },
    {
      title: "Construction Cost Calculator",
      description: "Get construction cost estimate",
      icon: "explore2.png",
     
    },
    {
      title: "Home Loan Calculator",
      description: "Find affordable loan packages",
      icon:"explore3.png",
    
    },
    {
      title: "Area Guides",
      description: "Explore housing societies in Pakistan",
      icon: "explore4.png",
    
    },
    {
      title: "Plot Finder",
      description: "Find plots in any housing society",
      icon: "explore5.png",
      
    },
    {
      title: "Property Index",
      description: "Track changes in real estate prices",
      icon: "explore6.png",
   
    },
    {
      title: "Area Unit Converter",
      description: "Convert any area unit instantly",
      icon: "explore7.png",
 
    },
    {
      title: "Property Trends",
      description: "Find popular areas to buy property",
      icon: "explore8.png",
    
    },
  ];

  return (
    <div className="px-[6rem] mb-10">
      <h1 className="text-2xl font-bold ml-6 mt-2 ">Explore more on Zameen</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex items-center px-4 rounded-lg " >
            <img src={card.icon} alt={card.title} className="w-[7rem] h-[6rem] mr-4" />
            <div>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
