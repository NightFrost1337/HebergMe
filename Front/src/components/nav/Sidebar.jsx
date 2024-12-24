import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Server, Settings, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Overview', href: '/dash/dashboard' },
  { icon: Server, label: 'VPS Instances', href: '/dash/instances' },
  { icon: Settings, label: 'Settings', href: '/dash/settings' },
  { icon: HelpCircle, label: 'Support', href: '/dash/support' },
];

export default function Sidebar() {
  return (
    <motion.aside 
      className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <motion.li key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={item.href} className="flex items-center space-x-2 px-4 py-3 rounded hover:bg-gray-700 transition duration-300">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};