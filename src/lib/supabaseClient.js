import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validación de seguridad para evitar pantallas en blanco si faltan variables de entorno
const isConfigured = supabaseUrl && supabaseAnonKey

export const supabase = isConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : { 
      from: () => ({ 
        select: () => ({ 
          eq: () => ({ limit: () => Promise.resolve({ data: [], error: null }) }),
          order: () => ({ limit: () => Promise.resolve({ data: [], error: null }) })
        }),
        insert: () => Promise.resolve({ data: null, error: new Error('Supabase no está configurado') })
      }) 
    }

