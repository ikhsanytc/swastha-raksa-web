export function parserHTML(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // 1. Proteksi: Hapus semua elemen <script>
  // Ini dilakukan pertama untuk menghilangkan potensi eksekusi script
  // atau manipulasi DOM yang tidak diinginkan oleh script tersebut.
  doc.querySelectorAll("script").forEach((scriptTag) => {
    scriptTag.remove();
  });

  // 2. Tambahkan class w-64 ke setiap elemen img
  doc.querySelectorAll("img").forEach((el) => {
    if (el instanceof HTMLImageElement) {
      el.classList.add("w-64");
    }
  });

  // 3. Hapus style background-color dan background (jika mengandung warna) dari semua elemen,
  // kecuali elemen yang berhubungan dengan tabel
  doc.querySelectorAll("*").forEach((el) => {
    if (el instanceof HTMLElement) {
      const tagName = el.tagName.toLowerCase();

      // Lewati elemen terkait table
      const isTableElement = [
        "table",
        "thead",
        "tbody",
        "tfoot",
        "tr",
        "td",
        "th",
      ].includes(tagName);
      if (isTableElement) return;

      if (el.style.backgroundColor) {
        el.style.removeProperty("background-color");
      }

      if (el.style.background) {
        const potentialColor = el.style.background.trim();
        if (
          CSS.supports("color", potentialColor) ||
          potentialColor.startsWith("#") ||
          potentialColor.startsWith("rgb")
        ) {
          el.style.removeProperty("background");
        }
      }
    }
  });

  // Penting: DOMParser sendiri biasanya tidak mengeksekusi script saat parsing 'text/html'.
  // Namun, menghapusnya adalah praktik terbaik jika HTML akan disisipkan kembali ke DOM live
  // atau jika ada keraguan tentang bagaimana output akan digunakan.
  // Yang dikembalikan adalah innerHTML dari body, jadi script di head juga tidak akan masuk
  // jika tidak dihapus secara eksplisit (namun querySelectorAll('script') di atas akan menangkap semua).
  return doc.body.innerHTML;
}
