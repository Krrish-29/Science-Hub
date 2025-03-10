// import React from 'react';
// import { X, Home, Users, BookOpen, Newspaper, Lightbulb, Rocket, Cpu, Leaf, Globe, Video, MessageSquare, Bookmark, Settings, HelpCircle } from 'lucide-react';

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
//   return (
//     <aside 
//       className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transform ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 transition-transform duration-300 ease-in-out ${
//         isOpen ? 'md:relative' : 'md:hidden'
//       }`}
//     >
//       <div className="h-full flex flex-col">
//         <div className="flex items-center justify-between p-4 border-b">
//           <span className="text-blue-600 font-bold text-xl">ScienceHub</span>
//           <button
//             onClick={toggleSidebar}
//             className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
//           >
//             <X size={20} />
//           </button>
//         </div>
// const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
//   return (
//     <aside 
//       className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-lg transform ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 transition-transform duration-300 ease-in-out ${
//         isOpen ? 'md:relative' : 'md:hidden'
//       }`}
//     >
//       <div className="h-full flex flex-col">
//         <div className="flex items-center justify-between p-4 border-b">
//           <span className="text-blue-600 font-bold text-xl">*InnovX*</span>
//           <button
//             onClick={toggleSidebar}
//             className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
//           >
//             <X size={20} />
//           </button>
//         </div>
        
// //         <nav className="flex-1 overflow-y-auto py-4">
// //           <div className="px-4 mb-6">
// //             <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Main</h3>
// //             <div className="mt-2 space-y-1">
// //               {[
//                 { icon: <Home size={18} />, label: 'Home', active: true },
//                 { icon: <Users size={18} />, label: 'Network' },
//                 { icon: <MessageSquare size={18} />, label: 'Messages' },
//                 { icon: <Bookmark size={18} />, label: 'Saved' }
//               ].map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
//                     item.active
//                       ? 'bg-blue-50 text-blue-700'
//                       : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
//                   }`}
//                 >
//                   <span className={`mr-3 ${item.active ? 'text-blue-500' : 'text-gray-500 group-hover:text-gray-500'}`}>
//                     {item.icon}
//                   </span>
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="px-4 mb-6">
//             <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Discover</h3>
//             <div className="mt-2 space-y-1">
//               {[
//                 { icon: <Newspaper size={18} />, label: 'News' },
//                 { icon: <BookOpen size={18} />, label: 'Blogs' },
//                 { icon: <Lightbulb size={18} />, label: 'Breakthroughs' },
//                 { icon: <Globe size={18} />, label: 'Reports' },
//                 { icon: <Video size={18} />, label: 'Videos' }
//               ].map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//                 >
//                   <span className="mr-3 text-gray-500 group-hover:text-gray-500">
//                     {item.icon}
//                   </span>
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           <div className="px-4 mb-6">
//             <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Topics</h3>
//             <div className="mt-2 space-y-1">
//               {[
//                 { icon: <Cpu size={18} />, label: 'AI' },
//                 { icon: <Leaf size={18} />, label: 'Sustainability' },
//                 { icon: <Rocket size={18} />, label: 'Space Tech' },
//                 { icon: <Globe size={18} />, label: 'Digital Transformation' }
//               ].map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//                 >
//                   <span className="mr-3 text-gray-500 group-hover:text-gray-500">
//                     {item.icon}
//                   </span>
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </nav>
        
//         <div className="p-4 border-t">
//           <div className="space-y-1">
//             {[
//               { icon: <Settings size={18} />, label: 'Settings' },
//               { icon: <HelpCircle size={18} />, label: 'Help & Support' }
//             ].map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//               >
//                 <span className="mr-3 text-gray-500 group-hover:text-gray-500">
//                   {item.icon}
//                 </span>
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;