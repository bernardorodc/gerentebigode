import { useEffect, useState } from 'react';

const ScreenshotSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('screenshot-section');
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

  // Automatizar o carrossel
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % screenshots.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const screenshots = [
    {
      title: "Dashboard Completo",
      description: "Visualize todos os seus dados financeiros em um único painel intuitivo e personalizável.",
      image: "dashboard"
    },
    {
      title: "Gráficos de Saldo",
      description: "Acompanhe a evolução do seu patrimônio com gráficos detalhados e interativos.",
      image: "graficos"
    },
    {
      title: "Lançamento de Despesas",
      description: "Registre suas despesas de forma rápida e organizada, com categorização automática.",
      image: "lancamentos"
    }
  ];

  return (
    <section 
      id="screenshot-section"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Conheça a Plataforma
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Veja como o Gerente Bigode transforma sua experiência financeira com uma interface moderna e intuitiva.
          </p>
        </div>
        
        <div className={`relative transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {screenshots[activeSlide].title}
              </div>
              <div className="w-16"></div> {/* Espaçador para centralizar o título */}
            </div>
            
            <div className="p-6 h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
              {/* Aqui seria a imagem do screenshot */}
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {activeSlide === 0 && "📊"}
                  {activeSlide === 1 && "📈"}
                  {activeSlide === 2 && "💰"}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {screenshots[activeSlide].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  {screenshots[activeSlide].description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Controles do carrossel */}
          <div className="flex justify-center mt-8 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSlide === index 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotSection;
