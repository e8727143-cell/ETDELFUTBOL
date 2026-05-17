/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Youtube, Copy, ExternalLink, Calendar, Trophy } from 'lucide-react';

export default function App() {
  const currentDate = "17 de Mayo, 2026";
  const videoId = "-MEQVCq6ZBw";
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const hotmartLink = "https://pay.hotmart.com/W99487439T?checkoutMode=10";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Código copiado: ${text}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-r from-emerald-600 to-green-500 py-10 px-6 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute rotate-45 -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -rotate-45 -bottom-10 -right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-md">
            ET DEL FÚTBOL
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-xl px-4 py-8 space-y-8 pb-20">
        
        {/* Video Section */}
        <section className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden group">
          <div className="relative aspect-video">
            <img 
              src={thumbnailUrl} 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover"
            />
            <a 
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 transition-all"
            >
              <div className="w-full h-full"></div>
            </a>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Fecha del video: {currentDate}
            </span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </div>
        </section>

        {/* Text Section */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">
            códigos para canjear sobres virtuales
          </h2>
          <p className="text-emerald-600 font-bold tracking-widest text-sm">
            {currentDate}
          </p>
        </div>

        {/* Codes Section */}
        <div className="grid grid-cols-1 gap-4">
          {[
            { label: "Codifo 1", code: "WC26PANIAPP" },
            { label: "Código 2", code: "MAILWC26GIFT" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileTap={{ scale: 0.98 }}
              onClick={() => copyToClipboard(item.code)}
              className="bg-white border-2 border-emerald-500/20 rounded-xl p-5 flex items-center justify-between cursor-pointer hover:bg-emerald-50 transition-colors shadow-sm group"
            >
              <div>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-xl font-black text-slate-900 font-mono tracking-tighter">{item.code}</p>
              </div>
              <div className="bg-emerald-100 text-emerald-600 p-2.5 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Copy className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Image/Link */}
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <a 
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden shadow-2xl border-4 border-emerald-500 hover:border-emerald-400 transition-all"
            >
              <img 
                referrerPolicy="no-referrer"
                src="https://imgur.com/Eeu6UhQ.png" 
                alt="Promoción Especial" 
                className="w-full h-auto"
              />
            </a>
          </motion.div>

          {/* CTA Below Image */}
          <div className="text-center">
            <a 
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-black text-xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-all w-full md:w-auto"
            >
              ¡HAZ CLIC AQUÍ! <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-xl px-4 py-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest border-t border-slate-200 mt-auto">
        &copy; 2026 ET DEL FÚTBOL
      </footer>
    </div>
  );
}
