// indirim oranı verisi varsa indirimli fiyatı hesapla yoksa orjinal fiyatı getir

export default (price: number, discount?: number) => {
  return discount ? price - (price * discount) / 100 : price;
};
