// Data untuk chatbot
export interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  timestamp: number;
}

export interface ChatResponse {
  text: string;
  actions?: Array<{
    label: string;
    value: string;
  }>;
}

// Data untuk pertanyaan dan jawaban chatbot
export const chatbotResponses: Record<string, ChatResponse> = {
  default: {
    text: "Halo! Saya adalah asisten digital Khuzayfah. Ada yang bisa saya bantu terkait layanan SEO dan Digital Marketing?",
    actions: [
      { label: "Apa layanan yang ditawarkan?", value: "services" },
      { label: "Bagaimana proses kerja Anda?", value: "process" },
      { label: "Berapa biaya untuk layanan?", value: "pricing" },
      { label: "Kontak langsung", value: "contact" }
    ]
  },
  greeting: {
    text: "Halo! Senang bertemu dengan Anda. Ada yang bisa saya bantu?",
    actions: [
      { label: "Layanan", value: "services" },
      { label: "Tentang", value: "about" }
    ]
  },
  services: {
    text: "Saya menawarkan beberapa layanan digital marketing dan SEO, termasuk:\n\n• Optimasi SEO Website\n• Manajemen Sosial Media\n• Content Marketing\n• Google Ads & Facebook Ads\n• Analisis Kompetitor\n\nLayanan mana yang ingin Anda ketahui lebih lanjut?",
    actions: [
      { label: "SEO Website", value: "seo" },
      { label: "Sosial Media", value: "social" },
      { label: "Content Marketing", value: "content" },
      { label: "Iklan Online", value: "ads" }
    ]
  },
  seo: {
    text: "Layanan SEO saya meliputi:\n\n• Audit website komprehensif\n• Riset kata kunci\n• Optimasi on-page\n• Optimasi teknis\n• Link building\n• Analisis dan pelaporan bulanan\n\nHasil SEO biasanya terlihat dalam 3-6 bulan, tergantung kondisi website dan persaingan.",
    actions: [
      { label: "Berapa biayanya?", value: "pricing" },
      { label: "Proses kerja", value: "process" },
      { label: "Klien sebelumnya", value: "portfolio" }
    ]
  },
  social: {
    text: "Manajemen sosial media mencakup:\n\n• Pembuatan dan pengelolaan akun\n• Pembuatan konten visual\n• Penjadwalan posting\n• Interaksi dengan audience\n• Analisa performa\n• Laporan bulanan\n\nPlatform: Facebook, Instagram, Twitter, LinkedIn, TikTok.",
    actions: [
      { label: "Berapa biayanya?", value: "pricing" },
      { label: "Frekuensi posting", value: "frequency" },
      { label: "Contoh hasil", value: "portfolio" }
    ]
  },
  content: {
    text: "Content marketing meliputi:\n\n• Artikel blog SEO-friendly\n• Infografis dan visual content\n• Video pendek & explainer\n• Email newsletter\n• Case studies\n• Ebooks & whitepapers\n\nSemua konten dibuat sesuai branding dan target audience Anda.",
    actions: [
      { label: "Berapa biayanya?", value: "pricing" },
      { label: "Proses pembuatan", value: "process" },
      { label: "Contoh konten", value: "portfolio" }
    ]
  },
  ads: {
    text: "Layanan iklan online mencakup:\n\n• Google Ads (Search, Display, YouTube)\n• Facebook & Instagram Ads\n• LinkedIn Ads\n• TikTok Ads\n\nMulai dari pembuatan strategi, desain kreatif, pengaturan targeting, optimasi, hingga pelaporan hasil.",
    actions: [
      { label: "Berapa biayanya?", value: "pricing" },
      { label: "Minimum budget", value: "min_budget" },
      { label: "Case studies", value: "portfolio" }
    ]
  },
  process: {
    text: "Proses kerja saya terdiri dari 5 tahap:\n\n1. Konsultasi & analisis kebutuhan\n2. Penyusunan strategi & proposal\n3. Implementasi solusi\n4. Monitoring & optimasi\n5. Laporan hasil & evaluasi\n\nSetiap project dimulai dengan meeting kickoff untuk memastikan ekspektasi dan target yang jelas.",
    actions: [
      { label: "Berapa lama prosesnya?", value: "timeline" },
      { label: "Apa yang dibutuhkan?", value: "requirements" },
      { label: "Mulai konsultasi", value: "contact" }
    ]
  },
  pricing: {
    text: "Biaya layanan bervariasi tergantung kebutuhan dan skala bisnis Anda. Untuk mendapatkan penawaran yang sesuai, diperlukan konsultasi singkat untuk memahami kebutuhan spesifik Anda.\n\nSilakan hubungi via WhatsApp atau Email untuk diskusi lebih lanjut.",
    actions: [
      { label: "Kontak WhatsApp", value: "whatsapp" },
      { label: "Kirim Email", value: "email" },
      { label: "Facebook", value: "facebook" }
    ]
  },
  portfolio: {
    text: "Anda dapat melihat beberapa hasil kerja saya di section Projects pada halaman ini. Untuk case studies dan portfolio yang lebih detail, silakan hubungi saya langsung untuk mendapatkan presentasi khusus sesuai industri Anda.",
    actions: [
      { label: "Lihat Projects", value: "goto_projects" },
      { label: "Kontak langsung", value: "contact" }
    ]
  },
  contact: {
    text: "Anda dapat menghubungi saya melalui:\n\n• Email: singranksg@gmail.com\n• WhatsApp: +62 823 7766 0027\n• Facebook: Khuzayfah.by.redo\n\nSaya akan membalas dalam waktu 24 jam kerja.",
    actions: [
      { label: "WhatsApp", value: "whatsapp" },
      { label: "Email", value: "email" },
      { label: "Facebook", value: "facebook" }
    ]
  },
  whatsapp: {
    text: "Anda akan diarahkan ke WhatsApp saya untuk melanjutkan diskusi. Silakan klik link berikut: https://wa.me/6282377660027",
    actions: [
      { label: "Kembali ke menu", value: "default" }
    ]
  },
  email: {
    text: "Anda dapat mengirim email ke singranksg@gmail.com atau klik link berikut untuk membuka aplikasi email Anda: mailto:singranksg@gmail.com",
    actions: [
      { label: "Kembali ke menu", value: "default" }
    ]
  },
  facebook: {
    text: "Anda dapat menghubungi saya melalui Facebook: https://www.facebook.com/Khuzayfah.by.redo",
    actions: [
      { label: "Kembali ke menu", value: "default" }
    ]
  },
  goto_projects: {
    text: "Silakan scroll ke bagian Projects untuk melihat beberapa karya saya, atau klik link navigation Projects di atas.",
    actions: [
      { label: "Kembali ke menu", value: "default" }
    ]
  },
  about: {
    text: "Saya adalah seorang spesialis SEO dan Digital Marketing dengan pengalaman membantu berbagai bisnis meningkatkan visibilitas online dan konversi. Saya berfokus pada strategi yang berkelanjutan dan hasil yang terukur.",
    actions: [
      { label: "Layanan", value: "services" },
      { label: "Bagaimana saya bekerja", value: "process" },
      { label: "Kontak", value: "contact" }
    ]
  },
  frequency: {
    text: "Frekuensi posting sosial media biasanya adalah:\n\n• Facebook: 3-5x per minggu\n• Instagram: 3-7x per minggu (termasuk stories)\n• Twitter: 5-7x per minggu\n• LinkedIn: 2-3x per minggu\n• TikTok: 3-5x per minggu\n\nFrekuensi ini bisa disesuaikan dengan kebutuhan dan budget Anda.",
    actions: [
      { label: "Jenis konten", value: "content" },
      { label: "Harga paket", value: "pricing" }
    ]
  },
  timeline: {
    text: "Timeline untuk setiap layanan:\n\n• SEO: Hasil awal 3-6 bulan, kontrak minimal 6 bulan\n• Sosial Media: Kontrak 3-12 bulan\n• Content Marketing: 2-4 minggu untuk strategi awal, lalu ongoing\n• Iklan Online: 1-2 minggu setup, minimal 3 bulan untuk optimasi",
    actions: [
      { label: "Proses kerja", value: "process" },
      { label: "Kontak untuk diskusi", value: "contact" }
    ]
  },
  requirements: {
    text: "Hal yang biasanya dibutuhkan untuk memulai project:\n\n• Brief bisnis dan tujuan marketing\n• Akses ke website/akun sosial media (jika ada)\n• Brand guidelines (jika ada)\n• Konten/materi yang sudah ada\n• Budget dan timeline\n\nSaya akan membantu jika Anda belum memiliki sebagian dari dokumen ini.",
    actions: [
      { label: "Mulai konsultasi", value: "contact" },
      { label: "Proses kerja", value: "process" }
    ]
  },
  min_budget: {
    text: "Budget minimal untuk kampanye iklan online:\n\n• Google Search Ads: Rp 3 juta/bulan\n• Facebook/Instagram Ads: Rp 2 juta/bulan\n• LinkedIn Ads: Rp 5 juta/bulan\n• TikTok Ads: Rp 2 juta/bulan\n\nBiaya di atas belum termasuk fee management yang biasanya 15-20% dari budget iklan atau minimal Rp 1,5 juta/bulan.",
    actions: [
      { label: "Detail layanan iklan", value: "ads" },
      { label: "Kontak untuk penawaran", value: "contact" }
    ]
  },
  unknown: {
    text: "Maaf, saya belum memahami pertanyaan Anda. Silakan pilih salah satu topik berikut atau ketik pertanyaan Anda dengan cara yang berbeda.",
    actions: [
      { label: "Layanan", value: "services" },
      { label: "Proses kerja", value: "process" },
      { label: "Harga", value: "pricing" },
      { label: "Kontak", value: "contact" }
    ]
  }
};

