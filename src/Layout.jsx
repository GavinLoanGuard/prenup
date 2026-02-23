import React from 'react';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <style>{`
        :root {
          /* Primary Palette - Warm neutrals with a refined accent */
          --color-primary: #1A1A1A;
          --color-primary-hover: #333333;
          --color-accent: #7C6A4F;
          --color-accent-hover: #6B5A40;
          
          /* Neutrals */
          --color-white: #FFFFFF;
          --color-cream: #FAFAF8;
          --color-gray-100: #F5F5F5;
          --color-gray-200: #E5E5E5;
          --color-gray-400: #999999;
          --color-gray-500: #666666;
          --color-gray-600: #333333;
          
          /* Typography Scale */
          --font-serif: 'Playfair Display', Georgia, serif;
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          
          /* Spacing Scale - 4px base */
          --space-1: 0.25rem;
          --space-2: 0.5rem;
          --space-3: 0.75rem;
          --space-4: 1rem;
          --space-5: 1.25rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-10: 2.5rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --space-20: 5rem;
          --space-24: 6rem;
          --space-32: 8rem;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-serif {
          font-family: var(--font-serif);
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom selection */
        ::selection {
          background-color: var(--color-accent);
          color: white;
        }
        
        /* Focus visible */
        *:focus-visible {
          outline: 2px solid var(--color-accent);
          outline-offset: 2px;
        }
      `}</style>
      
      <Navigation />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}