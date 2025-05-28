import { useEffect, useState } from 'react';

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('pricing-section');
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
      id="pricing-section"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comece agora com o Gerente Bigode e organize suas finanças com estilo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plano Mensal */}
          <div 
            className={`bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-600 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mensal</h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">R$47</span>
                <span className="text-gray-600 dark:text-gray-300 ml-1">/mês</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-500 dark:text-gray-400">💸 Pagamento mensal</span>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Acesso completo</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Dashboard de gastos</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Exportação de relatórios</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Suporte personalizado</span>
                </li>
              </ul>
              
              <button className="w-full mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Começar Mensal
              </button>
            </div>
          </div>
          
          {/* Plano Anual */}
          <div 
            className={`bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden border-2 border-purple-400 dark:border-purple-500 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="absolute top-0 right-0">
              <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Mais vantajoso
              </div>
            </div>
            
            <div className="p-6 border-b border-gray-200 dark:border-gray-600 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-gray-700 dark:to-purple-900/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Anual</h3>
              <div className="flex items-end">
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">R$517</span>
                <span className="text-gray-600 dark:text-gray-300 ml-1">/ano</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-500 dark:text-gray-400">💰 Ganhe 2 meses grátis</span>
              </div>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Acesso completo</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Dashboard de gastos</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Exportação de relatórios</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Suporte personalizado</span>
                </li>
              </ul>
              
              <button className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-colors shadow-md">
                Assinar Anual
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
