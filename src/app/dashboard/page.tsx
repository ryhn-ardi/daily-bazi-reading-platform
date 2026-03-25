'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  getDayPillar, STEMS, BRANCHES, STEM_META, BRANCH_META,
  getTenGodIndex, TG_NAMES, TG_EN, calcScore
} from '@/lib/bazi'
import { TG_READINGS, type Cell } from '@/lib/tg-readings'
import type { UserProfile } from '@/lib/supabase'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser]           = useState<UserProfile|null>(null)
  const [showReading, setShowReading] = useState(false)
  const [today, setToday]         = useState({ si:0, bi:0 })
  const [dateStr, setDateStr]     = useState('')

  useEffect(() => {
    const raw = localStorage.getItem('bazi_user')
    if (!raw) { router.push('/'); return }
    setUser(JSON.parse(raw) as UserProfile)
    const now = new Date()
    setToday(getDayPillar(now))
    setDateStr(now.toLocaleDateString('id-ID',{weekday:'long',year:'numeric',month:'long',day:'numeric'}).toUpperCase())
  },[router])

  if (!user) return <Loader />

  const sm = STEM_META[today.si]
  const bm = BRANCH_META[today.bi]

  return (
    <main style={{maxWidth:480,margin:'0 auto',minHeight:'100svh',display:'flex',flexDirection:'column',position:'relative'}}>
      {/* Header */}
      <div style={{padding:'52px 20px 28px',textAlign:'center',borderBottom:'1px solid var(--border)',background:'linear-gradient(180deg,rgba(200,149,58,.05),transparent)'}}>
        <div style={{fontFamily:'Cinzel,serif',fontSize:9,letterSpacing:'.3em',color:'var(--gl)',textTransform:'uppercase',marginBottom:8}}>{dateStr}</div>
        <div style={{fontSize:24}}>Selamat datang, <span style={{color:'var(--gold)'}}>{user.name}</span></div>
        <div style={{marginTop:7,fontSize:13,color:'var(--dim)',fontStyle:'italic'}}>
          {user.day_master||'甲 Yang Wood'} · Day Master · Kua {user.kua_number||1}
        </div>
        <button onClick={()=>{localStorage.removeItem('bazi_user');router.push('/')}} style={{position:'absolute',top:16,right:16,background:'var(--s2)',border:'1px solid var(--border)',borderRadius:20,padding:'6px 14px',fontSize:11,color:'var(--dim)',cursor:'pointer',fontFamily:'Cinzel,serif',letterSpacing:'.1em'}}>
          Keluar
        </button>
      </div>

      {/* Body */}
      <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'32px 20px'}}>
        <MandalaAnim />
        <button onClick={()=>setShowReading(true)} style={{width:'100%',maxWidth:300,background:'var(--surface)',border:'1px solid var(--gl)',borderRadius:22,cursor:'pointer',overflow:'hidden',transition:'all .3s',fontFamily:'inherit'}}>
          <div style={{padding:'22px 18px',textAlign:'center'}}>
            <div style={{fontSize:30,marginBottom:9}}>🔮</div>
            <div style={{fontFamily:'Cinzel,serif',fontSize:16,letterSpacing:'.1em',color:'var(--gold)',display:'block'}}>BACA BAZI HARI INI</div>
            <div style={{fontSize:13,color:'var(--dim)',marginTop:4}}>
              {STEMS[today.si]}{BRANCHES[today.bi]} · {sm[1] as string} / {bm[2]}
            </div>
          </div>
          <div style={{borderTop:'1px solid var(--border)',padding:'9px 18px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <span style={{fontSize:11,color:'var(--dim)'}}>Kode akses:</span>
            <strong style={{fontSize:12,color:'var(--gold)',fontFamily:'Cinzel,serif',letterSpacing:'.08em'}}>{user.access_code}</strong>
          </div>
        </button>
        <div style={{marginTop:14,fontSize:12,color:'var(--dim)',fontStyle:'italic'}}>Bacaan dipersonalisasi · Tidak butuh internet</div>
      </div>

      {showReading && <ReadingSheet user={user} si={today.si} bi={today.bi} onClose={()=>setShowReading(false)} />}
    </main>
  )
}

