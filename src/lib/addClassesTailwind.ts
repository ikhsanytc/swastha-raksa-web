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

  // Add Tailwind classes to specified elements
  Object.entries(headingClasses).forEach(([tag, className]) => {
    doc.querySelectorAll(tag).forEach((el) => {
      // Ensure el is an HTMLElement to access classList
      if (el instanceof HTMLElement) {
        el.classList.add(...className.split(" "));
      }
    });
  });

  // Remove background-color from all elements
  doc.querySelectorAll("*").forEach((el) => {
    // Ensure el is an HTMLElement to access style
    if (el instanceof HTMLElement) {
      if (el.style.backgroundColor) {
        el.style.removeProperty("background-color");
      }
      // Also check for background property if it might contain a color
      // This is a simpler check; more robust parsing might be needed for complex 'background' shorthand
      if (
        el.style.background &&
        (el.style.background.includes("rgb") ||
          el.style.background.includes("#") ||
          el.style.background
            .match(/\b[a-zA-Z]+\b/g)
            ?.some((color) => CSS.supports("color", color)))
      ) {
        // If we're sure background is only for color, we can remove it.
        // However, 'background' can contain images, position, repeat etc.
        // A safer approach for complex 'background' properties would be to parse them
        // and only remove the color component, which is more involved.
        // For now, if we detect a color, we'll clear the background.
        // If you need to preserve other background properties (image, repeat, etc.),
        // this part will need more sophisticated logic.
        // A simple removal if it seems to be only a color:
        const potentialColor = el.style.background.trim();
        if (
          CSS.supports("color", potentialColor) ||
          potentialColor.startsWith("#") ||
          potentialColor.startsWith("rgb")
        ) {
          el.style.removeProperty("background");
        }
        // If you want to be more aggressive and remove any 'background' that might have a color:
        // el.style.removeProperty("background");
      }
    }
  });

  return doc.body.innerHTML;
}
