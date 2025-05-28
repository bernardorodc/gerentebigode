import { useEffect, useState } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('cta-section');
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
      id="cta-section"
      className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Está pronto para gerenciar seu dinheiro com estilo?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a milhares de profissionais que transformaram sua relação com as finanças usando o Gerente Bigode.
          </p>
          
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-white/30 blur-xl rounded-full"></div>
            <a 
              href="#testar" 
              className="relative px-8 py-4 text-xl font-medium bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-lg inline-block"
            >
              Testar Grátis – Sem Cartão
            </a>
          </div>
          
          <p className="mt-6 text-blue-100 text-sm">
            Sem compromisso. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
