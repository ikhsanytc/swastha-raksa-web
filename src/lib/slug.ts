export default function slugify(text: string) {
  return text
    .toLowerCase() // jadikan huruf kecil
    .trim() // hilangkan spasi depan/belakang
    .replace(/\s+/g, "-") // ganti spasi jadi -
    .replace(/[^\w\-]+/g, "") // hilangkan karakter non-alphanumeric
    .replace(/\-\-+/g, "-"); // ganti multiple - jadi satu -
}
