const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  if (carCollection.includes(carBrand) === false) {
    carCollection.push(carBrand)
    return `new car collection is : ${carCollection}.`
  } else {
    return `${carBrand} has already existed in the ${carCollection.indexOf(carBrand)+1} position of car collection.`
  }
}


// ผลลัพธ์ที่ควรได้จาก Example case
// กรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

// กรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.