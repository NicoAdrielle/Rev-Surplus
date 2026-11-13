import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { AboutPage, ContactPage, PartsPage } from './Pages'

const parts = [
  { number: '01', category: 'POWERTRAIN', title: <>Engine parts<br />&amp; accessories</>, photo: 'photo-1487754180451-c456f719a1fc' },
  { number: '02', category: 'ON THE ROAD', title: <>Tires &amp;<br />tire parts</>, photo: 'photo-1578844251758-2f71da64c17a' },
  { number: '03', category: 'TRANSMISSION', title: <>Clutch pressure<br />plates</>, photo: 'photo-1486262715619-67b85e0b08d3' },
  { number: '04', category: 'ENGINE COMPONENTS', title: <>Crankshafts,<br />pistons &amp; rods</>, photo: 'photo-1625047509168-a7026f36de04' },
  { number: '05', category: 'BODY & EXTERIOR', title: <>Exterior parts<br />&amp; accessories</>, photo: 'photo-1492144534655-ae79c964c9d7' },
  { number: '06', category: 'CABIN', title: <>Interior &amp;<br />headlight parts</>, photo: 'photo-1504215680853-026ed2a45def' },
]

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`flex items-center gap-3 text-[9px] font-bold tracking-[.2em] ${dark ? 'text-stone-600' : 'text-stone-300'}`}>{children}<span className="h-0.5 w-6 bg-shop-red" /></div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = new Date().getFullYear()
  const closeMenu = () => setMenuOpen(false)
  const page = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-shop-ink">
      <div className="bg-neutral-800 text-[9px] font-bold tracking-[.13em] text-stone-300">
        <div className="mx-auto flex min-h-[35px] max-w-[1180px] items-center justify-between px-5 md:px-8">
          <span className="hidden sm:block">REV SURPLUS AUTO PARTS &amp; ACCESSORIES TRADING</span>
          <span>📍 Pagsanjan, Laguna <i className="mx-3 inline-block h-[3px] w-[3px] rounded-full bg-shop-red align-middle" /> In-store shopping · Pickup available</span>
        </div>
      </div>

      <header className="relative z-20 border-b border-neutral-800 bg-neutral-950 text-white">
        <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-5 md:h-[83px] md:px-8">
          <a className="flex items-center gap-2.5" href="/" aria-label="Rev Surplus home">
            <img className="h-11 w-11 rounded-full border border-neutral-700 object-cover object-[center_56%] md:h-[57px] md:w-[57px]" src="/assets/rev-logo.jpg" alt="" />
            <span className="font-display text-[23px] font-black leading-[.85] tracking-wide md:text-[25px]">REV <b className="text-shop-red">SURPLUS</b><small className="mt-1.5 block font-sans text-[7px] font-semibold tracking-[.16em] text-neutral-400">AUTO PARTS &amp; ACCESSORIES</small></span>
          </a>
          <button className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-neutral-700 md:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col border-t border-neutral-800 bg-neutral-950 px-5 pb-5 text-xs font-bold text-stone-200 md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0`} aria-label="Main navigation">
            <a className="border-b border-neutral-800 py-3 md:border-0 md:py-0" href="/parts" onClick={closeMenu}>Parts &amp; services</a><a className="border-b border-neutral-800 py-3 md:border-0 md:py-0" href="/about" onClick={closeMenu}>About</a><a className="border-b border-neutral-800 py-3 md:border-0 md:py-0" href="/contact" onClick={closeMenu}>Contact</a>
            <a className="mt-3 flex items-center justify-between bg-shop-red px-4 py-3 text-white md:mt-0 md:gap-4" href="tel:+639081259704" onClick={closeMenu}>Call the shop <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        {page === '/parts' ? <PartsPage /> : page === '/about' ? <AboutPage /> : page === '/contact' ? <ContactPage /> : <>
        <section className="hero-photo relative isolate min-h-[550px] overflow-hidden text-white md:min-h-[590px]" id="home">
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />
          <div className="mx-auto max-w-[1180px] px-5 pb-28 pt-20 md:px-8 md:pb-28 md:pt-[88px]">
            <div className="flex items-center gap-2 text-[9px] font-bold tracking-[.2em] text-stone-300"><span className="h-2 w-2 rotate-45 bg-shop-red" /> YOUR LOCAL AUTO PARTS SOURCE</div>
            <h1 className="mt-7 font-display text-[clamp(74px,10vw,132px)] font-black uppercase leading-[.78] tracking-tight">Keep your<br /><em className="not-italic text-shop-red">wheels</em><br />turning.</h1>
            <p className="mt-7 text-[13px] leading-7 text-stone-300 md:text-[15px]">Parts that fit. People who know their stuff.<br />Get your car back on the road with Rev Surplus.</p>
            <div className="mt-7 flex flex-wrap gap-2.5"><a className="flex h-12 items-center gap-6 bg-shop-red px-4 text-[9px] font-bold tracking-widest transition hover:bg-red-700" href="#parts">BROWSE OUR STOCK <ArrowRight size={17} /></a><a className="flex h-12 items-center border border-neutral-500 px-4 text-[9px] font-bold tracking-widest hover:bg-white/10" href="tel:+639081259704">CALL 0908 125 9704</a></div>
            <div className="absolute right-[6%] top-[27%] hidden h-[112px] w-[112px] rotate-6 flex-col items-center justify-center rounded-full border border-white/50 bg-black/30 text-center sm:flex"><b className="font-display text-4xl font-black">REV</b><span className="mt-1 text-[7px] tracking-[.17em] text-neutral-300">PARTS<br />THAT WORK</span></div>
          </div>
          <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/60"><div className="mx-auto flex h-11 max-w-[1180px] items-center justify-between px-5 text-[8px] font-bold tracking-[.12em] text-stone-300 md:px-8 md:text-[9px]"><span>RELIABLE PARTS. STRAIGHT TALK.</span><span>01 <b className="px-1 text-shop-red">/</b> AUTO PARTS &amp; ACCESSORIES</span></div></div>
        </section>

        <div className="overflow-hidden bg-shop-red py-3.5 text-white"><div className="whitespace-nowrap text-center font-display text-sm font-bold tracking-[.12em] md:text-base">TIRES &amp; TIRE PARTS <b className="px-3 text-red-200">✳</b> ENGINE PARTS <b className="px-3 text-red-200">✳</b> CRANKSHAFTS <b className="px-3 text-red-200">✳</b> TRANSMISSION <b className="px-3 text-red-200">✳</b> CLUTCH PRESSURE PLATES <b className="px-3 text-red-200">✳</b> PISTONS &amp; CONNECTING RODS</div></div>

        <section className="bg-shop-paper py-16 md:py-24" id="parts"><div className="mx-auto max-w-[1180px] px-5 md:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:mb-9 md:flex-row md:items-end"><div><Eyebrow dark>WHAT WE CARRY</Eyebrow><h2 className="mt-4 font-display text-[48px] font-black uppercase leading-[.9] md:text-[55px]">The right part.<br /><em className="not-italic text-shop-red">The right place.</em></h2></div><p className="max-w-[340px] text-xs leading-6 text-stone-600">From the engine bay to the driver's seat, we've got the parts and accessories to help keep your ride going.</p></div>
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3.5">{parts.map((part) => <article className="group relative h-[205px] overflow-hidden bg-neutral-900 text-white md:h-[272px]" key={part.number}><div className="part-photo absolute inset-0 transition duration-500 group-hover:scale-105 group-hover:grayscale-[.4]" style={{ backgroundImage: `url(https://images.unsplash.com/${part.photo}?auto=format&fit=crop&w=900&q=80)` }} /><div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" /><div className="absolute bottom-3.5 left-3 right-3 md:bottom-5 md:left-6 md:right-5"><span className="text-[7px] font-bold tracking-[.14em] text-red-300 md:text-[9px]">{part.number} / {part.category}</span><h3 className="mt-2 font-display text-[22px] font-extrabold uppercase leading-[.98] md:text-[29px]">{part.title}</h3></div><a href="tel:+639081259704" className="absolute bottom-3 right-3 grid h-7 w-7 place-items-center bg-shop-red md:bottom-5 md:right-5 md:h-[34px] md:w-[34px]" aria-label={`Ask the shop about ${part.category.toLowerCase()}`}><ArrowUpRight size={17} /></a></article>)}</div>
          <div className="mt-5 flex flex-wrap items-center gap-3 bg-[#e6e3dd] p-4"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-stone-500 font-serif text-sm font-bold">i</span><p className="m-0 flex-1 text-[11px] leading-5 text-stone-700">Looking for a specific fit or part? Give us a call and ask about current availability.</p><a href="tel:+639081259704" className="ml-9 text-[9px] font-bold tracking-widest sm:ml-0">ASK THE SHOP <b className="ml-2 text-base text-shop-red">→</b></a></div>
        </div></section>

        <section className="relative overflow-hidden bg-neutral-900 py-16 text-white md:py-[88px]" id="about"><div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 px-5 md:grid-cols-[140px_1fr_260px] md:items-center md:gap-9 md:px-8"><div className="hidden h-[118px] w-[118px] rotate-[-7deg] place-items-center border border-neutral-600 font-display text-5xl font-black text-shop-red md:grid">REV<span className="absolute ml-[75px] mt-[-43px] font-sans text-xs text-stone-400">®</span></div><div><Eyebrow>BUILT FOR THE LONG HAUL</Eyebrow><h2 className="mt-4 font-display text-[47px] font-black uppercase leading-[.9] md:text-[52px]">Good parts.<br /><em className="not-italic text-shop-red">No runaround.</em></h2><p className="mt-4 max-w-[500px] text-xs leading-6 text-stone-300">Rev Surplus Auto Parts &amp; Accessories Trading is your neighborhood stop for automotive parts in Pagsanjan. Come by to shop in-store, pick up what you need, and talk to our team about finding the right part.</p><a className="mt-2 inline-block border-b border-stone-500 pb-2 text-[9px] font-bold tracking-widest" href="mailto:revsurplustrading@gmail.com">EMAIL THE SHOP <b className="ml-2 text-sm text-shop-red">↗</b></a></div><div className="grid grid-cols-3 gap-2 md:block md:border-l md:border-neutral-700 md:pl-7">{[['01', <>Local shop<br />Pagsanjan, Laguna</>], ['02', <>In-store shopping<br />&amp; pickup</>], ['03', <>Auto parts<br />&amp; accessories</>]].map(([n, text]) => <div className="flex flex-col gap-1 border-t border-neutral-700 py-3 md:flex-row md:items-center md:gap-4 md:py-4" key={n as string}><b className="font-display text-xl text-shop-red">{n}</b><span className="text-[9px] leading-4 text-stone-300 md:text-[11px] md:leading-5">{text as React.ReactNode}</span></div>)}</div></div></section>

        <section className="bg-stone-100 py-16 md:py-24" id="visit"><div className="mx-auto grid max-w-[1180px] gap-8 px-5 md:grid-cols-[.95fr_1.05fr] md:items-center md:gap-[75px] md:px-8"><div><Eyebrow dark>COME THROUGH</Eyebrow><h2 className="mt-4 font-display text-[43px] font-black uppercase leading-[.9] md:text-[50px]">Stop by.<br /><em className="not-italic text-shop-red">Let's get you moving.</em></h2><p className="mt-5 max-w-[440px] text-xs leading-6 text-stone-600">Visit us in Pagsanjan, Laguna for in-store shopping and pickup. Need to check a part first? Call or email before you make the trip.</p><div className="mt-6 flex flex-wrap items-center gap-5"><a className="flex h-12 items-center gap-5 bg-shop-red px-4 text-[9px] font-bold tracking-widest text-white" href="tel:+639081259704">CALL 0908 125 9704 <ArrowRight size={16} /></a><a className="text-[9px] font-bold tracking-widest" href="mailto:revsurplustrading@gmail.com">SEND AN EMAIL ↗</a></div></div>
          <div className="border border-stone-300 bg-white"><div className="map-panel relative h-[200px] overflow-hidden md:h-[228px]"><div className="map-road absolute -left-[10%] top-[25%] h-8 w-[120%] rotate-[-24deg] bg-[#b5c5ad]/70" /><div className="map-road absolute left-[22%] top-[72%] h-5 w-[80%] rotate-[38deg] bg-[#b5c5ad]/70" /><div className="absolute left-[48%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 px-4 py-2.5 text-white shadow-lg"><b className="block font-display text-lg">● REV SURPLUS</b><small className="block text-[7px] tracking-[.17em] text-stone-400">PAGSANJAN, LAGUNA</small></div><span className="absolute bottom-4 right-5 text-right text-[8px] leading-4 tracking-widest text-stone-600">CALABARZON<br /><b className="font-display text-xl">PH</b></span></div><div className="flex items-center justify-between p-5"><div><Eyebrow dark>FIND THE SHOP</Eyebrow><h3 className="mt-2 font-display text-[22px] font-bold">Sitio Uno, Brgy. Biñan</h3><p className="text-[11px] text-stone-500">Pagsanjan, Laguna 4008, Philippines</p></div><a className="grid h-9 w-9 place-items-center border border-stone-300" href="https://maps.google.com/?q=Sitio+Uno+Barangay+Binan+Pagsanjan+Laguna+Philippines" target="_blank" rel="noreferrer" aria-label="Open address in Google Maps"><ArrowUpRight size={18} /></a></div></div>
        </div></section>

        <section className="bg-shop-red py-7 text-white md:py-9"><div className="mx-auto flex max-w-[1180px] flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8"><div><div className="text-[9px] font-bold tracking-[.18em] text-red-200">HAVE A PART IN MIND?</div><h2 className="mt-1 font-display text-4xl font-black leading-none">LET'S TALK <em className="not-italic text-red-950">ENGINES.</em></h2></div><a className="flex items-center justify-between gap-6" href="tel:+639081259704"><span className="text-[9px] tracking-widest text-red-200">CALL THE SHOP</span><b className="font-display text-[25px]">0908 125 9704 <ArrowUpRight className="inline" size={18} /></b></a></div></section>
        </>}
      </main>

      <footer className="bg-neutral-950 text-white"><div className="mx-auto flex max-w-[1180px] flex-col gap-6 border-b border-neutral-800 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8"><a className="flex items-center gap-2.5" href="/"><img className="h-11 w-11 rounded-full object-cover object-[center_56%]" src="/assets/rev-logo.jpg" alt="" /><span className="font-display text-xl font-black leading-none">REV <b className="text-shop-red">SURPLUS</b><small className="mt-1.5 block font-sans text-[6px] tracking-[.16em] text-stone-400">AUTO PARTS &amp; ACCESSORIES TRADING</small></span></a><div className="grid grid-cols-2 gap-3 text-[9px] text-stone-300"><a href="tel:+639081259704">0908 125 9704</a><a href="tel:+639627542148">0962 754 2148</a><a className="col-span-2" href="mailto:revsurplustrading@gmail.com">revsurplustrading@gmail.com</a></div><div className="flex gap-5 text-[9px] tracking-widest text-stone-300"><a href="/parts">PARTS</a><a href="/about">ABOUT</a><a href="/contact">CONTACT</a></div><a className="text-[9px] tracking-widest text-stone-300" href="https://www.facebook.com/search/top?q=REV%20Surplus%20Auto%20Parts%20%26%20Accessories%20Trading" target="_blank" rel="noreferrer"><b className="text-lg text-shop-red">f</b> &nbsp; FIND US ON FACEBOOK ↗</a></div><div className="mx-auto flex min-h-12 max-w-[1180px] flex-col justify-center gap-1 px-5 text-[7px] tracking-widest text-stone-500 sm:flex-row sm:items-center sm:justify-between md:px-8"><span>© {year} REV SURPLUS AUTO PARTS &amp; ACCESSORIES TRADING</span><span>PAGSANJAN, LAGUNA · PHILIPPINES</span></div></footer>
      <a className="fixed bottom-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-shop-red text-white shadow-xl sm:hidden" href="tel:+639081259704" aria-label="Call Rev Surplus"><Phone size={19} /></a>
    </div>
  )
}

export default App