// Daftar kata kunci untuk mencocokkan pertanyaan pengguna
export const keywordMap: Record<string, string[]> = {
  services: ["layanan", "jasa", "service", "product", "produk", "tawarkan", "apa yang", "offer"],
  seo: ["seo", "search engine", "google", "ranking", "peringkat", "keyword", "kata kunci"],
  social: ["sosial", "social media", "instagram", "facebook", "twitter", "tiktok", "linkedin", "medsos"],
  content: ["konten", "content", "artikel", "blog", "tulisan", "video", "infografis", "newsletter"],
  ads: ["iklan", "ads", "advertising", "google ads", "facebook ads", "instagram ads", "tiktok ads", "promote", "promosi"],
  process: ["proses", "process", "cara kerja", "tahapan", "langkah", "metode", "method", "bagaimana"],
  pricing: ["harga", "biaya", "price", "pricing", "cost", "paket", "package", "bayar", "budget", "pay"],
  portfolio: ["portfolio", "hasil", "result", "karya", "project", "kerja", "testimoni", "klien", "client"],
  contact: ["kontak", "contact", "hubungi", "reach", "email", "whatsapp", "wa", "telepon", "phone", "tanya"],
  about: ["tentang", "about", "profil", "profile", "siapa", "who", "pengalaman", "experience"],
  greeting: ["halo", "hai", "hi", "hello", "hey", "selamat", "good"]
};

// Fungsi untuk mendapatkan respons berdasarkan input teks
export function getResponseByText(text: string): string {
  const lowercaseText = text.toLowerCase();
  
  // Cek apakah ada kata kunci yang cocok
  for (const [responseKey, keywords] of Object.entries(keywordMap)) {
    for (const keyword of keywords) {
      if (lowercaseText.includes(keyword)) {
        return responseKey;
      }
    }
  }
  
  // Jika tidak ada yang cocok, kembalikan 'unknown'
  return "unknown";
} 