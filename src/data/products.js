// Mock product data for Gagneja Handloom
export const products = [
  // Bedding Products
  {
    id: 1,
    name: "Jaipuri Block Print Bedsheet",
    price: 59.99,
    code: "101",
    category: "bedding",
    fabric: "100% Cotton",
    weave: "Block Print",
    size: "90x108 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/226757_1_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/226757_5_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/226757_1_medium.jpg"
    ],
    bio: "Experience the royal heritage of Rajasthan with our exquisite Jaipuri block print bedsheet. Hand-crafted by skilled artisans using traditional techniques passed down through generations.",
    details: {
      "Thread Count": "200 TC",
      "Care Instructions": "Machine washable",
      "Pattern": "Traditional Block Print",
      "Origin": "Jaipur, Rajasthan"
    },
    reviews: [
      { name: "Sarah Johnson", rating: 5, comment: "Absolutely beautiful! The colors are vibrant and the fabric feels luxurious." },
      { name: "Michael Chen", rating: 5, comment: "Perfect quality and arrived quickly. Highly recommend!" }
    ]
  },
  {
    id: 2,
    name: "Handwoven Cotton Duvet Cover",
    price: 69.99,
    code: "102",
    category: "bedding",
    fabric: "Organic Cotton",
    weave: "Handwoven",
    size: "86x90 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/3/230713_1_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/3/230713_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/3/230713_3_medium.jpg"
    ],
    bio: "Embrace sustainable luxury with our handwoven organic cotton duvet cover. Each piece tells a story of skilled craftsmanship and environmental consciousness.",
    details: {
      "Material": "GOTS Certified Organic Cotton",
      "Weave Type": "Plain Weave",
      "Closure": "Hidden Zipper",
      "Wash Care": "Cold machine wash"
    },
    reviews: [
      { name: "Emma Wilson", rating: 5, comment: "So soft and comfortable! Love the natural feel." },
      { name: "David Park", rating: 4, comment: "Great quality, though a bit pricey. Worth it for the craftsmanship." }
    ]
  },
  {
    id: 3,
    name: "Silk Pillowcase Set",
    price: 35.99,
    code: "103",
    category: "bedding",
    fabric: "Pure Silk",
    weave: "Charmeuse",
    size: "20x30 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/203427_big.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/203427_2_big.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/203427_big.jpg"
    ],
    bio: "Indulge in the ultimate sleep experience with our pure silk pillowcase set. Naturally hypoallergenic and temperature-regulating for perfect rest.",
    details: {
      "Momme Weight": "22 Momme",
      "Closure": "Envelope Style",
      "Set Includes": "2 Pillowcases",
      "Benefits": "Anti-aging, Hair-friendly"
    },
    reviews: [
      { name: "Lisa Martinez", rating: 5, comment: "My hair has never looked better! These are amazing." }
    ]
  },
   

  // Bath Products
  {
    id: 101,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 102,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 103,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 104,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 105,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 106,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 107,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 108,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 109,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 110,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 111,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 112,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 113,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 114,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 115,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 116,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 117,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 118,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 119,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 120,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 121,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 122,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 123,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 124,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 125,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 126,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 127,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 128,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 129,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 130,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 131,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 132,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 133,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 134,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 135,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 136,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 137,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 138,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 139,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 140,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 141,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 142,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 143,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 144,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 145,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 146,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 147,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 148,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },
  {
    id: 149,
    name: "Hand Woven Bath Towel",
    price: 24.99,
    code: "201",
    category: "bath",
    fabric: "Turkish Cotton",
    weave: "Terry",
    size: "30x60 inches",
    images: [
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Bath+Towel",
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Towel+Texture"
    ],
    bio: "Wrap yourself in luxury with our hand-woven Turkish cotton bath towel. Exceptionally absorbent and incredibly soft, perfect for your daily ritual.",
    details: {
      "Weight": "600 GSM",
      "Absorption": "Quick-dry technology",
      "Durability": "Long-lasting fibers",
      "Origin": "Turkey"
    },
    reviews: [
      { name: "James Thompson", rating: 5, comment: "Best towel I've ever owned. So fluffy and absorbent!" },
      { name: "Rachel Green", rating: 5, comment: "Beautiful quality and the perfect size." }
    ]
  },
  {
    id: 150,
    name: "Organic Bamboo Washcloth Set",
    price: 18.99,
    code: "202",
    category: "bath",
    fabric: "Bamboo Fiber",
    weave: "Loop Terry",
    size: "12x12 inches",
    images: [
      "https://placehold.co/500x500/A87C7C/F1EEE9?text=Bamboo+Washcloth",
      "https://placehold.co/500x500/8D7B68/D3C5BC?text=Eco+Friendly"
    ],
    bio: "Discover the gentle power of bamboo with our organic washcloth set. Naturally antimicrobial and incredibly soft on sensitive skin.",
    details: {
      "Set Size": "6 Washcloths",
      "Properties": "Antimicrobial, Hypoallergenic",
      "Sustainability": "Eco-friendly bamboo",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Ana Rodriguez", rating: 5, comment: "Perfect for sensitive skin. Love that they're eco-friendly!" }
    ]
  },
  {
    id: 151,
    name: "Linen Bath Mat",
    price: 34.99,
    code: "203",
    category: "bath",
    fabric: "Pure Linen",
    weave: "Plain Weave",
    size: "20x32 inches",
    images: [
      "https://placehold.co/500x500/F1EEE9/A87C7C?text=Linen+Bath+Mat",
      "https://placehold.co/500x500/D3C5BC/8D7B68?text=Natural+Texture"
    ],
    bio: "Step onto pure luxury with our handwoven linen bath mat. Quick-drying and naturally resistant to bacteria and mold.",
    details: {
      "Material": "European Flax Linen",
      "Non-slip": "Natural rubber backing",
      "Maintenance": "Easy care",
      "Style": "Minimalist design"
    },
    reviews: [
      { name: "Mark Johnson", rating: 4, comment: "Beautiful and functional. Love the natural look!" }
    ]
  },

  // Living Products
  {
    id: 201,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 202,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 203,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 204,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 205,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 206,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 207,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 208,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 209,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 210,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 211,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 212,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 213,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 214,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 215,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 216,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 217,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 218,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 219,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 220,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 221,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 222,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 223,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 224,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 225,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 226,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 227,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 228,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 229,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 230,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 231,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 232,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 233,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 234,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 235,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 236,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 237,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 238,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 239,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 240,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 241,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 242,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 243,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 244,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 245,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 246,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 247,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 248,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 249,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 250,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 251,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 252,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 253,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 254,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 255,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 256,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
  {
    id: 257,
    name: "Handwoven Throw Blanket",
    price: 67.99,
    code: "301",
    category: "living",
    fabric: "Wool Blend",
    weave: "Herringbone",
    size: "50x70 inches",
    images: [
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_2_medium.jpg",
      "https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/2/220329_4_medium.jpg"
    ],
    bio: "Transform your living space with our handwoven throw blanket. Perfect for cozy evenings and adding a touch of artisan elegance to your home.",
    details: {
      "Composition": "70% Wool, 30% Cotton",
      "Weight": "Medium weight",
      "Seasonality": "All-season comfort",
      "Care": "Dry clean recommended"
    },
    reviews: [
      { name: "Sophie Clark", rating: 5, comment: "So cozy and beautiful! Perfect for movie nights." },
      { name: "Tom Wilson", rating: 5, comment: "Excellent quality and the pattern is gorgeous." }
    ]
  },
  {
    id: 258,
    name: "Jute Floor Rug",
    price: 89.99,
    code: "302",
    category: "living",
    fabric: "Natural Jute",
    weave: "Braided",
    size: "5x7 feet",
    images: [
      "https://m.media-amazon.com/images/I/81Q6oVI5fPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/917VXCI2Y1L._AC_SL1500_.jpg"
    ],
    bio: "Ground your space with our handwoven jute floor rug. Durable, sustainable, and naturally beautiful with its earthy texture.",
    details: {
      "Material": "100% Natural Jute",
      "Construction": "Hand-braided",
      "Durability": "High-traffic areas",
      "Eco-friendly": "Biodegradable fibers"
    },
    reviews: [
      { name: "Linda Davis", rating: 4, comment: "Perfect for our living room. Very durable and looks great!" }
    ]
  },
  {
    id: 259,
    name: "Cotton Cushion Cover Set",
    price: 29.99,
    code: "303",
    category: "living",
    fabric: "Cotton Canvas",
    weave: "Plain Weave",
    size: "18x18 inches",
    images: [
      "https://i.etsystatic.com/18332985/r/il/5e13e5/3093720240/il_1588xN.3093720240_nhbu.jpg",
      "https://tse1.explicit.bing.net/th/id/OIP.PzE2G0BI9rq8STJba9y8UgHaHX?w=806&h=802&rs=1&pid=ImgDetMain&o=7&rm=3"
    ],
    bio: "Refresh your living space with our cotton cushion cover set. Featuring traditional patterns and modern comfort.",
    details: {
      "Set Size": "4 Cushion Covers",
      "Closure": "Hidden zipper",
      "Pattern": "Traditional motifs",
      "Care": "Machine washable"
    },
    reviews: [
      { name: "Michelle Brown", rating: 5, comment: "Beautiful patterns and great quality. Perfect for my sofa!" }
    ]
  },
  {
    id: 260,
    name: "Handwoven Table Runner",
    price: 39.99,
    code: "304",
    category: "living",
    fabric: "Linen Cotton",
    weave: "Twill",
    size: "16x72 inches",
    images: [
      "/sofacover.jpg",
      "https://m.media-amazon.com/images/I/71ks1ifq+OL._SL1018_.jpg"
    ],
    bio: "Elevate your dining experience with our handwoven table runner. A perfect blend of functionality and artistic craftsmanship.",
    details: {
      "Material": "55% Linen, 45% Cotton",
      "Style": "Contemporary classic",
      "Occasions": "Everyday to formal",
      "Maintenance": "Easy care"
    },
    reviews: [
      { name: "Robert Taylor", rating: 5, comment: "Exactly what I was looking for. Beautiful craftsmanship!" }
    ]
  },
];

