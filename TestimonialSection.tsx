import { useEffect, useState } from 'react';

const TestimonialSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonial-section');
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

  const testimonials = [
    {
      quote: "O Gerente Bigode me ajudou a sair do caos financeiro com um toque de humor. Agora tenho total controle das minhas finanças.",
      author: "Lucas Andrade",
      role: "Designer Freelancer",
      avatar: "👨‍🎨"
    },
    {
      quote: "Finalmente abandonei as planilhas! O dashboard é intuitivo e me dá exatamente as informações que preciso para tomar decisões.",
      author: "Mariana Silva",
      role: "Empreendedora",
      avatar: "👩‍💼"
    },
    {
      quote: "O modo escuro é perfeito para trabalhar à noite, e os relatórios me ajudam a prestar contas com meus clientes de forma profissional.",
      author: "Rafael Costa",
      role: "Consultor Financeiro",
      avatar: "👨‍💻"
    }
  ];

  return (
    <section 
      id="testimonial-section"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O Que Nossos Usuários Dizem
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram sua relação com as finanças usando o Gerente Bigode.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-700 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="text-4xl mb-4 text-blue-500">❝</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
