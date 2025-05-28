import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              A Plataforma Financeira Inteligente com Bigode
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Controle suas finanças com clareza, elegância e sem planilhas complicadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#testar" 
                className="px-8 py-4 text-white text-center font-medium bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-colors shadow-md"
              >
                Testar Grátis
              </a>
              <a 
                href="#agendar" 
                className="px-8 py-4 text-center text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Agendar Demonstração
              </a>
            </div>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <svg 
                      key={index}
                      className="w-5 h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                  <strong>4.8</strong> de usuários satisfeitos
                </span>
              </div>
              
              <div className="flex items-center bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-lg border border-green-100 dark:border-green-800">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-700 dark:text-green-300 font-medium">
                  100+ usuários felizes e contando
                </span>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Dashboard Gerente Bigode</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 flex items-center justify-center text-gray-400 dark:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* Mockup do dashboard com animação */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-500/0 animate-pulse"></div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Saldo Atual</h3>
                      <p className="text-2xl font-bold text-green-500">R$ 12.458,90</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-500/0 animate-pulse"></div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Despesas do Mês</h3>
                      <p className="text-2xl font-bold text-red-500">R$ 3.245,60</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Fluxo Mensal</h3>
                    <div className="h-32 flex items-end space-x-2">
                      {[40, 65, 35, 50, 75, 60, 80].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm animate-grow" 
                            style={{ height: `${height}%`, animationDelay: `${index * 0.1}s` }}
                          ></div>
                          <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                            {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                            <path d="M3 7l9 6 9-6"></path>
                          </svg>
                        </div>
                        <span className="ml-3 font-medium text-gray-700 dark:text-gray-300">Assinatura Spotify</span>
                      </div>
                      <span className="text-red-500 font-medium">- R$ 19,90</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20"></path>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <span className="ml-3 font-medium text-gray-700 dark:text-gray-300">Pagamento Cliente</span>
                      </div>
                      <span className="text-green-500 font-medium">+ R$ 2.500,00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
