import React from 'react';
import { Bell, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="bg-white shadow-md py-4 px-6 flex justify-between items-center"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <h1 className="text-2xl font-bold text-gray-800">VPS Dashboard</h1>
      <div className="flex items-center space-x-4">
        <motion.button 
          className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Bell className="h-5 w-5 text-gray-600" />
        </motion.button>
        <motion.button 
          className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <User className="h-5 w-5 text-gray-600" />
        </motion.button>
      </div>
    </motion.header>
  );
};