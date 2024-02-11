// Nomer 1

let arrayStudent = [
    {
      Name: "Owen",
      Email: "owenthebot@gmail.com",
      Age: 27,
      Score: 77,
    },
    {
      Name: "Dom",
      Email: "Domb@gmail.com",
      Age: 18,
      Score: 42,
    },
    {
      Name: "Arthur",
      Email: "ArthurM@gmail.com",
      Age: 39,
      Score: 99,
    },
    {
      Name: "Rissa",
      Email: "maxxRIzzz@gmail.com",
      Age: 19,
      Score: 96,
    },
  ];
  
  function calculateData(arr) {
    let result = {
      Score: {
        Highest: 0,
        Lowest: 0,
        Average: 0,
      },
      Age: {
        Highest: 0,
        Lowest: 0,
        Average: 0,
      },
    };
  
    let score = [];
    let age = [];
    for (const student of arr) {
      score.push(student.Score);
      age.push(student.Age);
    }
  
    score.sort((a, b) => a - b);
    age.sort((a, b) => a - b);
    result.Score.Highest = score[score.length - 1];
    result.Score.Lowest = score[0];
    result.Age.Highest = age[age.length - 1];
    result.Age.Lowest = age[0];
  
    let sumScore = 0;
    for (let data of score) {
      sumScore += data;
    }
  
    let avgScore = sumScore / score.length;
  
    result.Score.Average = avgScore;
  
    let sumAge = 0;
    for (let data of age) {
      sumAge += data;
    }
  
    let avgAge = sumAge / score.length;
  
    result.Age.Average = avgAge;
    return result;
  }
  
  console.log(calculateData(arrayStudent));
  
  // Nomer 2
  
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Transaction {
    total = 0;
    product = [];
  
    constructor() {
      this.total;
      this.product;
    }
  
    addToCart(product, amount) {
      this.product.push({
        product,
        amount,
      });
  
      this.total += product.price * amount;
    }
  
    getTotal() {
      return `Total Price: Rp. ${this.total}`;
    }
  
    getCheckout() {
      const products = this.product.map(dt => {
        return {
          name: dt.product.name,
          price: dt.product.price,
          amount: dt.amount,
        }
      });
  
      return products;
    }
  }
  
  const burger = new Product("Cheese Burger", 35000);
  const hotdog = new Product("HotDog", 25000);
  const soda = new Product("Soda", 10000);
  
  const transaction = new Transaction();
  
  transaction.addToCart(burger, 3);
  transaction.addToCart(hotdog, 4);
  transaction.addToCart(soda, 2);
  
  console.log(transaction.getTotal());
  console.log(transaction.getCheckout());