export const categories = [
  {
    id: 'bedding',
    name: 'Bedding',
    description: 'Luxurious bedding crafted with traditional techniques',
    image: 'https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/b/e/bedding-combo_1920x1080-pix.jpg',
    products: products.filter(p => p.category === 'bedding')
  },
  {
    id: 'bath',
    name: 'Bath',
    description: 'Premium bath essentials for your daily rituals',
    image: 'https://cdn.ddecor.com/media/catalog/product/cache/5a8a2eba4362c3d73e0ba7a3dc93bcc7/1/4/148170_162322_1_PicarioBig.jpg',
    products: products.filter(p => p.category === 'bath')
  },
  {
    id: 'living',
    name: 'Living',
    description: 'Transform your living space with artisan pieces',
    image: 'https://www.decasacollections.com/wp-content/uploads/2023/07/modern-living-room-interior-design-illustration-ai-generativexd.jpg',
    products: products.filter(p => p.category === 'living')
  }
];

export const heroSlides = [
  {
    id: 1,
    image: 'https://cdn.ddecor.com/media/mageplaza/bannerslider/banner/image/k/i/kilim_1920x1080-pix.jpg',
    title: 'Sustainable Luxury',
    subtitle: 'Eco-friendly materials, ethically crafted',
    cta: 'Learn More'
  },
  {
    id: 2,
    image: 'https://homelabstore.co.nz/cdn/shop/files/DSC04565rt_ab5e3ea1-2d41-492d-83c0-0b1200395ba7.jpg?v=1731537008',
    title: 'Heritage Meets Modern Living',
    subtitle: 'Traditional techniques, contemporary designs',
    cta: 'Explore Collection'
  },
  {
    id: 3,
    image: 'https://cdn.ddecor.com/media/wysiwyg/bannerslider/desktop/5_Towel.jpg',
    title: 'Woven with Passion, Crafted for You',
    subtitle: 'Discover the timeless beauty of handloom textiles',
    cta: 'Shop Now'
  }
];