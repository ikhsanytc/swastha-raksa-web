export function addTailwindClasses(html: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const headingClasses: Record<string, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    ul: "list-disc list-inside pl-5 my-4",
    ol: "list-decimal list-inside pl-5 my-4",
  };

  Object.entries(headingClasses).forEach(([tag, className]) => {
    doc.querySelectorAll(tag).forEach((el) => {
      el.classList.add(...className.split(" "));
    });
  });

  return doc.body.innerHTML;
}
