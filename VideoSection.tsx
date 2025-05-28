import { useEffect, useState } from 'react';

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('video-section');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar visibilidade inicial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="video-section"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-10 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Veja como o Gerente Bigode pode transformar sua vida financeira
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Em menos de 2 minutos, entenda tudo que você vai ganhar ao usar o Bigode.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl overflow-hidden shadow-lg">
            {/* Overlay para efeito de hover */}
            <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300"></div>
            
            {/* Botão de play centralizado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </div>
            
            {/* Texto de assistir */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <span className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white rounded-full font-medium">
                Assistir vídeo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
