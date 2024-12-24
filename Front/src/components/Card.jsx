import React from 'react';
import { Server, Power } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Card({ name, status, ip, cpu, ram, storage }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Server className="h-6 w-6 text-blue-500" />
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{ip}</p>
        <div className="space-y-2 mb-4">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${status === 'Running' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {status}
          </span>
          <p className="text-gray-700">CPU: {cpu}</p>
          <p className="text-gray-700">RAM: {ram}</p>
          <p className="text-gray-700">Storage: {storage}</p>
        </div>
        <motion.button 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Power className="mr-2 h-4 w-4" />
          {status === 'Running' ? 'Stop' : 'Start'}
        </motion.button>
      </div>
    </motion.div>
  );
};