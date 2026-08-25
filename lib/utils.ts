export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export const handleWhatsApp = (): void => {
  const message = `
Hello, I am interested in booking a ride with AAVORide.

📍 Pickup Location: pickup
📍 Drop Location: drop
📅 Travel Date:date
🔄 Trip Type: Round Trip 
📅 Return Date: returnDate

Please share the available vehicle options and best quotation.
  `;


  const url = `https://wa.me/9712387840?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}