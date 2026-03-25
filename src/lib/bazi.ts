// ══════════════════════════════════════════════════════════
//  BAZI ENGINE — Universal Ten God Rule System
// ══════════════════════════════════════════════════════════

export const STEMS    = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']
export const BRANCHES = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']

// ── Proper typed metadata ─────────────────────────────────
export type StemMeta   = { romanization:string; element:string; isYin:boolean }
export type BranchMeta = { romanization:string; animal:string;  element:string; isYin:boolean }

export const STEM_META: StemMeta[] = [
  {romanization:'Jiǎ', element:'Kayu', isYin:false},
  {romanization:'Yǐ',  element:'Kayu', isYin:true},
  {romanization:'Bǐng',element:'Api',  isYin:false},
  {romanization:'Dīng',element:'Api',  isYin:true},
  {romanization:'Wù',  element:'Tanah',isYin:false},
  {romanization:'Jǐ',  element:'Tanah',isYin:true},
  {romanization:'Gēng',element:'Logam',isYin:false},
  {romanization:'Xīn', element:'Logam',isYin:true},
  {romanization:'Rén', element:'Air',  isYin:false},
  {romanization:'Guǐ', element:'Air',  isYin:true},
]

export const BRANCH_META: BranchMeta[] = [
  {romanization:'Zǐ',  animal:'Tikus',  element:'Air',  isYin:true},
  {romanization:'Chǒu',animal:'Kerbau', element:'Tanah',isYin:true},
  {romanization:'Yín', animal:'Macan',  element:'Kayu', isYin:false},
  {romanization:'Mǎo', animal:'Kelinci',element:'Kayu', isYin:true},
  {romanization:'Chén',animal:'Naga',   element:'Tanah',isYin:false},
  {romanization:'Sì',  animal:'Ular',   element:'Api',  isYin:true},
  {romanization:'Wǔ',  animal:'Kuda',   element:'Api',  isYin:false},
  {romanization:'Wèi', animal:'Kambing',element:'Tanah',isYin:true},
  {romanization:'Shēn',animal:'Monyet', element:'Logam',isYin:false},
  {romanization:'Yǒu', animal:'Ayam',   element:'Logam',isYin:true},
  {romanization:'Xū',  animal:'Anjing', element:'Tanah',isYin:false},
  {romanization:'Hài', animal:'Babi',   element:'Air',  isYin:true},
]

// ── Element index: Kayu=0, Api=1, Tanah=2, Logam=3, Air=4 ─
const EL: Record<string,number> = {Kayu:0,Api:1,Tanah:2,Logam:3,Air:4}
const PRODUCES = [1,2,3,4,0] // Kayu→Api→Tanah→Logam→Air→Kayu
const CONTROLS = [2,3,4,0,1] // Kayu→Tanah→Air→Api→Logam→Kayu

// ── Ten God calculation ───────────────────────────────────
// Returns index 0-9:
// 0=比肩(Companion), 1=劫财(Rob Wealth), 2=食神(Eating God), 3=伤官(Hurting Officer)
// 4=偏财(Indirect Wealth), 5=正财(Direct Wealth), 6=七杀(7 Killings), 7=正官(Direct Officer)
// 8=偏印(Indirect Resource), 9=正印(Direct Resource)
export function getTenGodIndex(dmSi: number, daySi: number): number {
  const dmEl    = Math.floor(dmSi / 2)
  const dayEl   = Math.floor(daySi / 2)
  const sameYin = (dmSi % 2) === (daySi % 2)

  if (dayEl === dmEl)             return sameYin ? 0 : 1  // 比肩 / 劫财
  if (dayEl === PRODUCES[dmEl])   return sameYin ? 2 : 3  // 食神 / 伤官
  if (dayEl === CONTROLS[dmEl])   return sameYin ? 4 : 5  // 偏财 / 正财
  if (CONTROLS[dayEl] === dmEl)   return sameYin ? 6 : 7  // 七杀 / 正官
  if (PRODUCES[dayEl] === dmEl)   return sameYin ? 8 : 9  // 偏印 / 正印
  return 0
}

