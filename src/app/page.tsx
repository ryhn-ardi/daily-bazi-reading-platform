'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { generateAccessCode } from '@/lib/bazi'

type Mode = 'landing' | 'login' | 'register'

export default function HomePage() {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>('landing')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Login state
  const [accessCode, setAccessCode] = useState('')

  // Register state
  const [regName, setRegName] = useState('')
  const [regDate, setRegDate] = useState('')
  const [regTime, setRegTime] = useState('')
  const [regGender, setRegGender] = useState<'male'|'female'>('male')
  const [newCode, setNewCode] = useState('')

  async function handleLogin() {
    if (!accessCode.trim()) { setError('Masukkan kode akses'); return }
    setLoading(true); setError('')
    const { data, error: err } = await supabase
      .from('users')
      .select('*')
      .eq('access_code', accessCode.trim().toUpperCase())
      .single()
    setLoading(false)
    if (err || !data) { setError('Kode tidak ditemukan. Periksa kembali.'); return }
    localStorage.setItem('bazi_user', JSON.stringify(data))
    router.push('/dashboard')
  }

  async function handleRegister() {
    if (!regName || !regDate) { setError('Nama dan tanggal lahir wajib diisi'); return }
    setLoading(true); setError('')
    const code = generateAccessCode(regName, regDate)
    const { data, error: err } = await supabase
      .from('users')
      .insert({
        name: regName.trim(),
        access_code: code,
        birth_date: regDate,
        birth_time: regTime || null,
        gender: regGender,
      })
      .select()
      .single()
    setLoading(false)
    if (err) { setError('Gagal mendaftar: ' + err.message); return }
    setNewCode(code)
    localStorage.setItem('bazi_user', JSON.stringify(data))
  }

  return (
    <main style={{ minHeight:'100svh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px 20px' }}>

      {/* Mandala Logo */}
      <div style={{ marginBottom: 32 }}>
        <svg width="120" height="120" viewBox="0 0 160 160">
          <defs>
            <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8c060"/>
              <stop offset="50%" stopColor="#c8953a"/>
              <stop offset="100%" stopColor="#6a4010"/>
            </linearGradient>
          </defs>
          <g className="ring-a">
            <circle cx="80" cy="80" r="76" fill="none" stroke="url(#gg)" strokeWidth=".8" strokeDasharray="4 12" opacity=".4"/>
            <line x1="80" y1="4"   x2="80"  y2="14"  stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
            <line x1="156" y1="80" x2="146" y2="80"  stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
            <line x1="80" y1="156" x2="80"  y2="146" stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
            <line x1="4"  y1="80"  x2="14"  y2="80"  stroke="#c8953a" strokeWidth="1.5" opacity=".5"/>
          </g>
          <g className="ring-b">
            <circle cx="80" cy="80" r="55" fill="none" stroke="#c8953a" strokeWidth=".5" strokeDasharray="2 8" opacity=".22"/>
          </g>
          <circle cx="80" cy="80" r="38" fill="#0a0a18" stroke="#1c1c38" strokeWidth=".5"/>
          <text x="80" y="104" textAnchor="middle" fontSize="52" fill="url(#gg)" fontFamily="serif" opacity=".9">命</text>
        </svg>
      </div>

      <h1 style={{ fontFamily:'Cinzel, serif', fontSize:22, letterSpacing:'0.35em', color:'var(--gold)', marginBottom:6 }}>
        八字 BAZI HARIAN
      </h1>
      <p style={{ fontSize:14, color:'var(--dim)', fontStyle:'italic', marginBottom:40 }}>
        Empat Pilar · Bacaan Personal Harian
      </p>

      {/* LANDING */}
      {mode === 'landing' && (
        <div style={{ display:'flex', flexDirection:'column', gap:12, width:'100%', maxWidth:300 }}>
          <button onClick={() => { setMode('login'); setError('') }} style={btnStyle('gold')}>
            🔮 &nbsp; Masuk dengan Kode
          </button>
          <button onClick={() => { setMode('register'); setError('') }} style={btnStyle('teal')}>
            ✦ &nbsp; Daftar Akun Baru
          </button>
        </div>
      )}

      {/* LOGIN */}
      {mode === 'login' && (
        <div style={{ width:'100%', maxWidth:340 }}>
          <Card title="Masuk">
            <Label>Kode Akses</Label>
            <Input
              value={accessCode}
              onChange={e => setAccessCode(e.target.value)}
              placeholder="Contoh: REYN-4821"
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
            />
            <p style={{ fontSize:12, color:'var(--dim)', fontStyle:'italic', marginTop:6 }}>
              Kode ini diberikan saat kamu mendaftar pertama kali.
            </p>
            {error && <ErrorMsg>{error}</ErrorMsg>}
            <button onClick={handleLogin} disabled={loading} style={{ ...btnStyle('gold'), marginTop:16 }}>
              {loading ? 'Memuat...' : 'Masuk →'}
            </button>
            <button onClick={() => { setMode('landing'); setError('') }} style={{ ...btnStyle('dim'), marginTop:8 }}>
              ← Kembali
            </button>
          </Card>
        </div>
      )}

      {/* REGISTER */}
      {mode === 'register' && !newCode && (
        <div style={{ width:'100%', maxWidth:380 }}>
          <Card title="Daftar Akun Baru">
            <Label>Nama</Label>
            <Input value={regName} onChange={e => setRegName(e.target.value)} placeholder="Nama panggilanmu"/>

            <Label style={{ marginTop:12 }}>Tanggal Lahir</Label>
            <Input type="date" value={regDate} onChange={e => setRegDate(e.target.value)}/>

            <Label style={{ marginTop:12 }}>Jam Lahir (opsional)</Label>
            <Input type="time" value={regTime} onChange={e => setRegTime(e.target.value)}/>

            <Label style={{ marginTop:12 }}>Jenis Kelamin</Label>
            <div style={{ display:'flex', gap:10, marginTop:6 }}>
              {(['male','female'] as const).map(g => (
                <button
                  key={g}
                  onClick={() => setRegGender(g)}
                  style={{
                    flex:1, padding:'10px 0',
                    background: regGender === g ? 'rgba(200,149,58,.15)' : 'var(--s2)',
                    border: `1px solid ${regGender === g ? 'var(--gold)' : 'var(--border)'}`,
                    borderRadius:10, color: regGender === g ? 'var(--gold)' : 'var(--dim)',
                    fontSize:14, cursor:'pointer', fontFamily:'EB Garamond, serif'
                  }}
                >
                  {g === 'male' ? '♂ Laki-laki' : '♀ Perempuan'}
                </button>
              ))}
            </div>

            {error && <ErrorMsg>{error}</ErrorMsg>}
            <button onClick={handleRegister} disabled={loading} style={{ ...btnStyle('gold'), marginTop:16 }}>
              {loading ? 'Mendaftar...' : 'Daftar & Dapatkan Kode →'}
            </button>
            <button onClick={() => { setMode('landing'); setError('') }} style={{ ...btnStyle('dim'), marginTop:8 }}>
              ← Kembali
            </button>
          </Card>
        </div>
      )}

      {/* REGISTER SUCCESS */}
      {mode === 'register' && newCode && (
        <div style={{ width:'100%', maxWidth:380 }}>
          <Card title="✦ Akun Berhasil Dibuat!">
            <p style={{ fontSize:15, color:'var(--dim)', lineHeight:1.7, marginBottom:16 }}>
              Simpan kode aksesmu ini. Kamu akan membutuhkannya setiap kali login:
            </p>
            <div style={{
              background:'rgba(200,149,58,.12)', border:'1px solid var(--gl)',
              borderRadius:12, padding:'18px 20px', textAlign:'center', marginBottom:16
            }}>
              <div style={{ fontFamily:'Cinzel, serif', fontSize:11, letterSpacing:'.2em', color:'var(--gl)', marginBottom:8 }}>
                KODE AKSESMU
              </div>
              <div style={{ fontFamily:'Cinzel Decorative, serif', fontSize:28, color:'var(--gold)', letterSpacing:'.1em' }}>
                {newCode}
              </div>
            </div>
            <p style={{ fontSize:12, color:'var(--dim)', fontStyle:'italic', marginBottom:16 }}>
              Screenshot atau catat kode ini. Kode ini unik untukmu dan tidak bisa dipulihkan jika hilang.
            </p>
            <button onClick={() => router.push('/dashboard')} style={btnStyle('gold')}>
              Mulai Membaca Bazi →
            </button>
          </Card>
        </div>
      )}
    </main>
  )
}

