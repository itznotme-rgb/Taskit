'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Bike,
  Wrench,
  Code,
  BookOpen,
  Heart,
} from 'lucide-react';

const categories = [
  {
    icon: Zap,
    emoji: '💪',
    title: 'Strength Tasker',
    color: 'from-red-500/20 to-pink-500/20',
    tasks: ['Heavy lifting', 'Furniture moving', 'Warehouse assistance'],
  },
  {
    icon: Bike,
    emoji: '🏍',
    title: 'Mobility Tasker',
    color: 'from-orange-500/20 to-yellow-500/20',
    tasks: ['Grocery shopping', 'Package pickup', 'Document delivery', 'Personal errands'],
  },
  {
    icon: Wrench,
    emoji: '🛠',
    title: 'Skilled Tasker',
    color: 'from-amber-500/20 to-orange-500/20',
    tasks: ['Home repairs', 'Furniture assembly', 'Installations'],
  },
  {
    icon: Code,
    emoji: '💻',
    title: 'Digital Tasker',
    color: 'from-blue-500/20 to-cyan-500/20',
    tasks: ['Data entry', 'Presentation creation', 'Technical assistance'],
  },
  {
    icon: BookOpen,
    emoji: '📚',
    title: 'Academic Tasker',
    color: 'from-indigo-500/20 to-purple-500/20',
    tasks: ['Tutoring', 'Assignment guidance', 'Notes preparation'],
  },
  {
    icon: Heart,
    emoji: '👴',
    title: 'Companion Tasker',
    color: 'from-pink-500/20 to-rose-500/20',
    tasks: ['Elderly assistance', 'Hospital companion', 'Daily support'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Tasker Category</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From strength to skills to companionship, find the perfect Tasker for your needs.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`group rounded-2xl p-8 bg-gradient-to-br ${category.color} glassmorphic border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Animated Background Blob */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ rotate: 10, scale: 1.2 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {category.emoji}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tasks List */}
                  <ul className="space-y-3">
                    {category.tasks.map((task, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          whileInView={{ scale: [0, 1] }}
                          transition={{ duration: 0.3 }}
                        />
                        {task}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    className="mt-6 w-full py-2 px-4 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore {category.title}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
