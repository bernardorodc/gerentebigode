import { useEffect, useState } from 'react';

const SecuritySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('security-section');
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

  const securityFeatures = [
    {
      icon: '🔐',
      title: 'Seus dados são protegidos com criptografia',
      description: 'Utilizamos criptografia de ponta a ponta para garantir que suas informações financeiras estejam sempre seguras.'
    },
    {
      icon: '🧑‍💻',
      title: 'Suporte humano e eficiente',
      description: 'Nossa equipe está disponível via e-mail e WhatsApp para ajudar com qualquer dúvida ou problema.'
    },
    {
      icon: '💡',
      title: 'Backup automático e acesso multiplataforma',
      description: 'Seus dados são salvos automaticamente na nuvem e podem ser acessados de qualquer dispositivo.'
    }
  ];

  return (
    <section 
      id="security-section"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sua segurança é prioridade
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protegemos seus dados financeiros com os mais altos padrões de segurança.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-700 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
