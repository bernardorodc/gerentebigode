import { useState, useEffect } from 'react';
import { toggleTheme } from '../lib/theme';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Verificar tema atual
    setIsDark(document.documentElement.classList.contains('dark'));
    
    // Adicionar listener para scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    toggleTheme();
    setIsDark(!isDark);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/logo icone.png" 
            alt="Gerente Bigode" 
            className="h-16 md:h-20"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#produtos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Produtos
            </a>
            <a href="#precos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Preços
            </a>
            <a href="#recursos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Recursos
            </a>
            <a href="#login" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
              Login
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#agendar" className="px-4 py-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Agendar Demonstração
            </a>
            
            <a href="#testar" className="px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-colors shadow-md">
              Testar Grátis
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Botão de tema (visível em todos os dispositivos) */}
          <button 
            onClick={handleToggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Alternar tema"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          
          {/* Menu mobile */}
          <button 
            className="md:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Menu mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <a href="#produtos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Produtos
              </a>
              <a href="#precos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Preços
              </a>
              <a href="#recursos" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Recursos
              </a>
              <a href="#login" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                Login
              </a>
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <a href="#agendar" className="px-4 py-2 text-center text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Agendar Demonstração
                </a>
                <a href="#testar" className="px-4 py-2 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-colors shadow-md">
                  Testar Grátis
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
