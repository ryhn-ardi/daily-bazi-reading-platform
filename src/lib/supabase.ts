import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export type UserProfile = {
  id: string
  name: string
  access_code: string
  birth_date: string
  birth_time: string | null
  gender: 'male' | 'female'
  day_master: string
  year_pillar: string
  month_pillar: string
  day_pillar: string
  hour_pillar: string
  dominant_element: string
  lucky_elements: string
  kua_number: number
  created_at: string
}
