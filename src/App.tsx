import { 
  ShieldCheck, 
  EyeOff, 
  Zap, 
  Gamepad2, 
  Palette, 
  Bomb, 
  Flame, 
  Mail, 
  Ban, 
  CheckCircle2, 
  Sparkles,
  Lock,
  Trophy,
  Smile,
  RefreshCw,
  HardDrive
} from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <h2 className="text-2xl md:text-3xl font-display text-slate-800 mb-5 font-semibold tracking-tight flex items-center gap-3">
        {title}
      </h2>
      <div className="text-slate-600 leading-relaxed space-y-4 text-base md:text-lg">
        {children}
      </div>
    </motion.section>
  );
}

function GameFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  delay,
  accentColor = "text-amber-600",
  bgColor = "bg-amber-50"
}: { 
  icon: any; 
  title: string; 
  description: string; 
  delay: number;
  accentColor?: string;
  bgColor?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/75 backdrop-blur-xl border border-white/90 p-6 md:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col gap-4 hover:shadow-[0_16px_40px_rgba(255,180,100,0.1)] transition-all"
    >
      <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center ${accentColor} shadow-inner`}>
        <Icon size={26} strokeWidth={2} />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-slate-800 mb-2 font-display">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F7F9FC] font-sans selection:bg-amber-200">
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[12%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-200/45 mix-blend-multiply filter blur-[95px] animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-teal-100/50 mix-blend-multiply filter blur-[95px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[15%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-rose-100/50 mix-blend-multiply filter blur-[95px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header / Hero Section */}
        <header className="pt-16 pb-10 md:pt-24 md:pb-16 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* App Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ rotate: 4, scale: 1.05 }}
              className="w-28 h-28 sm:w-32 sm:h-32 shadow-[0_16px_36px_rgba(240,160,110,0.25)] border-2 border-white rounded-[2.5rem] overflow-hidden mx-auto mb-6 flex items-center justify-center bg-gradient-to-b from-[#FFF5EE] to-[#FFE8D6] p-1.5 transition-transform"
              id="app-logo"
            >
              {!imgError ? (
                <img 
                  src="/AnyBlocksIcon.svg" 
                  alt="AnyBlocks Game Icon" 
                  className="w-full h-full object-contain" 
                  onError={() => setImgError(true)}
                />
              ) : (
                <Gamepad2 size={48} className="text-amber-500" strokeWidth={1.75} />
              )}
            </motion.div>
            
            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-amber-200/80 text-amber-900 text-sm font-medium mb-5 backdrop-blur-md shadow-xs"
            >
              <Sparkles size={16} className="text-amber-600" />
              <span>Block Blast Puzzle Game • Powers & Themes</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display text-slate-900 tracking-tight font-bold mb-4 leading-tight"
              id="page-title"
            >
              AnyBlocks
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-light"
            >
              Blast blocks, unleash powerful twists, and customize your board.
            </motion.p>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-md md:text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed"
            >
               The addictive grid block blast puzzle experience elevated with game-changing powers, exciting combos, and stunning visual themes. Zero ads, no analytics, no Firebase, and zero internet required.
            </motion.p>

            {/* Quick Assurance Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8 max-w-2xl mx-auto"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-medium">
                <CheckCircle2 size={15} className="text-emerald-600" />
                No Ads
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs sm:text-sm font-medium">
                <ShieldCheck size={15} className="text-sky-600" />
                No Firebase
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-800 text-xs sm:text-sm font-medium">
                <EyeOff size={15} className="text-purple-600" />
                No Analytics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs sm:text-sm font-medium">
                <Lock size={15} className="text-amber-700" />
                100% Offline & Local
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-rose-900 text-xs sm:text-sm font-medium">
                <Smile size={15} className="text-rose-600" />
                Kid & Family Friendly
              </span>
            </motion.div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 pb-24 w-full">
          {/* Game Features & Privacy Highlights Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16" id="game-features">
            <GameFeatureCard 
              icon={Flame}
              title="Classic Block Blast Mechanics"
              description="Drag and drop tetromino-inspired shapes onto the grid. Fill complete rows and columns to trigger satisfying combo clears and skyrocket your score."
              delay={0.1}
              accentColor="text-orange-600"
              bgColor="bg-orange-50"
            />
            <GameFeatureCard 
              icon={Bomb}
              title="Exciting Special Powers"
              description="Turn the tide when you are cornered. Use powerful twists like Board Bombs, Row Blasters, Hammer hits, and Shape Rotators to clear tricky spots."
              delay={0.2}
              accentColor="text-rose-600"
              bgColor="bg-rose-50"
            />
            <GameFeatureCard 
              icon={Palette}
              title="Multiple Vibrant Themes"
              description="Play your way with unlockable visual aesthetics—from Neon Glow and Classic Wood to Pastel Gem and Retro Arcade boards."
              delay={0.3}
              accentColor="text-teal-600"
              bgColor="bg-teal-50"
            />
            <GameFeatureCard 
              icon={Ban}
              title="100% Ad-Free Gameplay"
              description="No intrusive video ads interrupting your combos. No banner ads crowding your board, and no tracking IDs feeding ad networks."
              delay={0.4}
              accentColor="text-red-600"
              bgColor="bg-red-50"
            />
            <GameFeatureCard 
              icon={EyeOff}
              title="No Analytics & No Trackers"
              description="No telemetry SDKs, no Google Analytics, no session recorders, and no behavioral profiling. Your play sessions stay completely private."
              delay={0.5}
              accentColor="text-indigo-600"
              bgColor="bg-indigo-50"
            />
            <GameFeatureCard 
              icon={HardDrive}
              title="Local High Scores & Saves"
              description="All your best scores, unlocked themes, and power-up progression are saved strictly on your local device. Enjoy seamless offline play anytime."
              delay={0.6}
              accentColor="text-emerald-600"
              bgColor="bg-emerald-50"
            />
          </section>

          {/* Formal Privacy Policy Document */}
          <div className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 md:px-16 rounded-[2.5rem] shadow-xl border border-white/90 relative overflow-hidden" id="privacy-policy">
            {/* Prismatic Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFD56B] via-[#5CFFD0] to-[#FFA07A]" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-10 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold block">
                  Official Privacy Policy
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  AnyBlocks: Block Puzzle Game
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500 font-medium">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <Section title="1. Overview & Commitment to Zero Data Collection" id="overview">
              <p>
                <b>AnyBlocks</b> is a block puzzle game inspired by block blast mechanics, featuring unique powers and customizable visual themes. This Privacy Policy outlines our transparent, player-first stance on user privacy.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-sm sm:text-base leading-relaxed">
                <strong>Summary in Plain English:</strong> AnyBlocks is an offline, standalone game. We do not collect, store, transmit, or monetize any of your personal data or gameplay habits.
              </div>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-600">
                <li>
                  <strong className="text-slate-800">No Personally Identifiable Information (PII):</strong> We never collect names, email addresses, phone numbers, location data, IP addresses, contacts, or photos.
                </li>
                <li>
                  <strong className="text-slate-800">No Telemetry or Analytics:</strong> AnyBlocks contains zero analytics libraries. We do not track games played, combo counts, session lengths, or user retention metrics.
                </li>
                <li>
                  <strong className="text-slate-800">Zero Advertisements:</strong> There are no third-party ad networks, no interstitial pop-ups, no rewarded ad video SDKs, and no tracking cookies.
                </li>
                <li>
                  <strong className="text-slate-800">No User Accounts:</strong> You do not need to register, create a username, or sign in to play.
                </li>
              </ul>
            </Section>

            <Section title="2. Zero Firebase & Zero Third-Party Tracking" id="no-firebase">
              <p>
                Unlike many mobile games that incorporate heavy cloud frameworks for analytics and crash telemetry:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong className="text-slate-800">No Firebase Implementation:</strong> AnyBlocks does not integrate Firebase (no Firebase Crashlytics, no Firebase Analytics, no Firestore, and no Firebase Authentication).
                </li>
                <li>
                  <strong className="text-slate-800">No Third-Party SDKs:</strong> We do not include tracking or advertising software development kits from Facebook, Unity Ads, AppLovin, ironSource, or any data brokers.
                </li>
                <li>
                  <strong className="text-slate-800">App Store Platform:</strong> AnyBlocks is distributed through official app stores (such as Google Play). Standard store-level crash or installation statistics provided automatically by Google are governed solely by <a href="https://policies.google.com/privacy" className="text-amber-700 hover:text-amber-800 underline underline-offset-4 decoration-amber-500/30 transition-colors" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
                </li>
              </ul>
            </Section>

            <Section title="3. Game Progression & Local Storage" id="local-storage">
              <p>
                All gameplay state—such as your high scores, unlocked board themes, earned power-ups, and audio settings—is saved exclusively within your device’s local isolated sandbox (e.g., standard platform local storage or SharedPreferences).
              </p>
              <p>
                This data never leaves your device:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>You can reset your high scores and game progress anytime by clearing the app data in your device settings.</li>
                <li>Uninstalling the game permanently removes all stored scores, unlocked themes, and game saves from your device.</li>
              </ul>
            </Section>

            <Section title="4. Permissions & Device Access" id="permissions">
              <p>
                AnyBlocks does not request access to sensitive device permissions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong className="text-slate-800">No Location Access:</strong> The game does not read GPS or network location.</li>
                <li><strong className="text-slate-800">No Camera or Microphone Access:</strong> No audio or video recording permissions are declared or requested.</li>
                <li><strong className="text-slate-800">No Storage or Contacts Access:</strong> We do not access your personal files, photos, or contacts.</li>
                <li><strong className="text-slate-800">Optional Haptic Vibration:</strong> Standard vibration permission may be used purely to deliver tactile feedback when blasting blocks or completing combos, configurable in the game settings.</li>
              </ul>
            </Section>

            <Section title="5. Children & Family Privacy" id="families-policy">
              <p>
                Because AnyBlocks contains no ads, collects zero personal data, and features clean, family-friendly puzzle gameplay, it is designed to be fully compliant with Google Play’s Families Policy and the Children’s Online Privacy Protection Act (COPPA).
              </p>
              <p>
                We do not knowingly collect, request, or solicit any personal information from children of any age.
              </p>
            </Section>

            <Section title="6. Changes to this Policy" id="policy-changes">
              <p>
                If we introduce major new features to AnyBlocks in the future, any necessary policy updates will be posted here with an updated date. However, our fundamental design philosophy of keeping AnyBlocks private, offline-first, and ad-free remains unchanged.
              </p>
            </Section>

            <Section title="7. Contact the Developer" id="contact">
              <p>
                If you have questions, feedback, or suggestions about AnyBlocks or this Privacy Policy, please feel free to reach out:
              </p>
              <div className="flex items-center gap-3 mt-6 p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xs w-fit transition-all hover:border-amber-200 hover:shadow-sm">
                <div className="w-11 h-11 rounded-2xl bg-amber-100/80 flex items-center justify-center text-amber-700">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-0.5">Developer Support Email</div>
                  <a href="mailto:20mincode@gmail.com" className="text-sm md:text-base font-semibold text-slate-800 hover:text-amber-600 transition-colors">
                    20mincode@gmail.com
                  </a>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <div className="mt-14 pt-8 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2.5 font-medium">
                <div className="w-6 h-6 rounded-lg overflow-hidden bg-amber-100 flex items-center justify-center shadow-xs">
                  <img src="/AnyBlocksIcon.svg" alt="AnyBlocks" className="w-full h-full object-contain" />
                </div>
                <span className="text-slate-800 font-display font-semibold">AnyBlocks</span>
                <span className="text-slate-400">• Block Blast Puzzle Game</span>
              </div>
              <div className="text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} AnyBlocks. All rights reserved.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
