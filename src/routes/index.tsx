import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, Expand, Grid2X2, LoaderCircle, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liivrr — Strategic Execution Roadmap" },
      { name: "description", content: "COO/BD execution strategy to reach 1,000 active users and 50 merchant tenants by December 2026." },
      { property: "og:title", content: "Liivrr — Strategic Execution Roadmap" },
      { property: "og:description", content: "A five-phase operating plan for infrastructure, capital, market entry, AI product, and monetization." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StrategyDeck,
});

type SlideProps = { children: ReactNode; number: number; label?: string; className?: string };

function Slide({ children, number, label = "LIIVRR / STRATEGIC EXECUTION", className = "" }: SlideProps) {
  return (
    <article className={`slide-content ${className}`}>
      <header className="slide-header"><span className="brand-mark">L</span><span>{label}</span></header>
      {children}
      <footer className="slide-footer"><span>COO / BD OPERATIONAL ROADMAP</span><span>{String(number).padStart(2, "0")}</span></footer>
    </article>
  );
}

const actions = [
  ["Deploy", "Arc Mainnet contracts"], ["Embed", "Programmable wallets"], ["Capture", "$1.5K early support"],
];

const slides = [
  {
    title: "Strategic Execution Roadmap",
    node: <Slide number={1} className="cover-slide">
      <div className="cover-grid"><div><p className="slide-kicker">COO / BD CANDIDATE PLAN · 2026</p><h1 className="slide-title-lg">From infrastructure<br/>to <em>market flywheel.</em></h1><p className="slide-body-lg cover-copy">A five-phase operating system to build, fund, launch, and monetize Liivrr.</p></div><div className="north-star"><span>NORTH STAR · DEC 2026</span><strong>1,000</strong><p>active users</p><strong>50</strong><p>merchant tenants</p></div></div>
      <div className="cover-rule" />
    </Slide>
  },
  {
    title: "The Strategy",
    node: <Slide number={2}>
      <div className="slide-heading"><p className="slide-kicker">THE STRATEGY</p><h2 className="slide-title">Sequence risk before scale.</h2></div>
      <div className="strategy-chain">
        {[['01','PROVE','Ship the transaction layer'],['02','FUND','Convert proof into runway'],['03','CONCENTRATE','Build dense local supply'],['04','DIFFERENTIATE','Make discovery conversational'],['05','MONETIZE','Capture value across flows']].map(([n,t,d])=><div className="chain-item" key={n}><span>{n}</span><strong>{t}</strong><p>{d}</p></div>)}
      </div>
      <p className="strategy-statement slide-body-lg">Capital follows proof. Users follow inventory. Revenue follows repeated intent.</p>
    </Slide>
  },
  {
    title: "Execution Timeline",
    node: <Slide number={3}>
      <div className="slide-heading"><p className="slide-kicker">90-DAY OPERATING ARC</p><h2 className="slide-title">Five phases. One compounding system.</h2></div>
      <div className="timeline">
        {[['01','DAYS 1–15','Infrastructure','Technical proof'],['02','DAYS 16–30','Institutional capital','Funded runway'],['03','DAYS 31–45','Campus pilot','Market density'],['04','DAYS 46–60','AI concierge','Product edge'],['05','DEC 2026+','Monetization','Flywheel']].map(([n,d,t,o],i)=><div className="timeline-step" key={n}><div className="timeline-dot">{n}</div><p>{d}</p><strong>{t}</strong><span>{o}</span>{i<4&&<i/>}</div>)}
      </div>
      <div className="thesis-strip"><span>OPERATING PRINCIPLE</span><p>De-risk the next phase before increasing spend.</p></div>
    </Slide>
  },
  {
    title: "Phase 1 — Infrastructure",
    node: <Slide number={4} label="PHASE 01 · DAYS 1–15">
      <div className="phase-title"><div><p className="slide-kicker">FOUNDATION</p><h2 className="slide-title">Make the transaction layer real.</h2></div><strong className="phase-index">01</strong></div>
      <div className="phase-layout"><div className="objective"><span>OBJECTIVE</span><p className="slide-body-lg">Launch a secure Arc Mainnet backend, embed frictionless wallets, and establish ecosystem credibility.</p><div className="why"><span>WHY NOW</span><p>Early mainnet proof removes technical risk and accelerates access to larger institutional grants.</p></div></div><div className="action-list">{actions.map(([a,b],i)=><div className="action-row" key={a}><span>0{i+1}</span><strong>{a}</strong><p>{b}</p></div>)}</div></div>
      <div className="outcome-bar"><span>15-DAY OUTPUT</span><strong>Live contracts</strong><strong>Gasless wallets</strong><strong>$500 USDC + $1K credits</strong></div>
    </Slide>
  },
  {
    title: "Phase 2 — Capital",
    node: <Slide number={5} label="PHASE 02 · DAYS 16–30">
      <div className="phase-title"><div><p className="slide-kicker">NON-DILUTIVE RUNWAY</p><h2 className="slide-title">Turn proof into institutional backing.</h2></div><strong className="phase-index">02</strong></div>
      <div className="capital-number"><span>CAPITAL TARGET</span><strong>UP TO $100K</strong><small>USDC · MILESTONE-BASED</small></div>
      <div className="milestone-grid"><div><b>POSITIONING</b><h3>Consumer-scale USDC utility</h3><p>Frame ticketing and agentic commerce as high-velocity, real-world transaction infrastructure.</p></div><div><b>MILESTONE 01</b><h3>25 tenants</h3><p>First grant release tied to verified restaurant and event partner onboarding.</p></div><div><b>MILESTONE 02</b><h3>1,000 + 50</h3><p>Active wallets and total tenants by December 2026 unlock the next release.</p></div></div>
    </Slide>
  },
  {
    title: "Phase 3 — Market Entry",
    node: <Slide number={6} label="PHASE 03 · DAYS 31–45">
      <div className="phase-title"><div><p className="slide-kicker">CAMPUS BEACHHEAD</p><h2 className="slide-title">Win density, not geography.</h2></div><strong className="phase-index">03</strong></div>
      <div className="market-loop"><div className="loop-core"><strong>LOCAL<br/>LIQUIDITY</strong><span>Dense supply + demand</span></div>{[['TENANTS','50 restaurants + organizers'],['AMBASSADORS','Influential student hosts'],['INVITES','Token-rewarded referrals']].map(([a,b],i)=><div className={`loop-node node-${i+1}`} key={a}><span>{a}</span><p>{b}</p></div>)}</div>
      <div className="offer-row"><span>ACQUISITION OFFER</span><strong>0% platform fees · first 3 months</strong><strong>Free AI attendance forecasting</strong></div>
    </Slide>
  },
  {
    title: "Phase 4 — Product Edge",
    node: <Slide number={7} label="PHASE 04 · DAYS 46–60">
      <div className="phase-title"><div><p className="slide-kicker">AI EVENT CONCIERGE</p><h2 className="slide-title">Turn intent into a completed night out.</h2></div><strong className="phase-index">04</strong></div>
      <div className="concierge-grid"><div className="prompt-box"><span>USER INTENT</span><p>“Find an underground rave or a highly-rated dinner spot for my group tonight under $30.”</p></div><div className="flow-arrow">→</div><div className="agent-steps">{['Understand preferences + context','Search live local inventory','Confirm capacity + group fit','Book and process payment'].map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div></div>
      <div className="tenant-band"><span>TENANT VALUE</span><p>Booking-flow data powers attendance, inventory, layout, and staffing decisions.</p></div>
    </Slide>
  },
  {
    title: "Phase 5 — Monetization",
    node: <Slide number={8} label="PHASE 05 · DECEMBER 2026+">
      <div className="phase-title"><div><p className="slide-kicker">REVENUE ENGINE</p><h2 className="slide-title">Monetize the flow—not the user.</h2></div><strong className="phase-index">05</strong></div>
      <div className="revenue-grid">{[['01','CONVERSATIONAL ADS','High-intent local offers inside the concierge'],['02','PREMIUM MAP','Sponsored pins and live venue highlights'],['03','PROTOCOL FEES','Ticket sales, deposits, and secure resale']].map(([n,t,d])=><div className="revenue-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
      <div className="flywheel"><span>MORE INVENTORY</span><i>→</i><span>BETTER MATCHES</span><i>→</i><span>MORE BOOKINGS</span><i>→</i><span>MORE REVENUE</span></div>
    </Slide>
  },
  {
    title: "Scorecard & Priorities",
    node: <Slide number={9}>
      <div className="slide-heading"><p className="slide-kicker">EXECUTION SCORECARD</p><h2 className="slide-title">The operating mandate.</h2></div>
      <div className="scorecard"><div><span>ACTIVE USERS</span><strong>1,000</strong><p>by December 2026</p></div><div><span>VERIFIED TENANTS</span><strong>50</strong><p>restaurants + organizers</p></div><div><span>GRANT TARGET</span><strong>$100K</strong><p>non-dilutive USDC</p></div></div>
      <div className="priority-row"><span>FIRST 30 DAYS</span><strong>Ship mainnet proof</strong><strong>Secure ecosystem support</strong><strong>Build the campus pipeline</strong></div>
      <p className="closing-line">Execution creates evidence. Evidence unlocks capital. Capital accelerates density.</p>
    </Slide>
  },
];

function ScaledSlide({ children, exportMode = false }: { children: ReactNode; exportMode?: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  useEffect(() => {
    if (exportMode) return;
    const update = () => { const el = hostRef.current; if (el) setScale(Math.min(el.clientWidth / 1920, el.clientHeight / 1080)); };
    update(); const observer = new ResizeObserver(update); if (hostRef.current) observer.observe(hostRef.current); return () => observer.disconnect();
  }, [exportMode]);
  if (exportMode) return <div className="export-slide">{children}</div>;
  return <div className="slide-stage" ref={hostRef}><div className="slide-wrapper" style={{ "--scale": scale } as React.CSSProperties}>{children}</div></div>;
}

function StrategyDeck() {
  const initial = typeof window === "undefined" ? 0 : Math.min(slides.length - 1, Math.max(0, Number(new URLSearchParams(window.location.search).get("slide")) - 1 || 0));
  const [index, setIndex] = useState(initial); const [overview, setOverview] = useState(false); const [exporting, setExporting] = useState(false); const touchX = useRef(0);
  const go = useCallback((next: number) => setIndex(Math.max(0, Math.min(slides.length - 1, next))), []);
  useEffect(() => { const url = new URL(window.location.href); url.searchParams.set("slide", String(index + 1)); window.history.replaceState({}, "", url); document.title = `${index + 1}/${slides.length} — ${slides[index].title}`; }, [index]);
  useEffect(() => { const key = (e: KeyboardEvent) => { if (e.key === "ArrowRight" || e.key === " ") go(index + 1); if (e.key === "ArrowLeft") go(index - 1); if (e.key.toLowerCase() === "g") setOverview(v => !v); if (e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen().catch(() => undefined); } }; window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, [go, index]);
  const downloadPdf = async () => {
    setExporting(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([import("html2canvas"), import("jspdf")]);
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(".export-slide .slide-content"));
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080], hotfixes: ["px_scaling"] });
      for (let i = 0; i < nodes.length; i++) { if (i > 0) pdf.addPage([1920, 1080], "landscape"); const canvas = await html2canvas(nodes[i], { scale: 1, useCORS: true, backgroundColor: null }); pdf.addImage(canvas.toDataURL("image/jpeg", .92), "JPEG", 0, 0, 1920, 1080, undefined, "FAST"); }
      pdf.save("Liivrr_Strategic_Execution_Roadmap.pdf");
    } finally { setExporting(false); }
  };
  return <main className="deck-shell" onTouchStart={e=>{touchX.current=e.touches[0].clientX}} onTouchEnd={e=>{const d=e.changedTouches[0].clientX-touchX.current;if(Math.abs(d)>60)go(index+(d<0?1:-1))}}>
    <nav className="deck-toolbar"><div className="deck-logo"><span>L</span><b>LIIVRR</b></div><div className="toolbar-actions"><button title="Overview" aria-label="Overview" onClick={()=>setOverview(v=>!v)}><Grid2X2/></button><button title="Present fullscreen" aria-label="Present fullscreen" onClick={()=>document.documentElement.requestFullscreen()}><Expand/></button><button className="download-button" onClick={downloadPdf} disabled={exporting}>{exporting?<LoaderCircle className="spin"/>:<Download/>}<span>{exporting?"BUILDING PDF":"DOWNLOAD PDF"}</span></button></div></nav>
    <section className="deck-canvas"><ScaledSlide>{slides[index].node}</ScaledSlide></section>
    <div className="deck-controls"><button aria-label="Previous slide" disabled={index===0} onClick={()=>go(index-1)}><ArrowLeft/></button><span>{String(index+1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}</span><button aria-label="Next slide" disabled={index===slides.length-1} onClick={()=>go(index+1)}><ArrowRight/></button></div>
    {overview&&<div className="overview"><div className="overview-head"><h2>Deck overview</h2><button aria-label="Close overview" onClick={()=>setOverview(false)}><X/></button></div><div className="overview-grid">{slides.map((s,i)=><button key={s.title} onClick={()=>{go(i);setOverview(false)}}><ScaledSlide>{s.node}</ScaledSlide><span>{i+1}. {s.title}</span></button>)}</div></div>}
    <div className="export-deck" aria-hidden="true">{slides.map(s=><ScaledSlide exportMode key={s.title}>{s.node}</ScaledSlide>)}</div>
  </main>;
}