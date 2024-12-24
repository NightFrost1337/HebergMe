import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Download } from 'lucide-react';
import Header from '@/components/nav/Header';
import Sidebar from '@/components/nav/Sidebar';

export default function Settings() {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const managePasswordChange = (e) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.name]: e.target.value
    });
  };

  const managePasswordSubmit = (e) => {
    e.preventDefault();
    console.log('Password change submitted:', passwordForm);
  };

  const manageExport = () => {
    console.log('Exporting data...');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800">Settings</h2>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Security</h3>
              </div>
              <form onSubmit={managePasswordSubmit} className="space-y-4">
                <div>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordForm.currentPassword}
                    onChange={managePasswordChange}
                    placeholder="Current Password"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordForm.newPassword}
                    onChange={managePasswordChange}
                    placeholder="New Password"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordForm.confirmPassword}
                    onChange={managePasswordChange}
                    placeholder="Confirm Password"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Change password
                </motion.button>
              </form>
            </motion.div>

            {/* Export Section */}
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Download className="h-6 w-6 text-blue-500" />
                <h3 className="text-xl font-semibold">Export Data</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Export all your VPS-related data in a JSON file. This file includes the
                main configuration information and credentials. This action may take some time,
                depending on the amount of data.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={manageExport}
                className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition duration-300"
              >
                Export data
              </motion.button>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};