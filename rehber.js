// Rehber adımları
const guides = {
  'rapor': [
    'Verileri topla',
    'Analiz yap',
    'Raporu hazırla',
    'Kontrol et'
  ],
  'veri': [
    'Sistem loglarını kontrol et',
    'Eksik verileri tespit et',
    'Gerekli düzeltmeleri yap'
  ],
  'proje': [
    'Görevleri listele',
    'Sorumluları ata',
    'Durum güncellemelerini kontrol et'
  ]
};

// Listeyi açıp kapatma ve adımları ekleme
function toggleSteps(id) {
  const ul = document.getElementById(`${id}-steps`);
  if (ul.classList.contains('hidden')) {
    // Adımlar daha önce eklenmemişse ekle
    if (ul.childElementCount === 0) {
      guides[id].forEach((step, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" id="${id}-step-${index}"> <label for="${id}-step-${index}">${step}</label>`;
        ul.appendChild(li);
      });
    }
    ul.classList.remove('hidden');
  } else {
    ul.classList.add('hidden');
  }
}
