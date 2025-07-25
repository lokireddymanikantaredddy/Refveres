import { motion } from 'framer-motion';
import ItemCard from './ItemCard';

const CategorySection = ({ 
  title, 
  items,
  className = '',
  gridCols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  borderColor = 'border-blue-500 dark:border-blue-400'
}) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`mb-10 w-full max-w-7xl mx-auto ${className}`}
    >
      <h2 className={`text-xl font-bold text-gray-700 dark:text-gray-100 mb-6 pl-3 border-l-4 ${borderColor}`}>
        {title}
      </h2>
      <div className={`grid ${gridCols} gap-4`}>
        {items.map((item, index) => {
          // Calculate a random delay between 0 and 0.3 seconds
          const randomDelay = Math.random() * 0.3;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: randomDelay
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ItemCard {...item} />
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default CategorySection;