import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../App';

const ContactForm = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Bringing your ideas to life.</span>
              <br />
              Let's turn your vision into reality
            </h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Have a project in mind or just want to chat? Let's connect!
            </p>
          </div>
          <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${darkMode ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="contact@example.com" className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent ${darkMode ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`} />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} placeholder="Your message here..." className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${darkMode ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 