// import { useState } from 'react';
// import { Filter, X, BookOpen, Newspaper, Lightbulb, Rocket, Cpu, Leaf, Globe, Video } from 'lucide-react';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import FeaturedContent from './components/FeaturedContent';
// import ContentGrid from './components/ContentGrid';

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeFilters, setActiveFilters] = useState<{ contentType: string[], topics: string[] }>({
//     contentType: [],
//     topics: []
//   });

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   const toggleFilter = (category: 'contentType' | 'topics', value: string) => {
//     setActiveFilters(prev => {
//       const currentFilters = [...prev[category]];
//       const index = currentFilters.indexOf(value);
      
//       if (index === -1) {
//         currentFilters.push(value);
//       } else {
//         currentFilters.splice(index, 1);
//       }
      
//       return {
//         ...prev,
//         [category]: currentFilters
//       };
//     });
//   };

//   const clearFilters = () => {
//     setActiveFilters({
//       contentType: [],
//       topics: []
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar 
//         toggleSidebar={toggleSidebar} 
//         searchQuery={searchQuery}
//         handleSearch={handleSearch}
//       />
      
//       <div className="flex">
//         <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
//         <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : ''}`}>
//           <div className="container mx-auto px-4 py-6">
//             <div className="mb-6">
//               <div className="flex flex-wrap items-center gap-2 mb-4">
//                 <h2 className="text-2xl font-bold text-gray-800 mr-auto">Discover Innovation</h2>
                
//                 <div className="relative inline-block">
//                   <button 
//                     className="flex items-center space-x-1 bg-white border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                     onClick={() => document.getElementById('filterMenu')?.classList.toggle('hidden')}
//                   >
//                     <Filter size={16} />
//                     <span>Filters</span>
//                     {(activeFilters.contentType.length > 0 || activeFilters.topics.length > 0) && (
//                       <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                         {activeFilters.contentType.length + activeFilters.topics.length}
//                       </span>
//                     )}
//                   </button>
                  
//                   <div id="filterMenu" className="hidden absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg z-10 p-4">
//                     <div className="flex justify-between items-center mb-3">
//                       <h3 className="font-semibold text-gray-700">Filters</h3>
//                       {(activeFilters.contentType.length > 0 || activeFilters.topics.length > 0) && (
//                         <button 
//                           onClick={clearFilters}
//                           className="text-sm text-blue-500 hover:text-blue-700"
//                         >
//                           Clear all
//                         </button>
//                       )}
//                     </div>
                    
//                     <div className="mb-4">
//                       <h4 className="text-sm font-medium text-gray-700 mb-2">Content Type</h4>
//                       <div className="space-y-2">
//                         {[
//                           { icon: <Newspaper size={14} />, label: 'News', value: 'news' },
//                           { icon: <BookOpen size={14} />, label: 'Blog', value: 'blog' },
//                           { icon: <Lightbulb size={14} />, label: 'Breakthrough', value: 'breakthrough' },
//                           { icon: <Video size={14} />, label: 'Video', value: 'video' },
//                           { icon: <Globe size={14} />, label: 'Report', value: 'report' }
//                         ].map(item => (
//                           <div key={item.value} className="flex items-center">
//                             <input
//                               type="checkbox"
//                               id={`content-${item.value}`}
//                               checked={activeFilters.contentType.includes(item.value)}
//                               onChange={() => toggleFilter('contentType', item.value)}
//                               className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                             />
//                             <label htmlFor={`content-${item.value}`} className="ml-2 flex items-center text-sm text-gray-700">
//                               <span className="mr-1">{item.icon}</span> {item.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div>
//                       <h4 className="text-sm font-medium text-gray-700 mb-2">Topics</h4>
//                       <div className="space-y-2">
//                         {[
//                           { icon: <Cpu size={14} />, label: '*AI', value: 'ai' },
//                           { icon: <Leaf size={14} />, label: 'Sustainability', value: 'sustainability' },
//                           { icon: <Rocket size={14} />, label: 'Space Tech', value: 'space-tech' },
//                           { icon: <Globe size={14} />, label: 'Digital Transformation', value: 'digital-transformation' }
//                         ].map(item => (
//                           <div key={item.value} className="flex items-center">
//                             <input
//                               type="checkbox"
//                               id={`topic-${item.value}`}
//                               checked={activeFilters.topics.includes(item.value)}
//                               onChange={() => toggleFilter('topics', item.value)}
//                               className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                             />
//                             <label htmlFor={`topic-${item.value}`} className="ml-2 flex items-center text-sm text-gray-700">
//                               <span className="mr-1">{item.icon}</span> {item.label}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               {(activeFilters.contentType.length > 0 || activeFilters.topics.length > 0) && (
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {activeFilters.contentType.map(filter => (
//                     <span 
//                       key={`content-${filter}`}
//                       className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
//                     >
//                       {filter.charAt(0).toUpperCase() + filter.slice(1)}
//                       <button 
//                         onClick={() => toggleFilter('contentType', filter)}
//                         className="ml-1 text-blue-600 hover:text-blue-800"
//                       >
//                         <X size={14} />
//                       </button>
//                     </span>
//                   ))}
                  
//                   {activeFilters.topics.map(filter => (
//                     <span 
//                       key={`topic-${filter}`}
//                       className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
//                     >
//                       {filter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                       <button 
//                         onClick={() => toggleFilter('topics', filter)}
//                         className="ml-1 text-green-600 hover:text-green-800"
//                       >
//                         <X size={14} />
//                       </button>
//                     </span>
//                   ))}
                  
//                   <button 
//                     onClick={clearFilters}
//                     className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
//                   >
//                     Clear all
//                   </button>
//                 </div>
//               )}
//             </div>
            
//             <FeaturedContent />
//             <ContentGrid 
//               searchQuery={searchQuery}
//               activeFilters={activeFilters}
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;