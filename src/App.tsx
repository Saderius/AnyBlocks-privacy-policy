import { 
  ShieldCheck, 
  EyeOff, 
  Zap, 
  Gamepad2, 
  Compass, 
  SunMedium, 
  Split, 
  FlipHorizontal2, 
  RotateCw, 
  Mail, 
  Ban, 
  CheckCircle2, 
  Sparkles,
  Lock,
  Smile,
  HardDrive,
  Leaf,
  Globe2,
  Gem,
  Volume2
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

function HighlightCard({ 
  icon: Icon, 
  title, 
  subtitle,
  description, 
  delay,
  accentColor = "text-amber-600",
  bgColor = "bg-amber-50"
}: { 
  icon: any; 
  title: string; 
  subtitle?: string;
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
      className="bg-white/80 backdrop-blur-xl border border-white/90 p-6 md:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col gap-4 hover:shadow-[0_16px_40px_rgba(255,180,100,0.12)] transition-all"
    >
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 md:w-14 md:h-14 ${bgColor} rounded-2xl flex items-center justify-center ${accentColor} shadow-inner shrink-0`}>
          <Icon size={24} strokeWidth={2} />
        </div>
        <div>
          <h3 className="font-semibold text-lg md:text-xl text-slate-800 font-display">{title}</h3>
          {subtitle && <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">{subtitle}</span>}
        </div>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
    </motion.div>
  );
}

export default function App() {
  const [imgError, setImgError] = useState(false);
  const appIconUrl = "https://i.imgur.com/VqValEn.png";

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#F8FAFC] font-sans selection:bg-amber-200">
      {/* Ambient Visual Caustic Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[12%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-200/40 mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[22%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-emerald-100/50 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[15%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-sky-100/50 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header / Hero Section */}
        <header className="pt-16 pb-10 md:pt-24 md:pb-16 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* App Icon from Imgur */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ rotate: 3, scale: 1.05 }}
              className="w-28 h-28 sm:w-32 sm:h-32 shadow-[0_16px_36px_rgba(240,160,110,0.28)] border-2 border-white rounded-[2.25rem] overflow-hidden mx-auto mb-6 flex items-center justify-center bg-white p-1 transition-transform"
              id="app-logo"
            >
              {!imgError ? (
                <img 
                  src={appIconUrl} 
                  alt="AnyBlocks: Power Block Puzzle Icon" 
                  className="w-full h-full object-cover rounded-[2rem]" 
                  onError={() => setImgError(true)}
                />
              ) : (
                <Gamepad2 size={48} className="text-amber-500" strokeWidth={1.75} />
              )}
            </motion.div>
            
            {/* Official Tagline / Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-amber-200/80 text-amber-900 text-sm font-medium mb-5 backdrop-blur-md shadow-xs"
            >
              <Sparkles size={16} className="text-amber-600" />
              <span>Tactile Block Puzzle • Powers & Handcrafted Themes</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display text-slate-900 tracking-tight font-bold mb-4 leading-tight"
              id="page-title"
            >
              AnyBlocks: Power Block Puzzle
            </motion.h1>
            
            {/* Short Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-light"
            >
              Relaxing block puzzle with tactical powers. Rotate, flip & combo offline!
            </motion.p>

            {/* Full Summary Paragraph */}
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-md md:text-lg text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed"
            >
              Welcome to AnyBlocks (Caudex) — a tactile block puzzle adventure that pairs the classic, addictive line-clearing combo loop with real tactical powers and handcrafted sensory themes. No timers. No unwinnable boards. Just pure, relaxing puzzle flow.
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
                Everyone (Ages 3+)
              </span>
            </motion.div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 pb-24 w-full">
          {/* Tactical Powers Section */}
          <div className="mb-14">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Tactical Artifacts
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mt-2">
                A Smarter Block Puzzle Experience
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base mt-2">
                Tired of losing runs to impossible pieces? Earn powers through clever placements and line clears to outsmart the 8×8 grid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HighlightCard 
                icon={RotateCw}
                title="The Gyroscope"
                subtitle="Tactical Artifact"
                description="Rotate any piece in your tray by 90° to fit tight spaces and preserve your board."
                delay={0.1}
                accentColor="text-indigo-600"
                bgColor="bg-indigo-50"
              />
              <HighlightCard 
                icon={FlipHorizontal2}
                title="The Speculum"
                subtitle="Tactical Artifact"
                description="Mirror and flip shapes horizontally or vertically to create the exact configuration you need."
                delay={0.2}
                accentColor="text-sky-600"
                bgColor="bg-sky-50"
              />
              <HighlightCard 
                icon={Split}
                title="Prism Splitter"
                subtitle="Tactical Artifact"
                description="Shatter large, clumsy blocks into loose 1×1 micro-blocks to effortlessly fill tricky isolated gaps."
                delay={0.3}
                accentColor="text-emerald-600"
                bgColor="bg-emerald-50"
              />
              <HighlightCard 
                icon={SunMedium}
                title="Solar Pulse"
                subtitle="Tactical Artifact"
                description="Clear an entire row and column in a radiant cross of light to trigger monumental chain reactions."
                delay={0.4}
                accentColor="text-amber-600"
                bgColor="bg-amber-50"
              />
            </div>
          </div>

          {/* Handcrafted Aesthetic Worlds */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-teal-700 bg-teal-100/80 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                Audiovisual Worlds
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-800 mt-2">
                Three Handcrafted Aesthetic Themes
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base mt-2">
                Enjoy a soothing, artistic presentation accompanied by responsive haptics and procedural harmonies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HighlightCard 
                icon={Leaf}
                title="Folio Botanica"
                subtitle="Victorian Study"
                description="Pressed botanical specimens, warm lithograph tones, and organic tactile clicks."
                delay={0.1}
                accentColor="text-emerald-700"
                bgColor="bg-emerald-50"
              />
              <HighlightCard 
                icon={Globe2}
                title="Opus Orbital"
                subtitle="Cosmic Observatory"
                description="Observatory at the edge of the atmosphere. Deep cosmic hues, plasma cores, and resonant chime harmonies."
                delay={0.2}
                accentColor="text-blue-600"
                bgColor="bg-blue-50"
              />
              <HighlightCard 
                icon={Gem}
                title="Prismatica"
                subtitle="Refracted Light"
                description="A lapidary study in refracted light. Faceted crystalline surfaces, diamond shears, and gemstone bursts."
                delay={0.3}
                accentColor="text-purple-600"
                bgColor="bg-purple-50"
              />
            </div>
          </div>

          {/* Formal Privacy Policy Document */}
          <div className="bg-white/85 backdrop-blur-2xl p-8 md:p-12 md:px-16 rounded-[2.5rem] shadow-xl border border-white/90 relative overflow-hidden" id="privacy-policy">
            {/* Prismatic Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFD56B] via-[#5CFFD0] to-[#FFA07A]" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-10 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold block">
                  Official Privacy Policy
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  AnyBlocks: Power Block Puzzle
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500 font-medium">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>

            <Section title="1. Overview & Commitment to Zero Data Collection" id="overview">
              <p>
                <b>AnyBlocks: Power Block Puzzle</b> (also known as AnyBlocks / Caudex) is designed as a relaxing, strategy-first tactical block puzzle game. We believe privacy should be absolute and effortless.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-amber-900 text-sm sm:text-base leading-relaxed">
                <strong>Plain English Summary:</strong> AnyBlocks is an offline, standalone single-player game. We do not collect, store, transmit, or monetize any of your personal data or gameplay habits.
              </div>
              <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-600">
                <li>
                  <strong className="text-slate-800">No Personally Identifiable Information (PII):</strong> We never collect names, email addresses, phone numbers, GPS coordinates, IP addresses, contacts, or photos.
                </li>
                <li>
                  <strong className="text-slate-800">No Telemetry or Analytics:</strong> AnyBlocks contains zero analytics libraries. We do not track puzzle moves, high scores, time played, or user retention metrics.
                </li>
                <li>
                  <strong className="text-slate-800">Zero Advertisements:</strong> There are no third-party ad networks, no banner ads, no interstitial pop-ups, no rewarded ad video SDKs, and no tracking cookies. The Google Advertising ID (AD_ID) permission is completely stripped.
                </li>
                <li>
                  <strong className="text-slate-800">No User Accounts:</strong> You do not need to register, create a username, or sign in to play.
                </li>
              </ul>
            </Section>

            <Section title="2. Zero Firebase & Zero Third-Party Tracking" id="no-firebase">
              <p>
                Unlike many modern puzzle titles that incorporate heavy cloud frameworks for telemetry and user tracking:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <strong className="text-slate-800">No Firebase Implementation:</strong> AnyBlocks does not integrate Firebase (no Firebase Crashlytics, no Firebase Analytics, no Firestore, and no Firebase Authentication).
                </li>
                <li>
                  <strong className="text-slate-800">No Third-Party SDKs:</strong> We do not include tracking or advertising software development kits from Facebook, Unity Ads, AppLovin, ironSource, or any data brokers.
                </li>
                <li>
                  <strong className="text-slate-800">Google Play Store:</strong> AnyBlocks is distributed through the Google Play Store. Standard platform-level download or crash statistics provided automatically by Google are governed solely by <a href="https://policies.google.com/privacy" className="text-amber-700 hover:text-amber-800 underline underline-offset-4 decoration-amber-500/30 transition-colors" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
                </li>
              </ul>
            </Section>

            <Section title="3. Game Progression & Local Storage" id="local-storage">
              <p>
                All gameplay state—such as your high scores, unlocked themes (Folio Botanica, Opus Orbital, Prismatica), charged artifact powers, and audio settings—is saved exclusively within your device’s local isolated sandbox (standard native SharedPreferences / local storage).
              </p>
              <p>
                This data never leaves your device:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>You can reset your high scores and progress anytime by clearing app data in your device's application settings.</li>
                <li>Uninstalling the game permanently removes all stored scores, unlocked themes, and saved states from your device.</li>
              </ul>
            </Section>

            <Section title="4. Permissions & Device Access" id="permissions">
              <p>
                AnyBlocks strictly adheres to the principle of minimal permissions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong className="text-slate-800">No Location Access:</strong> The game does not read GPS or network location.</li>
                <li><strong className="text-slate-800">No Camera or Microphone Access:</strong> No audio or video recording permissions are declared or requested.</li>
                <li><strong className="text-slate-800">No Storage or Contacts Access:</strong> We do not access your personal files, media, or contacts.</li>
                <li><strong className="text-slate-800">Tactile Haptics (VIBRATE):</strong> Used purely to deliver subtle vibration feedback when placing blocks and triggering combos. Can be toggled on or off at any time.</li>
              </ul>
            </Section>

            <Section title="5. Children & Families Policy Compliance" id="families-policy">
              <p>
                AnyBlocks is designed for <strong>Everyone (Ages 3+ / PEGI 3 / ESRB Everyone)</strong> with zero violence, zero gambling, and zero objectionable themes.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Strictly compliant with Google Play's Families Policy and the Children's Online Privacy Protection Act (COPPA).</li>
                <li>We do not collect personal data from anyone, including children under the age of 13.</li>
                <li>Zero advertising ensures a safe, relaxing, and distraction-free environment for puzzle enthusiasts of all ages.</li>
              </ul>
            </Section>

            <Section title="6. Policy Updates & Changes" id="policy-changes">
              <p>
                Should any future update introduce architectural changes to AnyBlocks, this policy will be promptly updated with a revised "Last Updated" date. Our fundamental design philosophy of keeping AnyBlocks private, offline-first, and ad-free remains absolute.
              </p>
            </Section>

            <Section title="7. Contact the Developer" id="contact">
              <p>
                If you have questions, feedback, or need support regarding AnyBlocks or this Privacy Policy, please contact the developer:
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
                <div className="w-7 h-7 rounded-lg overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                  <img src={appIconUrl} alt="AnyBlocks Icon" className="w-full h-full object-cover" />
                </div>
                <span className="text-slate-800 font-display font-semibold">AnyBlocks</span>
                <span className="text-slate-400">• Power Block Puzzle</span>
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
