// Tema e configurações de cores para o Gerente Bigode
export const theme = {
  colors: {
    primary: {
      blue: '#2563EB',
      purple: '#7C3AED',
    },
    secondary: {
      white: '#FFFFFF',
      lightGray: '#F3F4F6',
      darkGray: '#1F2937',
    },
    accent: {
      green: '#10B981',
      red: '#EF4444',
    },
    gradient: {
      start: '#2563EB',
      end: '#7C3AED',
    }
  },
  fonts: {
    primary: 'Inter, sans-serif',
    secondary: 'Manrope, sans-serif',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
  shadows: {
    small: '0 1px 2px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }
};

// Função para alternar entre temas claro e escuro
export const toggleTheme = () => {
  if (typeof window !== 'undefined') {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
};

// Função para inicializar o tema com base na preferência salva
export const initializeTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};
