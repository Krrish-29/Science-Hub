import React from 'react';
import { Cpu, Leaf, Rocket, ArrowRight } from 'lucide-react';

const FeaturedContent: React.FC = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Featured</h2>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
          View all <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
              alt="AI Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <Cpu size={12} className="mr-1" /> AI
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                Breakthrough
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">New AI Model Achieves Human-Level Performance in Complex Problem Solving</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">Researchers have developed a revolutionary AI system that demonstrates unprecedented capabilities in solving complex problems across multiple domains.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">AI</span>
                </div>
                <div className="ml-2">
                  <p className="text-xs font-medium text-gray-900">AI Research Institute</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1548407260-da850faa41e3" 
              alt="Sustainable Energy" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <Leaf size={12} className="mr-1" /> Sustainability
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Report
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Breakthrough in Solar Cell Efficiency Could Revolutionize Renewable Energy</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">Scientists have developed a new type of solar cell that achieves 40% efficiency, potentially making solar energy more viable than ever before.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">SE</span>
                </div>
                <div className="ml-2">
                  <p className="text-xs font-medium text-gray-900">Sustainable Energy Foundation</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1517976487492-5750f3195933" 
              alt="Space Technology" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                <Rocket size={12} className="mr-1" /> Space Tech
              </span>
            </div>
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                News
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Private Space Company Announces Plans for First Commercial Mars Mission</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">A leading private space company has revealed ambitious plans to launch the first commercial mission to Mars within the next decade.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">ST</span>
                </div>
                <div className="ml-2">
                  <p className="text-xs font-medium text-gray-900">Space Technology News</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;