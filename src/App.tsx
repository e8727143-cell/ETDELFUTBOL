/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Youtube, Copy, ExternalLink, Calendar, Trophy, Zap } from 'lucide-react';

const AdsterraBanner = ({ adKey, height, width }: { adKey: string, height: number, width: number }) => {
  return (
    <div className="flex justify-center my-6 overflow-hidden">
      <iframe
        title={`ad-${adKey}`}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        className="max-w-full"
        srcDoc={`
          <html>
            <body style="margin:0; padding:0; display:flex; justify-content:center; align-items:center;">
              <script type="text/javascript">
                atOptions = {
                  'key' : '${adKey}',
                  'format' : 'iframe',
                  'height' : ${height},
                  'width' : ${width},
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
            </body>
          </html>
        `}
      />
    </div>
  );
};

export default function App() {
  const currentDate = "17 de Mayo, 2026";
  const videoId = "-MEQVCq6ZBw";
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const hotmartLink = "https://pay.hotmart.com/W99487439T?checkoutMode=10";
  const directLink = "https://www.effectivecpmnetwork.com/gd66yvigg?key=72b3e71d5eb1dc7fc39d2aa2028e2452";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Código copiado: ${text}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center relative">
      {/* Sidebar Ads (Desktop Only) */}
      <div className="hidden xl:block fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <AdsterraBanner adKey="c034714e52ebf68833220215c9a13a98" width={160} height={600} />
      </div>
      <div className="hidden xl:block fixed right-4 top-1/2 -translate-y-1/2 z-40">
        <AdsterraBanner adKey="02eb1812fc7a22fa7806753abfad7294" width={160} height={300} />
      </div>

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

      {/* Top Banner */}
      <div className="w-full max-w-4xl mx-auto mt-4 px-4 overflow-hidden">
        <AdsterraBanner adKey="dbafab497b2e2273265aadff753fe42b" width={728} height={90} />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-xl px-4 py-8 space-y-8 pb-20 relative">
        
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

        {/* Ad Unit 300x250 */}
        <AdsterraBanner adKey="48b1cc48e511856854b8b4cd20aa16b6" width={300} height={250} />

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

        {/* Ad Unit 468x60 */}
        <AdsterraBanner adKey="8e8ff51a4fe91d177dc15cd7a8eae34f" width={468} height={60} />

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
          <div className="text-center flex flex-col gap-4">
            <a 
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-black text-xl shadow-lg hover:bg-emerald-700 active:scale-95 transition-all w-full"
            >
              ¡HAZ CLIC AQUÍ! <ExternalLink className="w-6 h-6" />
            </a>
            
            {/* Direct Link / Bonus Link */}
            <a 
              href={directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-emerald-600 font-bold hover:underline transition-all py-2"
            >
              <Zap className="w-4 h-4" /> OBTENER MÁS CÓDIGOS GRATIS <Zap className="w-4 h-4" />
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
