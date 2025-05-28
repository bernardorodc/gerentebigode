import { useEffect, useState } from 'react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    // Mostrar o botão flutuante após rolagem
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowChat(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Botão flutuante de teste grátis */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <a 
          href="#testar" 
          className="flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <span className="mr-2">🚀</span>
          <span className="font-medium">Testar Grátis</span>
        </a>
      </div>

      {/* Botão de chat/ajuda */}
      <div 
        className={`fixed bottom-6 left-6 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <button 
          onClick={() => setShowChat(!showChat)}
          className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
        >
          {showChat ? (
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>

        {/* Janela de chat */}
        {showChat && (
          <div className="absolute bottom-16 left-0 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 bg-blue-600 text-white">
              <h3 className="font-medium">Suporte Gerente Bigode</h3>
              <p className="text-sm text-blue-100">Estamos online</p>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              <div className="mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg inline-block max-w-xs">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Olá! Como posso ajudar você hoje?
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Atendente • Agora</p>
              </div>
            </div>
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex">
              <input 
                type="text" 
                placeholder="Digite sua mensagem..." 
                className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingButton;
