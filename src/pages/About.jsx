import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <section>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h3 className="text-3xl font-serif text-[#764929] mb-8 text-center">Why we here?</h3>
          <p className="text-center mb-6 font">
          Fleur Janes is a fragrance-focused web application that helps perfume lovers discover elegant, high-quality scents from around the world. Our mission is to bring you closer to your perfect fragrance match, with a seamless experience browsing, exploring, and learning about exclusive perfumes from premium brands.
          </p>
      
      </div>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h3 className="text-3xl font-serif text-[#764929] mb-8 text-center">Contact Our Customer Service</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Get in Touch Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-serif mb-4">Get in Touch</h4>
            <p className="mb-6">
              Our dedicated customer service team is ready to assist you with any questions about our products, help
              with orders, or provide personalized fragrance recommendations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#764929]" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#764929]" />
                <span>customercare@fleurdejanes.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#764929]" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            <div>
              <p className="font-medium mb-3">Follow us on social media:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#764929] hover:text-[#d97f41] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#764929] hover:text-[#d97f41] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-[#764929] hover:text-[#d97f41] transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Send Us a Message Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-serif mb-4">Send Us a Message</h4>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#d97f41] text-white py-3 px-6 rounded-md font-medium hover:bg-[#c06a30] transition-colors w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
