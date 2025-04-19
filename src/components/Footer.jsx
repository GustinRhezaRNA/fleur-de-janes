import React from 'react'
import { Instagram, Linkedin, Facebook, Dribbble } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-orange-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-playfair font-medium mb-6">Fleur de Janes</h2>
            <div className="space-y-2">
              {['Community', 'Team', 'Blog', 'Privacy Policy'].map((item) => (
                <a key={`footer-line-${item}`} href='#' className="h-5 block underline w-48">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-4 mb-4">
              
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-10 w-10 text-gray-800 hover:text-white transition-colors" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-10 w-10 text-gray-800 hover:text-white transition-colors" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-10 w-10 text-gray-800 hover:text-white transition-colors" />
              </a>
              <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
                <Dribbble className="h-10 w-10 text-gray-800 hover:text-white transition-colors" />
              </a>
            </div>
            <p className="text-sm">Come to our social media</p>
          </div>
        </div>
        <div className="mt-12 text-sm">© 2025 Rheza All Rights Reserved, Inc.</div>
      </div>
    </footer>
  )
}

export default Footer