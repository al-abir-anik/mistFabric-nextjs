let all_product = [
  {
    name: "Striped Peplum Blouse",
    category: "women",
    images: ["/images/women1.png"],
    description:
      "A chic striped blouse with flutter sleeves and a peplum hem, perfect for both office and casual wear.",
    offerPrice: 50,
    regularPrice: 80,
  },
  {
    name: "Casual Peplum Top",
    category: "women",
    images: ["/images/women2.png"],
    description:
      "Lightweight peplum blouse with overlap collar design, offering style and comfort for everyday use.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Elegant Sleeve Blouse",
    category: "women",
    images: ["/images/women3.png"],
    description:
      "An elegant flutter sleeve blouse with soft fabric and modern fit for versatile styling.",
    offerPrice: 60,
    regularPrice: 100,
  },
  {
    name: "Office Peplum Shirt",
    category: "women",
    images: ["/images/women4.png"],
    description:
      "A tailored blouse with structured design and peplum cut, ideal for a polished office look.",
    offerPrice: 100,
    regularPrice: 150,
  },
  {
    name: "Casual Day Blouse",
    category: "women",
    images: ["/images/women5.png"],
    description:
      "Trendy overlap blouse that pairs effortlessly with jeans or skirts for a stylish day out.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Everyday Peplum Blouse",
    category: "women",
    images: ["/images/women6.png"],
    description:
      "Soft and breathable peplum blouse designed for daily comfort and fashion-forward looks.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Chic White Blouse",
    category: "women",
    images: ["/images/women7.png"],
    description:
      "Minimalist flutter sleeve blouse with a flattering fit, great for layering or wearing alone.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Summer Vibe Blouse",
    category: "women",
    images: ["/images/women8.png"],
    description:
      "Light and breezy blouse with peplum design, perfect for summer styling.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Stylish Printed Blouse",
    category: "women",
    images: ["/images/women9.png"],
    description:
      "Modern printed blouse with flattering overlap collar and relaxed fit.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Trendy Peplum Shirt",
    category: "women",
    images: ["/images/women10.png"],
    description:
      "Trendy peplum cut blouse with subtle detailing to enhance everyday looks.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Soft Cotton Blouse",
    category: "women",
    images: ["/images/women11.png"],
    description:
      "Made with soft cotton fabric, this blouse ensures comfort while maintaining style.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Weekend Casual Blouse",
    category: "women",
    images: ["/images/women12.png"],
    description:
      "Relaxed peplum blouse designed for weekend outings and casual styling.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Green Slim Bomber Jacket",
    category: "men",
    images: ["/images/men1.png"],
    description:
      "A stylish slim-fit bomber jacket with full-zip closure, made for casual and semi-formal wear.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Classic Bomber Jacket",
    category: "men",
    images: ["/images/men2.png"],
    description:
      "Classic bomber jacket with durable fabric, designed for everyday comfort and fashion.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Casual Green Jacket",
    category: "men",
    images: ["/images/men3.png"],
    description:
      "Lightweight green bomber jacket, perfect for layering over shirts and tees.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Urban Style Bomber",
    category: "men",
    images: ["/images/men4.png"],
    description:
      "Trendy bomber jacket with slim fit cut, suitable for both casual and party wear.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Full-Zip Green Jacket",
    category: "men",
    images: ["/images/men5.png"],
    description:
      "Versatile green bomber jacket with full-zip design and ribbed cuffs for a secure fit.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Streetwear Bomber Jacket",
    category: "men",
    images: ["/images/men6.png"],
    description:
      "Streetwear inspired bomber jacket crafted for comfort and a cool urban vibe.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Modern Green Jacket",
    category: "men",
    images: ["/images/men7.png"],
    description:
      "A modern take on the bomber jacket with slim fit tailoring and stylish design.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Stylish Bomber Jacket",
    category: "men",
    images: ["/images/men8.png"],
    description:
      "Stylish bomber jacket with soft lining, keeping you warm and trendy.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Slim Fit Bomber",
    category: "men",
    images: ["/images/men9.png"],
    description:
      "A slim-fit bomber jacket built for versatility and comfort during colder days.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Casual Bomber Jacket",
    category: "men",
    images: ["/images/men10.png"],
    description:
      "Casual zip-up bomber jacket suitable for layering over tees or shirts.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Outdoor Green Bomber",
    category: "men",
    images: ["/images/men11.png"],
    description:
      "Durable outdoor bomber jacket in green, made for comfort and style.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Everyday Bomber Jacket",
    category: "men",
    images: ["/images/men12.png"],
    description:
      "Everyday bomber jacket that adds style and comfort to your wardrobe.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Orange Kid's Hoodie",
    category: "kid",
    images: ["/images/kid1.png"],
    description:
      "Bright orange hooded sweatshirt with playful colorblock design for kids.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Colorblock Kid Hoodie",
    category: "kid",
    images: ["/images/kid2.png"],
    description:
      "Stylish kid’s sweatshirt with hoodie, offering both warmth and fun design.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Playful Orange Hoodie",
    category: "kid",
    images: ["/images/kid3.png"],
    description:
      "Playful hooded sweatshirt designed with colorblock patterns for an energetic look.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Casual Kid Hoodie",
    category: "kid",
    images: ["/images/kid4.png"],
    description:
      "Casual and comfortable hooded sweatshirt perfect for everyday wear for kids.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Sporty Kid Hoodie",
    category: "kid",
    images: ["/images/kid5.png"],
    description:
      "Sporty design hoodie with bold colors to make kids stand out.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Weekend Hoodie",
    category: "kid",
    images: ["/images/kid6.png"],
    description:
      "Comfortable sweatshirt with hoodie design, perfect for weekend outings.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Trendy Orange Hoodie",
    category: "kid",
    images: ["/images/kid7.png"],
    description:
      "Trendy colorblocked hoodie with breathable fabric for active kids.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Soft Cotton Hoodie",
    category: "kid",
    images: ["/images/kid8.png"],
    description:
      "Made from soft cotton fabric, this hoodie ensures comfort all day long.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Everyday Hoodie",
    category: "kid",
    images: ["/images/kid9.png"],
    description:
      "A practical and cozy hoodie that suits everyday activities and playtime.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Bright Kid Hoodie",
    category: "kid",
    images: ["/images/kid10.png"],
    description:
      "Bright and colorful hooded sweatshirt for a fun and vibrant kids’ outfit.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Fun Orange Hoodie",
    category: "kid",
    images: ["/images/kid11.png"],
    description:
      "Fun hooded sweatshirt with playful colorblocking for kids’ fashion.",
    offerPrice: 85,
    regularPrice: 120,
  },
  {
    name: "Stylish Kid Hoodie",
    category: "kid",
    images: ["/images/kid12.png"],
    description:
      "Stylish orange hoodie designed for comfort, warmth, and active kids’ lifestyle.",
    offerPrice: 85,
    regularPrice: 120,
  },
];

export default all_product;
