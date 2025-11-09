import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center text-green-400 font-sans">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-10 tracking-wide"
      >
        🌌 Mundo Audiovisual
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-green-300 mb-16"
      >
        Elige tu experiencia sonora
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8"
      >
        <a 
          href="https://carlosamaro83.github.io/mavg-catalog/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-10 py-6 bg-green-500/20 hover:bg-green-500/40 text-green-300 text-2xl font-semibold rounded-2xl shadow-lg transition-all"
        >
          🎵 Música
        </a>

        <button 
          onClick={() => alert('🔊 Efectos de sonido — Próximamente')}
          className="px-10 py-6 bg-green-500/20 hover:bg-green-500/40 text-green-300 text-2xl font-semibold rounded-2xl shadow-lg transition-all"
        >
          🔊 Efectos de sonido
        </button>
      </motion.div>

      <footer className="absolute bottom-6 text-sm text-green-700">
        © 2025 Mundo Audiovisual | by Carlos Amaro
      </footer>
    </div>
  );
}