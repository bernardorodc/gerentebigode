import { useEffect, useState } from 'react';

const ComparisonSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('comparison-section');
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

  const comparisonItems = [
    {
      feature: 'Lançamentos Manuais',
      planilhas: true,
      bigode: false
    },
    {
      feature: 'Gráficos Automáticos',
      planilhas: false,
      bigode: true
    },
    {
      feature: 'Alertas e Categorias',
      planilhas: false,
      bigode: true
    },
    {
      feature: 'Dark Mode',
      planilhas: false,
      bigode: true
    },
    {
      feature: 'Relatórios PDF',
      planilhas: false,
      bigode: true
    }
  ];

  return (
    <section 
      id="comparison-section"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher o Gerente Bigode no lugar das planilhas?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Compare e veja como podemos facilitar sua gestão financeira.
          </p>
        </div>
        
        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
            {/* Cabeçalho da tabela */}
            <div className="grid grid-cols-3 bg-gray-100 dark:bg-gray-600 p-4">
              <div className="text-gray-700 dark:text-gray-200 font-medium">Recurso</div>
              <div className="text-center text-gray-700 dark:text-gray-200 font-medium">Planilhas</div>
              <div className="text-center text-gray-700 dark:text-gray-200 font-medium">Gerente Bigode</div>
            </div>
            
            {/* Linhas da tabela */}
            {comparisonItems.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-750'} border-t border-gray-200 dark:border-gray-600`}
              >
                <div className="text-gray-700 dark:text-gray-300 font-medium">{item.feature}</div>
                <div className="text-center">
                  {item.planilhas ? (
                    <span className="text-green-500 text-2xl">✅</span>
                  ) : (
                    <span className="text-red-500 text-2xl">❌</span>
                  )}
                </div>
                <div className="text-center">
                  {item.bigode ? (
                    <span className="text-green-500 text-2xl">✅</span>
                  ) : (
                    <span className="text-red-500 text-2xl">❌</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#pricing-section" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-colors shadow-md inline-block"
            >
              Escolher meu plano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
