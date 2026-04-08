export const i18n = {
  defaultLocale: 'en',
  locales: [
    // Original languages
    'en',      // English
    'es',      // Spanish
    'fr',      // French
    'de',      // German
    'hi',      // Hindi
    'ta',      // Tamil
    'te',      // Telugu
    'kn',      // Kannada
    'ml',      // Malayalam
    
    // African Languages
    // Nigeria
    'ha',      // Hausa
    'yo',      // Yoruba
    'ig',      // Igbo
    'ff',      // Fulfulde
    
    // Kenya & East Africa
    'sw',      // Swahili
    'ki',      // Gikuyu (Kikuyu)
    'lu',      // Luhya
    'lo',      // Luo
    
    // Ethiopia
    'am',      // Amharic
    'om',      // Oromo
    'ti',      // Tigrinya
    'so',      // Somali
    
    // Uganda
    'lg',      // Luganda
    'nyn',     // Runyankole
    'ach',     // Acholi
    
    // Ghana
    'ak',      // Akan (Twi)
    'ee',      // Ewe
    'gaa',     // Ga
    'dag',     // Dagbani
    
    // South Africa (11 official languages)
    'zu',      // Zulu
    'xh',      // Xhosa
    'af',      // Afrikaans
    'nso',     // Sepedi (Northern Sotho)
    'tn',      // Setswana
    'st',      // Sesotho
    'ts',      // Xitsonga
    'ss',      // siSwati
    've',      // Tshivenda
    'nr',      // Ndebele
    
    // Sudan & Arabic
    'ar',      // Modern Standard Arabic
    
    // Additional regional languages
    'nu',      // Nubian
  ] as const,
} as const;

export type Locale = (typeof i18n.locales)[number];

// Language display names
export const languageNames: Record<Locale, string> = {
  en: '🇬🇧 English',
  es: '🇪🇸 Español',
  fr: '🇫🇷 Français',
  de: '🇩🇪 Deutsch',
  hi: '🇮🇳 हिन्दी',
  ta: '🇮🇳 தமிழ்',
  te: '🇮🇳 తెలుగు',
  kn: '🇮🇳 ಕನ್ನಡ',
  ml: '🇮🇳 മലയാളം',
  
  // Nigeria
  ha: '🇳🇬 Hausa',
  yo: '🇳🇬 Yoruba',
  ig: '🇳🇬 Igbo',
  ff: '🇳🇬 Fulfulde',
  
  // Kenya & East Africa
  sw: '🇰🇪 Swahili',
  ki: '🇰🇪 Gikuyu',
  lu: '🇰🇪 Luhya',
  lo: '🇰🇪 Luo',
  
  // Ethiopia
  am: '🇪🇹 አማርኛ (Amharic)',
  om: '🇪🇹 Oromo',
  ti: '🇪🇹 ትግርኛ (Tigrinya)',
  so: '🇪🇹 Somali',
  
  // Uganda
  lg: '🇺🇬 Luganda',
  nyn: '🇺🇬 Runyankole',
  ach: '🇺🇬 Acholi',
  
  // Ghana
  ak: '🇬🇭 Akan',
  ee: '🇬🇭 Ewe',
  gaa: '🇬🇭 Ga',
  dag: '🇬🇭 Dagbani',
  
  // South Africa
  zu: '🇿🇦 isiZulu',
  xh: '🇿🇦 isiXhosa',
  af: '🇿🇦 Afrikaans',
  nso: '🇿🇦 Sepedi',
  tn: '🇿🇦 Setswana',
  st: '🇿🇦 Sesotho',
  ts: '🇿🇦 Xitsonga',
  ss: '🇿🇦 siSwati',
  ve: '🇿🇦 Tshivenda',
  nr: '🇿🇦 Ndebele',
  
  // Sudan & Arabic
  ar: '🇸🇩 العربية (Arabic)',
  nu: '🇸🇩 Nubian',
};

// Group languages by region for display
export const languagesByRegion = {
  'India': ['hi', 'ta', 'te', 'kn', 'ml'],
  'International': ['en', 'es', 'fr', 'de', 'ar'],
  'Nigeria': ['ha', 'yo', 'ig', 'ff'],
  'East Africa': ['sw', 'ki', 'lu', 'lo'],
  'Ethiopia': ['am', 'om', 'ti', 'so'],
  'Uganda': ['lg', 'nyn', 'ach'],
  'Ghana': ['ak', 'ee', 'gaa', 'dag'],
  'South Africa': ['zu', 'xh', 'af', 'nso', 'tn', 'st', 'ts', 'ss', 've', 'nr'],
  'Sudan': ['ar', 'nu'],
} as const;