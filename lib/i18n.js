// Simple i18n helper for English and Swahili
export const translations = {
  en: {
    home: 'Home',
    about: 'About',
    programs: 'Programs',
    impact: 'Impact',
    donate: 'Donate',
    contact: 'Contact',
    footer: 'She Pokot Network | West Pokot County, Kenya',
    mission: 'A grassroots women-led organization advancing climate justice and dignity for girls and women in pastoralist communities.',
    donate_now: 'Donate Now',
    learn_more: 'Learn More',
    our_story: 'Our Story',
    our_values: 'Our Values',
    climate_justice: 'Climate Justice & Resilience',
    girls_empowerment: 'Girls & Women Empowerment',
    livelihoods: 'Livelihoods & Sustainability',
    impact_stories: 'Impact Stories',
    news: 'News & Resources',
    transparency: 'Financials & Transparency',
    newsletter: 'Join Our Newsletter'
  },
  sw: {
    home: 'Nyumba',
    about: 'Kuhusu',
    programs: 'Programu',
    impact: 'Athari',
    donate: 'Toa Msaada',
    contact: 'Wasiliana',
    footer: 'She Pokot Network | Kaunti ya Magharibi Pokot, Kenya',
    mission: 'Shirika la jamii linalosimamiwa na wanawake linalosukuma haki ya tabia kavu na hadhi ya wasichana na wanawake katika jamii za waeneza mifugo.',
    donate_now: 'Toa Msaada Sasa',
    learn_more: 'Jifunze Zaidi',
    our_story: 'Hadithi Yetu',
    our_values: 'Thamani Zetu',
    climate_justice: 'Haki ya Tabia Kavu & Upinzani',
    girls_empowerment: 'Uwezo wa Wasichana na Wanawake',
    livelihoods: 'Chakula & Ustainasifu',
    impact_stories: 'Hadithi za Athari',
    news: 'Habari & Rasilimali',
    transparency: 'Mali Yenye Uwazi',
    newsletter: 'Jiunga na Jarida Letu'
  }
}

export function t(locale, key) {
  return (translations[locale] || translations.en)[key] || key
}
