import React from 'react';
import { Cpu, Leaf, Rocket, Globe, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface ContentGridProps {
  searchQuery: string;
  activeFilters: {
    contentType: string[];
    topics: string[];
  };
}

// Mock data for content items
const contentItems = [
  {
    id: 1,
    title: 'The Future of Quantum Computing in AI Applications',
    excerpt: 'Exploring how quantum computing could revolutionize artificial intelligence and machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    author: 'Quantum AI Research',
    authorAvatar: 'QA',
    time: '4 hours ago',
    likes: 245,
    comments: 42,
    shares: 18,
    type: 'blog',
    topic: 'ai'
  },
  {
    id: 2,
    title: 'New Carbon Capture Technology Shows Promise in Industrial Tests',
    excerpt: 'A breakthrough carbon capture system has demonstrated 90% efficiency in recent industrial-scale tests.',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce',
    author: 'Climate Solutions',
    authorAvatar: 'CS',
    time: '1 day ago',
    likes: 189,
    comments: 27,
    shares: 56,
    type: 'news',
    topic: 'sustainability'
  },
  {
    id: 3,
    title: 'Robotics Startup Unveils Autonomous Warehouse Solution',
    excerpt: 'A new robotics platform promises to automate warehouse operations with minimal human intervention.',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa',
    author: 'Robotics Today',
    authorAvatar: 'RT',
    time: '2 days ago',
    likes: 132,
    comments: 19,
    shares: 24,
    type: 'news',
    topic: 'robotics'
  },
  {
    id: 4,
    title: 'SpaceX Successfully Tests New Reusable Rocket Engine',
    excerpt: 'The next-generation rocket engine completed its first full-duration test firing, marking a significant milestone.',
    image: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7',
    author: 'Space Exploration News',
    authorAvatar: 'SE',
    time: '3 days ago',
    likes: 312,
    comments: 48,
    shares: 87,
    type: 'news',
    topic: 'space-tech'
  },
  {
    id: 5,
    title: 'How Blockchain is Transforming Supply Chain Management',
    excerpt: 'An in-depth look at how distributed ledger technology is creating more transparent and efficient supply chains.',
    image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f',
    author: 'Digital Transformation Institute',
    authorAvatar: 'DT',
    time: '5 days ago',
    likes: 176,
    comments: 31,
    shares: 42,
    type: 'report',
    topic: 'digital-transformation'
  },
  {
    id: 6,
    title: 'Scientists Develop Self-Healing Materials for Electronics',
    excerpt: 'New research demonstrates materials that can automatically repair damage, potentially extending the lifespan of electronic devices.',
    image: 'https://images.unsplash.com/photo-1563770660941-10a63607692e',
    author: 'Materials Science Journal',
    authorAvatar: 'MS',
    time: '1 week ago',
    likes: 203,
    comments: 35,
    shares: 29,
    type: 'breakthrough',
    topic: 'digital-transformation'
  },
  {
    id: 7,
    title: 'The Ethics of AI: Ensuring Responsible Development',
    excerpt: 'A comprehensive framework for ethical AI development and deployment in critical applications.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    author: 'AI Ethics Foundation',
    authorAvatar: 'AE',
    time: '1 week ago',
    likes: 287,
    comments: 64,
    shares: 93,
    type: 'blog',
    topic: 'ai'
  },
  {
    id: 8,
    title: 'Renewable Energy Surpasses Fossil Fuels in European Grid',
    excerpt: 'For the first time, renewable energy sources have provided more electricity than fossil fuels across the European power grid.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7',
    author: 'European Energy Commission',
    authorAvatar: 'EE',
    time: '1 week ago',
    likes: 342,
    comments: 51,
    shares: 128,
    type: 'report',
    topic: 'sustainability'
  },
  {
    id: 9,
    title: 'NASA and ESA Announce Joint Mission to Search for Life on Europa',
    excerpt: 'The ambitious mission will send a specialized probe to investigate the potential for life in the subsurface ocean of Jupiter\'s moon.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9',
    author: 'Space Exploration Today',
    authorAvatar: 'ST',
    time: '2 weeks ago',
    likes: 456,
    comments: 87,
    shares: 134,
    type: 'news',
    topic: 'space-tech'
  }
];

const ContentGrid: React.FC<ContentGridProps> = ({ searchQuery, activeFilters }) => {
  // Filter content based on search query and active filters
  const filteredContent = contentItems.filter(item => {
    // Search filter
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Content type filter
    if (activeFilters.contentType.length > 0 && !activeFilters.contentType.includes(item.type)) {
      return false;
    }
    
    // Topic filter
    if (activeFilters.topics.length > 0 && !activeFilters.topics.includes(item.topic)) {
      return false;
    }
    
    return true;
  });

  // Get topic icon based on topic name
  const getTopicIcon = (topic: string) => {
    switch (topic) {
      case 'ai':
        return <Cpu size={12} className="mr-1" />;
      case 'sustainability':
        return <Leaf size={12} className="mr-1" />;
      case 'space-tech':
        return <Rocket size={12} className="mr-1" />;
      case 'digital-transformation':
      case 'robotics':
      default:
        return <Globe size={12} className="mr-1" />;
    }
  };

  // Get topic color based on topic name
  const getTopicColor = (topic: string) => {
    switch (topic) {
      case 'ai':
        return 'bg-blue-100 text-blue-800';
      case 'sustainability':
        return 'bg-green-100 text-green-800';
      case 'space-tech':
        return 'bg-indigo-100 text-indigo-800';
      case 'robotics':
        return 'bg-orange-100 text-orange-800';
      case 'digital-transformation':
      default:
        return 'bg-purple-100 text-purple-800';
    }
  };

  // Get content type color
  const getContentTypeColor = (type: string) => {
    switch (type) {
      case 'news':
        return 'bg-yellow-100 text-yellow-800';
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'breakthrough':
        return 'bg-purple-100 text-purple-800';
      case 'report':
        return 'bg-gray-100 text-gray-800';
      case 'video':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Latest Content</h2>
      </div>
      
      {filteredContent.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <p className="text-gray-600 mb-2">No content matches your current filters.</p>
          <p className="text-sm text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTopicColor(item.topic)}`}>
                    {getTopicIcon(item.topic)} 
                    {item.topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getContentTypeColor(item.type)}`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.excerpt}</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">{item.authorAvatar}</span>
                    </div>
                    <div className="ml-2">
                      <p className="text-xs font-medium text-gray-900">{item.author}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-3">
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <ThumbsUp size={16} className="mr-1" />
                    <span className="text-xs">{item.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <MessageSquare size={16} className="mr-1" />
                    <span className="text-xs">{item.comments}</span>
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <Share2 size={16} className="mr-1" />
                    <span className="text-xs">{item.shares}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentGrid;