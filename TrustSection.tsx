import { useEffect, useState } from 'react';

const TrustSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('trust-section');
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

  // Logos fictícios de empresas
  const companies = [
    { name: 'TechStart', logo: '💻' },
    { name: 'CreativeStudio', logo: '🎨' },
    { name: 'GrowthAgency', logo: '📈' },
    { name: 'SmartConsult', logo: '🔍' },
    { name: 'InnovateBR', logo: '💡' }
  ];

  return (
    <section 
      id="trust-section"
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-10 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Mais de 200 profissionais confiam no Bigode para cuidar das finanças
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Junte-se a uma comunidade crescente de profissionais que transformaram sua gestão financeira com o Gerente Bigode.
          </p>
        </div>
        
        <div className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center text-3xl bg-white dark:bg-gray-700 rounded-full shadow-md mb-2 text-gray-400 dark:text-gray-500 opacity-70 hover:opacity-100 transition-all duration-300">
                {company.logo}
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
