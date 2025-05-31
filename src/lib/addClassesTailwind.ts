export function addTailwindClasses(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // 1. Proteksi: Hapus semua elemen <script>
  // Ini dilakukan pertama untuk menghilangkan potensi eksekusi script
  // atau manipulasi DOM yang tidak diinginkan oleh script tersebut.
  doc.querySelectorAll("script").forEach((scriptTag) => {
    scriptTag.remove();
  });

  // 2. Tambahkan Tailwind classes ke elemen yang ditentukan
  const elementClasses: Record<string, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    ul: "list-disc list-inside pl-5 my-4",
    ol: "list-decimal list-inside pl-5 my-4",
    pre: "bg-gray-100 p-4 rounded text-sm overflow-auto mb-4 font-mono",
    code: "bg-gray-200 px-1 rounded text-sm font-mono",
    blockquote: "border-l-4 border-gray-400 pl-4 italic text-gray-600 mb-4",
  };

  Object.entries(elementClasses).forEach(([tag, className]) => {
    doc.querySelectorAll(tag).forEach((el) => {
      if (el instanceof HTMLElement) {
        el.classList.add(...className.split(" "));
      }
    });
  });

  // 3. Tambahkan class w-64 ke setiap elemen img
  doc.querySelectorAll("img").forEach((el) => {
    if (el instanceof HTMLImageElement) {
      el.classList.add("w-64");
    }
  });

  // 4. Hapus style background-color dan background (jika mengandung warna) dari semua elemen
  doc.querySelectorAll("*").forEach((el) => {
    if (el instanceof HTMLElement) {
      if (el.style.backgroundColor) {
        el.style.removeProperty("background-color");
      }
      // Cek juga properti 'background' shorthand
      if (el.style.background) {
        const potentialColor = el.style.background.trim();
        // CSS.supports('color', value) bisa digunakan untuk cek apakah sebuah string adalah warna yang valid
        // Ini adalah pengecekan sederhana; untuk kasus yang lebih kompleks mungkin perlu parsing yang lebih detail
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
