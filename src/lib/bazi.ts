// ══════════════════════════════════════════════════════════
//  BAZI ENGINE — Universal Ten God Rule System
//  Bacaan dipersonalisasi berdasarkan TEN GOD relationship
//  antara Day Master user dan Heavenly Stem hari ini.
//  Berlaku untuk semua 10 tipe Day Master.
// ══════════════════════════════════════════════════════════

export const STEMS    = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
export const BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']

export const STEM_META = [
  ['Jiǎ','Kayu',false],['Yǐ','Kayu',true],
  ['Bǐng','Api',false],['Dīng','Api',true],
  ['Wù','Tanah',false],['Jǐ','Tanah',true],
  ['Gēng','Logam',false],['Xīn','Logam',true],
  ['Rén','Air',false],['Guǐ','Air',true],
]

export const BRANCH_META = [
  ['Zǐ','Tikus','Air',true],['Chǒu','Kerbau','Tanah',true],
  ['Yín','Macan','Kayu',false],['Mǎo','Kelinci','Kayu',true],
  ['Chén','Naga','Tanah',false],['Sì','Ular','Api',true],
  ['Wǔ','Kuda','Api',false],['Wèi','Kambing','Tanah',true],
  ['Shēn','Monyet','Logam',false],['Yǒu','Ayam','Logam',true],
  ['Xū','Anjing','Tanah',false],['Hài','Babi','Air',true],
]

// ── Element index ─────────────────────────────────────────
// Kayu=0, Api=1, Tanah=2, Logam=3, Air=4
const PRODUCES = [1,2,3,4,0] // Kayu→Api→Tanah→Logam→Air→Kayu
const CONTROLS = [2,3,4,0,1] // Kayu→Tanah→Air→Api→Logam→Kayu

// ── Ten God calculation ───────────────────────────────────
export function getTenGodIndex(dmSi: number, daySi: number): number {
  const dmEl   = Math.floor(dmSi/2)
  const dayEl  = Math.floor(daySi/2)
  const sameYin = (dmSi%2) === (daySi%2)
  if (dayEl === dmEl)           return sameYin ? 0 : 1
  if (dayEl === PRODUCES[dmEl]) return sameYin ? 2 : 3
  if (dayEl === CONTROLS[dmEl]) return sameYin ? 4 : 5
  if (CONTROLS[dayEl] === dmEl) return sameYin ? 6 : 7
  if (PRODUCES[dayEl] === dmEl) return sameYin ? 8 : 9
  return 0
}

export const TG_NAMES = ['比肩','劫财','食神','伤官','偏财','正财','七杀','正官','偏印','正印']
export const TG_EN    = ['Companion','Rob Wealth','Eating God','Hurting Officer',
                         'Indirect Wealth','Direct Wealth','7 Killings','Direct Officer',
                         'Indirect Resource','Direct Resource']

// ── Score calculation ─────────────────────────────────────
const TG_BASE   = [4,3,8,9,8,7,5,6,4,5]
const BR_MOD    = [-1.5,0.5,0,1,-0.5,0.5,2,0.5,-0.5,-1,0.5,0]

export function calcScore(tgIdx:number, branchIdx:number, luckyElements:string, daySi:number): number {
  let score = TG_BASE[tgIdx] + BR_MOD[branchIdx]
  const dayEl = STEM_META[daySi][1] as string
  if (luckyElements && luckyElements.toLowerCase().includes(dayEl.toLowerCase())) score += 1.5
  return Math.min(10, Math.max(1, Math.round(score)))
}

// ── Day pillar ────────────────────────────────────────────
const REF = new Date(1999,9,9) // Oct 9 1999 = 甲午

export function getDayPillar(date:Date) {
  const local = new Date(date.getFullYear(),date.getMonth(),date.getDate())
  const days  = Math.round((local.getTime()-REF.getTime())/86400000)
  return { si:((0+days)%10+10)%10, bi:((6+days)%12+12)%12 }
}

// ── Kua number ────────────────────────────────────────────
export function getKuaNumber(birthYear:number, gender:'male'|'female'): number {
  let sum = birthYear%100
  while(sum>9) sum=Math.floor(sum/10)+(sum%10)
  if(gender==='male'){
    let k=10-sum; if(k===5)k=2; return k<=0?k+9:k
  }
  let k=sum+5; while(k>9)k=Math.floor(k/10)+(k%10); if(k===5)k=8; return k
}

export const KUA_DIR: Record<number,{success:string;health:string;love:string;growth:string}> = {
  1:{success:'Tenggara (SE)',health:'Timur (E)',love:'Selatan (S)',growth:'Utara (N)'},
  2:{success:'Timur Laut (NE)',health:'Barat (W)',love:'Barat Laut (NW)',growth:'Barat Daya (SW)'},
  3:{success:'Selatan (S)',health:'Utara (N)',love:'Tenggara (SE)',growth:'Timur (E)'},
  4:{success:'Utara (N)',health:'Selatan (S)',love:'Timur (E)',growth:'Tenggara (SE)'},
  6:{success:'Barat (W)',health:'Timur Laut (NE)',love:'Barat Daya (SW)',growth:'Barat Laut (NW)'},
  7:{success:'Barat Laut (NW)',health:'Barat Daya (SW)',love:'Timur Laut (NE)',growth:'Barat (W)'},
  8:{success:'Barat Daya (SW)',health:'Barat Laut (NW)',love:'Barat (W)',growth:'Timur Laut (NE)'},
  9:{success:'Timur (E)',health:'Tenggara (SE)',love:'Utara (N)',growth:'Selatan (S)'},
}

// ── Access code: NamaPanggilan + DDMM ────────────────────
export function generateAccessCode(name:string, birthDate:string): string {
  const first = name.trim().split(' ')[0]
  const cap   = first.charAt(0).toUpperCase()+first.slice(1).toLowerCase()
  const parts = birthDate.split('-')
  // birthDate: YYYY-MM-DD → DD = parts[2], MM = parts[1]
  const dd = parts[2] || '01'
  const mm = parts[1] || '01'
  return `${cap}${dd}${mm}`
}