export const TG_NAMES = ['比肩','劫财','食神','伤官','偏财','正财','七杀','正官','偏印','正印']
export const TG_EN    = [
  'Companion','Rob Wealth','Eating God','Hurting Officer',
  'Indirect Wealth','Direct Wealth','7 Killings','Direct Officer',
  'Indirect Resource','Direct Resource'
]

// ── Score ─────────────────────────────────────────────────
const TG_BASE = [4,3,8,9,8,7,5,6,4,5]
const BR_MOD  = [-1.5,0.5,0,1,-0.5,0.5,2,0.5,-0.5,-1,0.5,0]

export function calcScore(
  tgIdx: number,
  branchIdx: number,
  luckyElements: string,
  daySi: number
): number {
  let score = TG_BASE[tgIdx] + BR_MOD[branchIdx]
  const dayEl = STEM_META[daySi].element
  if (luckyElements && luckyElements.toLowerCase().includes(dayEl.toLowerCase())) score += 1.5
  return Math.min(10, Math.max(1, Math.round(score)))
}

// ── Day pillar calculation ────────────────────────────────
// Reference: Oct 9 1999 = 甲午 (verified from Reyhan's chart)
const REF = new Date(1999, 9, 9)

export function getDayPillar(date: Date): { si: number; bi: number } {
  const local = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const days  = Math.round((local.getTime() - REF.getTime()) / 86400000)
  return {
    si: ((0 + days) % 10 + 10) % 10,
    bi: ((6 + days) % 12 + 12) % 12,
  }
}

// ── Get Day Master stem index from birth date ─────────────
// Day Master = Heavenly Stem of the Day Pillar on birth date
export function getDayMasterSi(birthDate: string): number {
  // birthDate format: YYYY-MM-DD
  const parts = birthDate.split('-')
  if (parts.length < 3) return 0
  const d = new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]))
  return getDayPillar(d).si
}

export function getDayMasterLabel(birthDate: string): string {
  const si = getDayMasterSi(birthDate)
  const sm = STEM_META[si]
  return `${STEMS[si]} ${sm.romanization} ${sm.element}`
}

// ── Kua number ────────────────────────────────────────────
export function getKuaNumber(birthYear: number, gender: 'male'|'female'): number {
  let sum = birthYear % 100
  while (sum > 9) sum = Math.floor(sum/10) + (sum%10)
  if (gender === 'male') {
    let k = 10 - sum
    if (k === 5) k = 2
    return k <= 0 ? k + 9 : k
  }
  let k = sum + 5
  while (k > 9) k = Math.floor(k/10) + (k%10)
  if (k === 5) k = 8
  return k
}

export const KUA_DIR: Record<number, { success:string; health:string; love:string; growth:string }> = {
  1: {success:'Tenggara (SE)', health:'Timur (E)',       love:'Selatan (S)',      growth:'Utara (N)'},
  2: {success:'Timur Laut (NE)',health:'Barat (W)',      love:'Barat Laut (NW)', growth:'Barat Daya (SW)'},
  3: {success:'Selatan (S)',   health:'Utara (N)',       love:'Tenggara (SE)',   growth:'Timur (E)'},
  4: {success:'Utara (N)',     health:'Selatan (S)',     love:'Timur (E)',       growth:'Tenggara (SE)'},
  6: {success:'Barat (W)',     health:'Timur Laut (NE)',  love:'Barat Daya (SW)',growth:'Barat Laut (NW)'},
  7: {success:'Barat Laut (NW)',health:'Barat Daya (SW)',love:'Timur Laut (NE)',growth:'Barat (W)'},
  8: {success:'Barat Daya (SW)',health:'Barat Laut (NW)',love:'Barat (W)',       growth:'Timur Laut (NE)'},
  9: {success:'Timur (E)',     health:'Tenggara (SE)',   love:'Utara (N)',       growth:'Selatan (S)'},
}

// ── Access code: NamaPanggilan + DDMM (no separator) ─────
export function generateAccessCode(name: string, birthDate: string): string {
  const first = name.trim().split(' ')[0]
  const cap   = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()
  const parts = birthDate.split('-')
  const dd = (parts[2] || '01').padStart(2,'0')
  const mm = (parts[1] || '01').padStart(2,'0')
  return `${cap}${dd}${mm}`
}
