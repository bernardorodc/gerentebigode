import { useEffect, useState } from 'react';

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq-section');
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funciona o teste grátis?",
      answer: "Você pode testar o Gerente Bigode gratuitamente por 14 dias, com acesso a todas as funcionalidades. Não é necessário cartão de crédito para começar. Ao final do período, você pode optar por assinar um de nossos planos ou continuar com a versão gratuita com recursos limitados."
    },
    {
      question: "O sistema é seguro?",
      answer: "Sim! Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos padrões de segurança. Seus dados financeiros nunca são compartilhados com terceiros, e implementamos autenticação em dois fatores para garantir que apenas você tenha acesso à sua conta."
    },
    {
      question: "Funciona para empresas também?",
      answer: "Absolutamente! O Gerente Bigode foi projetado para atender tanto profissionais autônomos quanto pequenas e médias empresas. Nossos planos empresariais incluem recursos adicionais como múltiplos usuários, permissões personalizadas e relatórios avançados."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas ou penalidades. Após o cancelamento, você manterá acesso até o final do período pago e poderá exportar seus dados para manter seu histórico financeiro."
    },
    {
      question: "É possível importar dados de outros sistemas?",
      answer: "Sim, o Gerente Bigode permite importar dados de planilhas Excel, CSV e de outros sistemas financeiros populares. Nossa equipe de suporte está disponível para ajudar no processo de migração, garantindo que você não perca nenhum dado importante."
    }
  ];

  return (
    <section 
      id="faq-section"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o Gerente Bigode e descubra como podemos ajudar você.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <button
                className="w-full px-6 py-4 text-left bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