// ── Sub-components ──
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background:'var(--surface)', border:'1px solid var(--b2)', borderRadius:20, padding:'28px 24px' }}>
      <div style={{ fontFamily:'Cinzel, serif', fontSize:10, letterSpacing:'.25em', color:'var(--gl)', textTransform:'uppercase', marginBottom:18 }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function Label({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ fontSize:12, color:'var(--dim)', marginBottom:6, letterSpacing:'.04em', ...style }}>{children}</div>
}

function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={{
        width:'100%', background:'var(--s2)', border:'1px solid var(--border)',
        borderRadius:12, padding:'12px 14px', color:'var(--text)',
        fontFamily:'EB Garamond, serif', fontSize:16, outline:'none',
      }}
    />
  )
}

function ErrorMsg({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background:'rgba(192,56,56,.12)', border:'1px solid var(--red)', borderRadius:10, padding:'10px 14px', fontSize:13, color:'#e07070', marginTop:10 }}>
      {children}
    </div>
  )
}

function btnStyle(type: 'gold'|'teal'|'dim'): React.CSSProperties {
  const styles = {
    gold: { background:'linear-gradient(135deg,#4a0e0e,#6a1818)', border:'1px solid var(--red)', color:'var(--text)' },
    teal: { background:'rgba(40,160,154,.15)', border:'1px solid #164d4a', color:'var(--teal)' },
    dim:  { background:'var(--s2)', border:'1px solid var(--border)', color:'var(--dim)' },
  }
  return {
    ...styles[type],
    width:'100%', padding:'14px', borderRadius:14,
    fontFamily:'Cinzel, serif', fontSize:12, letterSpacing:'.12em',
    cursor:'pointer', transition:'all .2s',
  }
}