// ── Reading sheet ──────────────────────────────────────────
function ReadingSheet({user,si,bi,onClose}:{user:UserProfile;si:number;bi:number;onClose:()=>void}) {
  const now     = new Date()
  const dateStr = now.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'})
  const sm      = STEM_META[si]
  const bm      = BRANCH_META[bi]

  // Personalise: get Day Master stem index from user data
  const dmName  = user.day_master||'甲 Yang Wood'
  const dmSi    = STEMS.findIndex(s => dmName.startsWith(s))
  const tgIdx   = getTenGodIndex(dmSi >= 0 ? dmSi : 0, si)
  const tgName  = TG_NAMES[tgIdx]
  const tgEn    = TG_EN[tgIdx]
  const reading = TG_READINGS[tgName]
  const score   = calcScore(tgIdx, bi, user.lucky_elements||'', si)

  const elColor: Record<string,string> = {
    Kayu:'#5ac85a',Api:'#e06040',Tanah:'#c89040',Logam:'#b0b0cc',Air:'#4898e0'
  }
  const ec = (el:string) => elColor[el]||'#c89040'

  return (
    <div style={{position:'fixed',inset:0,background:'var(--bg)',overflowY:'auto',zIndex:100,animation:'fadeUp .4s ease forwards'}}>
      {/* Top bar */}
      <div style={{padding:'14px 16px',display:'flex',alignItems:'center',gap:12,borderBottom:'1px solid var(--border)',background:'var(--surface)',position:'sticky',top:0,zIndex:10}}>
        <button onClick={onClose} style={{width:36,height:36,borderRadius:'50%',background:'var(--s2)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',fontSize:20,color:'var(--dim)',flexShrink:0}}>←</button>
        <div>
          <div style={{fontFamily:'Cinzel,serif',fontSize:14,color:'var(--gold)'}}>Bacaan Hari Ini · {user.name}</div>
          <div style={{fontSize:12,color:'var(--dim)'}}>{dateStr}</div>
        </div>
      </div>

      <div style={{padding:16,display:'flex',flexDirection:'column',gap:14,paddingBottom:48}}>

        {/* Pillar Hero */}
        <div style={{background:'var(--surface)',border:'1px solid var(--b2)',borderRadius:22,padding:'26px 16px',textAlign:'center',position:'relative',overflow:'hidden',animation:'fadeUp .5s ease forwards'}}>
          <div style={{fontFamily:'Cinzel,serif',fontSize:9,letterSpacing:'.28em',color:'var(--dim)',textTransform:'uppercase',marginBottom:14}}>✦ &nbsp; PILAR HARI INI &nbsp; ✦</div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'flex-end',gap:18,marginBottom:10}}>
            {[{char:STEMS[si],lbl:`${sm[0]} · ${sm[1]}`},{char:BRANCHES[bi],lbl:`${bm[0]} · ${bm[1]}`}].map((p,i)=>(
              <div key={i} style={{textAlign:'center'}}>
                {i===1&&<div style={{fontSize:36,color:'var(--b2)',paddingBottom:14}}>·</div>}
                <div style={{fontSize:66,lineHeight:1,background:'linear-gradient(180deg,#e8c060,#c8953a,#5a3808)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent'}}>{p.char}</div>
                <div style={{fontSize:11,color:'var(--dim)',marginTop:4}}>{p.lbl}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex',justifyContent:'center',gap:8,marginBottom:8}}>
            {[sm[1] as string, bm[2]].map((el,i)=>(
              <span key={i} style={{padding:'4px 16px',borderRadius:20,fontSize:12,color:ec(el),border:`1px solid ${ec(el)}40`,background:`${ec(el)}18`}}>{el}</span>
            ))}
          </div>
          <div style={{fontFamily:'Cinzel,serif',fontSize:11,color:'var(--gold)',letterSpacing:'.12em',marginBottom:12}}>
            {tgName} · {tgEn}
          </div>
          {reading && (
            <>
              <div style={{fontSize:16,lineHeight:1.78,color:'var(--dim)',fontStyle:'italic',marginBottom:10}}>{reading.energy}</div>
              <div style={{background:'var(--s2)',border:'1px solid var(--border)',borderRadius:12,padding:'12px 14px',textAlign:'left',marginBottom:10}}>
                <div style={{fontFamily:'Cinzel,serif',fontSize:8,letterSpacing:'.22em',color:'var(--gl)',textTransform:'uppercase',marginBottom:6}}>✦ Kesesuaian dengan Day Master {user.day_master?.split(' ')[0]||'甲'}</div>
                <p style={{fontSize:14,lineHeight:1.72,color:'var(--dim)',marginBottom:6}}><strong style={{color:'var(--teal)'}}>Harmoni:</strong> {reading.harmony}</p>
                <p style={{fontSize:14,lineHeight:1.72,color:'var(--dim)'}}><strong style={{color:'var(--red)'}}>Konflik:</strong> {reading.conflict}</p>
              </div>
            </>
          )}
        </div>

        {/* Score */}
        <ScoreCard score={score} />

        {/* 4 Section accordions */}
        {reading && <>
          <AccSection ico="💼" title="Karir & Pekerjaan"    data={reading.career}  />
          <AccSection ico="🌿" title="Kesehatan & Energi"   data={reading.health}  />
          <AccSection ico="💰" title="Finansial & Rezeki"   data={reading.finance} />
          <AccSection ico="❤️"  title="Relasi & Asmara"     data={reading.romance} />
        </>}

        {/* Chart reference */}
        <ChartRef user={user} />
      </div>
    </div>
  )
}

// ── Accordion section ──────────────────────────────────────
function AccSection({ico,title,data}:{ico:string;title:string;data:{intro:string;cells:Cell[]}}) {
  const [open,setOpen] = useState(false)
  const icoMap: Record<string,string> = {'💼':'🗂️','🌿':'🌿','💰':'💰','❤️':'✨'}

  return (
    <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:15,overflow:'hidden'}}>
      <div style={{padding:'12px 16px',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',gap:9}}>
        <span style={{fontSize:16}}>{ico}</span>
        <span style={{fontFamily:'Cinzel,serif',fontSize:10,letterSpacing:'.16em',color:'var(--gold)',textTransform:'uppercase',flex:1}}>{title}</span>
      </div>
      <div style={{padding:16}}>
        <p style={{fontSize:15,lineHeight:1.8,color:'var(--text)',marginBottom:0}}>{data.intro}</p>
        <button
          onClick={()=>setOpen(!open)}
          style={{width:'100%',background:open?'linear-gradient(135deg,rgba(200,149,58,.10),rgba(40,160,154,.05))':'var(--s2)',border:`1px solid ${open?'var(--gl)':'var(--border)'}`,borderRadius:12,cursor:'pointer',display:'flex',alignItems:'center',gap:10,padding:'14px 16px',marginTop:14,transition:'all .2s',fontFamily:'inherit'}}
        >
          <span style={{fontSize:18,transition:'transform .3s',transform:open?'rotate(15deg) scale(1.1)':'none'}}>{icoMap[ico]||ico}</span>
          <span style={{fontFamily:'Cinzel,serif',fontSize:10,letterSpacing:'.18em',color:'var(--gold)',textTransform:'uppercase',flex:1,textAlign:'left'}}>Rincian Detail</span>
          <span style={{fontSize:11,color:open?'transparent':'var(--dim)',background:'var(--surface)',border:'1px solid var(--border)',borderRadius:20,padding:'2px 10px',transition:'opacity .2s'}}>{data.cells.length} poin</span>
          <span style={{fontSize:14,color:open?'var(--gold)':'var(--dim)',transition:'transform .32s cubic-bezier(.34,1.56,.64,1)',transform:open?'rotate(180deg)':'none'}}>▾</span>
        </button>
        {open && (
          <div style={{marginTop:12,display:'grid',gridTemplateColumns:'1fr 1fr',gap:9}}>
            {data.cells.map((c,i)=><DetailCell key={i} cell={c} />)}
          </div>
        )}
      </div>
    </div>
  )
}

function DetailCell({cell}:{cell:Cell}) {
  const colors: Record<string,string> = {gold:'var(--gl)',teal:'var(--teal)',red:'var(--red)',dim:'var(--dim)'}
  const col = colors[cell.accent]||'var(--dim)'
  return (
    <div style={{
      background:'var(--s2)',border:`1px solid var(--border)`,
      borderTop:`2px solid ${col}`,
      borderRadius:12,padding:'12px 11px',
      ...(cell.wide?{gridColumn:'1 / -1'}:{}),
    }}>
      <div style={{fontSize:18,marginBottom:6}}>{cell.ico}</div>
      <div style={{fontFamily:'Cinzel,serif',fontSize:8,letterSpacing:'.18em',color:col,textTransform:'uppercase',marginBottom:6}}>{cell.lbl}</div>
      <div style={{fontSize:14,lineHeight:1.68,color:'var(--text)'}} dangerouslySetInnerHTML={{__html:cell.txt}} />
      {cell.tag && (
        <span style={{display:'inline-block',padding:'2px 9px',borderRadius:10,fontSize:11,marginTop:6,
          ...(cell.tag==='good'?{background:'rgba(40,160,154,.15)',color:'var(--teal)',border:'1px solid #164d4a'}:{}),
          ...(cell.tag==='warn'?{background:'rgba(192,56,56,.15)',color:'#e07070',border:'1px solid #601010'}:{}),
        }}>
          {cell.tag==='good'?'✓ Baik':'⚠ Waspada'}
        </span>
      )}
      {cell.bar && (
        <div style={{marginTop:8,background:'var(--surface)',borderRadius:4,height:4,overflow:'hidden'}}>
          <div style={{height:'100%',borderRadius:4,width:`${cell.bar.pct}%`,background:`linear-gradient(90deg,var(--gl),var(--gold))`,transition:'width 1.2s cubic-bezier(.22,1,.36,1)'}}/>
        </div>
      )}
    </div>
  )
}

// ── Score card ──────────────────────────────────────────────
function ScoreCard({score}:{score:number}) {
  const labels = ['','','🌑 Hari penuh tantangan','🌧️ Perlu kehati-hatian','🌧️ Perlu kehati-hatian','⚖️ Cukup seimbang','⚖️ Cukup seimbang','🌟 Energi menguntungkan','🌟 Energi menguntungkan','✨ Hari luar biasa!','✨ Hari luar biasa!']
  return (
    <div style={{background:'var(--surface)',border:'1px solid var(--b2)',borderRadius:18,padding:18,display:'flex',alignItems:'center',gap:16}}>
      <div style={{fontFamily:'Cinzel Decorative,serif',fontSize:50,color:'var(--gold)',lineHeight:1,flexShrink:0}}>
        {score}<sub style={{fontSize:16,color:'var(--dim)'}}>/10</sub>
      </div>
      <div style={{flex:1}}>
        <div style={{fontFamily:'Cinzel,serif',fontSize:8,letterSpacing:'.2em',color:'var(--dim)',textTransform:'uppercase',marginBottom:7}}>Skor Keberuntunganmu Hari Ini</div>
        <div style={{background:'var(--s2)',borderRadius:4,height:6,overflow:'hidden'}}>
          <div style={{height:'100%',borderRadius:4,width:`${score/10*100}%`,background:'linear-gradient(90deg,var(--gl),var(--gold))',transition:'width 1.4s cubic-bezier(.22,1,.36,1)'}}/>
        </div>
        <div style={{fontSize:12,color:'var(--dim)',marginTop:6}}>{labels[score]}</div>
      </div>
    </div>
  )
}

// ── Chart reference accordion ───────────────────────────────
function ChartRef({user}:{user:UserProfile}) {
  const [open,setOpen] = useState(false)
  const pillars = [
    {lbl:'JAM',   s:user.hour_pillar?.[0]||'乙', b:user.hour_pillar?.[1]||'亥', n:'Yin Wood Pig'},
    {lbl:'HARI ✦',s:user.day_pillar?.[0]||'甲',  b:user.day_pillar?.[1]||'午',  n:'Yang Wood Horse'},
    {lbl:'BULAN', s:user.month_pillar?.[0]||'甲', b:user.month_pillar?.[1]||'戌', n:'Yang Wood Dog'},
    {lbl:'TAHUN', s:user.year_pillar?.[0]||'己',  b:user.year_pillar?.[1]||'卯', n:'Yin Earth Rabbit'},
  ]
  return (
    <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:15,overflow:'hidden'}}>
      <button onClick={()=>setOpen(!open)} style={{width:'100%',background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:10,padding:'14px 16px',fontFamily:'inherit'}}>
        <span style={{fontSize:15}}>🏛️</span>
        <span style={{fontFamily:'Cinzel,serif',fontSize:10,letterSpacing:'.16em',color:'var(--gold)',textTransform:'uppercase',flex:1,textAlign:'left'}}>Chart Kelahiran · Referensi</span>
        <span style={{fontSize:13,color:open?'var(--gold)':'var(--dim)',transition:'transform .25s',transform:open?'rotate(180deg)':'none'}}>▾</span>
      </button>
      {open && (
        <div style={{padding:'0 16px 16px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8,marginBottom:10}}>
            {pillars.map((p,i)=>(
              <div key={i} style={{textAlign:'center',background:'var(--s2)',border:`1px solid ${i===1?'#c8953a50':'var(--border)'}`,borderRadius:9,padding:'9px 4px'}}>
                <div style={{fontSize:8,color:'var(--dim)',marginBottom:4}}>{p.lbl}</div>
                <div style={{fontSize:20,color:i===1?'var(--gh)':'var(--gold)',lineHeight:1}}>{p.s}</div>
                <div style={{fontSize:20,color:'var(--dim)',lineHeight:1,marginTop:2}}>{p.b}</div>
                <div style={{fontSize:8,color:'var(--dim)',marginTop:3,lineHeight:1.3}}>{p.n}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:13,color:'var(--dim)',lineHeight:1.65,fontStyle:'italic'}}>
            {user.day_master||'甲 Yang Wood'} · {user.birth_date} · Kua {user.kua_number||'—'}<br/>
            Lucky: {user.lucky_elements||'—'} · Dominan: {user.dominant_element||'—'}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Shared components ──────────────────────────────────────
function MandalaAnim() {
  return (
    <div style={{width:160,height:160,marginBottom:28}}>
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#e8c060"/><stop offset="50%" stopColor="#c8953a"/><stop offset="100%" stopColor="#6a4010"/></linearGradient></defs>
        <g className="ring-a">
          <circle cx="80" cy="80" r="76" fill="none" stroke="url(#gg)" strokeWidth=".8" strokeDasharray="4 12" opacity=".4"/>
          <line x1="80" y1="4"   x2="80" y2="14"  stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
          <line x1="156" y1="80" x2="146" y2="80" stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
          <line x1="80" y1="156" x2="80" y2="146" stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
          <line x1="4"  y1="80"  x2="14" y2="80"  stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
        </g>
        <g className="ring-b"><circle cx="80" cy="80" r="55" fill="none" stroke="#c8953a" strokeWidth=".5" strokeDasharray="2 8" opacity=".22"/></g>
        <circle cx="80" cy="80" r="38" fill="#0a0a18" stroke="#1c1c38" strokeWidth=".5"/>
        <text x="80" y="104" textAnchor="middle" fontSize="52" fill="url(#gg)" fontFamily="serif" opacity=".9">命</text>
      </svg>
    </div>
  )
}

function Loader() {
  return (
    <div style={{minHeight:'100svh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:18}}>
      <div style={{width:50,height:50,borderRadius:'50%',border:'2px solid var(--b2)',borderTopColor:'var(--gold)',animation:'spin 1s linear infinite'}}/>
      <div style={{fontFamily:'Cinzel,serif',fontSize:11,letterSpacing:'.25em',color:'var(--gold)'}}>MEMUAT</div>
    </div>
  )
}
