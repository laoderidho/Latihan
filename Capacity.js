
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function canShipWithinDDays(weights, D, capacity) {
  let daysNeeded = 1; // Jumlah hari yang dibutuhkan untuk mengirim paket
  let currentWeight = 0; // Berat total paket yang akan dikirim pada hari ini

  for (let i = 0; i < weights.length; i++) {
    currentWeight += weights[i];
    if (currentWeight > capacity) {
      daysNeeded++;
      currentWeight = weights[i];
    }
  }

  return daysNeeded <= D;
}


const capacity = (weights, days)=>{
     let maxWeight = 0;
     let totalWeight = 0;

     // Tentukan batas bawah dan batas atas kapasitas kapal
     for (let i = 0; i < weights.length; i++) {
       maxWeight = Math.max(maxWeight, weights[i]);
       totalWeight += weights[i];
     }

     let left = maxWeight; // Batas bawah
     let right = totalWeight; // Batas atas

     while (left < right) {
       let mid = Math.floor((left + right) / 2); // Kapasitas tengah

       if (canShipWithinDDays(weights, days, mid)) {
         // Coba mencari kapasitas yang lebih kecil
         right = mid;
       } else {
         // Coba mencari kapasitas yang lebih besar
         left = mid + 1;
       }
     }

     return left;
}

console.log(capacity(input, 5))