export function formatPrice(pounds) {
  return `£${(pounds / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}