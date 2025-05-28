import { useEffect, useState } from 'react';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('how-it-works-section');
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

  const steps = [
    {
      icon: '🚀',
      title: 'Crie sua conta grátis em menos de 1 minuto',
      description: 'Registre-se rapidamente com e-mail ou redes sociais e comece a usar imediatamente.'
    },
    {
      icon: '📝',
      title: 'Registre seus primeiros lançamentos',
      description: 'Adicione suas receitas e despesas de forma simples e intuitiva, com categorização automática.'
    },
    {
      icon: '📊',
      title: 'Visualize gráficos, metas e organize sua rotina financeira',
      description: 'Acompanhe sua evolução financeira com dashboards personalizados e relatórios detalhados.'
    }
  ];

  return (
    <section 
      id="how-it-works-section"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Como começar com o Gerente Bigode
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Três passos simples para transformar sua gestão financeira.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute top-24 left-10 md:left-1/2 h-[calc(100%-6rem)] w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>
            
            {/* Passos */}
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center mb-16 last:mb-0 transition-all duration-700 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl z-10 mb-6 md:mb-0 ${index % 2 === 1 ? 'md:order-1 md:ml-8' : 'md:mr-8'}`}>
                  {step.icon}
                </div>
                
                <div className={`md:flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md ${index % 2 === 1 ? 'md:text-right md:mr-8' : 'md:ml-8'}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
