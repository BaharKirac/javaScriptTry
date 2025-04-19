function CastRandomSpell(){ // Fonksiyon tanımı: Büyü üreten fonksiyon
    // Sıfatlar dizisi
    const adjectives = [ 
        "Mystic","Enchanted","Arcane","Divine","Shadow",
        "Infernal","Celestial","Ethereal","Luminous","Runic"
    ]
// İsimler dizisi
    const nouns = [
        "Flame","Frost","Storm","Whisper","Blade",
        "Phoenix","Dragon","Orb","Crown","Warden"
    ];
// Büyüsel ifadeler dizisi
    const magicalTerms = [
        "of Power","of Eternity","of the Ancients",
        "of Shadows","of Light","of the Void",
        "of Time","of the Elements","of Chaos","of Harmony"
    ];
// Yeni büyü adı üretici fonksiyon
    function generateSpellName() {
        // Rastgele bir sıfat seç
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        // Rastgele bir isim seç
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        // Rastgele büyüsel ifade seç
        const magicalTerm = magicalTerms[Math.floor(Math.random() * magicalTerms.length)];
 // Büyü adını döndür
        return `${adjective} ${noun} ${magicalTerm}`;
    }
    // Çıktının ekleneceği HTML <ul> elementi
    const output = document.getElementById("output");
    // Yeni bir <li> elementi oluştur
    const li = document.createElement("li")
    // <li> içine büyü adını yaz
    li.innerText = generateSpellName();
    // <li>'yi <ul>'ye ekle
    output.append(li)

}
// Sayfa tamamen yüklendiğinde çalıştırılacak kod
document.addEventListener("DOMContentLoaded", () =>{
    // Butonu seç
    const button = document.getElementById("castSpellButton");
    // Butona tıklama olayı bağla: Her tıklamada büyü üret
    button.addEventListener("click", CastRandomSpell);
})