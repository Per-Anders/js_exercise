var laptop = {
      color: "black",
      year: "unknown",
      model: "x230",
      price: 1700,
      brand: "Lenovo"
}

// gjøre endringer til objektet
laptop["price"] = 1000;
laptop.brand = "IBM";
laptop.color = "#000";
console.log(laptop);

// sletter year
delete laptop.year;

// legger til year igjen
laptop.year = "unknown";
