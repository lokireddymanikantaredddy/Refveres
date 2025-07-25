// Home.jsx
import Navbar from '../components/Navbar';
import contentData from '../data/contentData';
import CategorySection from '../components/CategorySection';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="h-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-100">
      <Navbar />
      <main className="pt-20 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-600 dark:text-blue-400">
            RefVeres
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-100 max-w-2xl mx-auto">
            The ultimate universe of Reference for developers.
          </p>
        </motion.div>
        <div className="container mx-auto px-4">
          {contentData.map((category, index) => (
            <CategorySection 
              key={index} 
              title={category.title} 
              items={category.items} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;