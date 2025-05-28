import { useEffect, useState } from 'react';

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('feature-section');
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

  const features = [
    {
      icon: '🔄',
      title: 'Controle de Entradas e Saídas',
      description: 'Acompanhe todos os seus movimentos financeiros em um só lugar, com categorização automática e alertas inteligentes.'
    },
    {
      icon: '📊',
      title: 'Gráficos Mensais Automáticos',
      description: 'Visualize sua saúde financeira com gráficos claros e intuitivos que mostram tendências e padrões de gastos.'
    },
    {
      icon: '🧾',
      title: 'Centros de Custo Inteligentes',
      description: 'Organize suas finanças por projetos, clientes ou departamentos para uma visão detalhada de cada área.'
    },
    {
      icon: '🌙',
      title: 'Modo Claro/Escuro',
      description: 'Trabalhe com conforto visual em qualquer ambiente ou horário com nosso tema adaptável às suas preferências.'
    },
    {
      icon: '⚡',
      title: 'Lançamentos Rápidos',
      description: 'Registre transações em segundos com nossa interface otimizada e atalhos personalizáveis.'
    },
    {
      icon: '📥',
      title: 'Exportação de Relatórios',
      description: 'Gere relatórios profissionais em PDF para apresentações, contabilidade ou análises detalhadas.'
    }
  ];

  return (
    <section 
      id="feature-section"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Por que usar o Gerente Bigode?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ferramentas poderosas que transformam a maneira como você gerencia suas finanças.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl mb-4 transform transition-all duration-300 group-hover:scale-110 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
