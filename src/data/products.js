// Mock product data for Gagneja Handloom
export const products = [
  // Bedding Products
  {
    id: 1,
    name: "4 pc Comforter Set",
    price: "899",
    code: "101",
    category: "bedding",
    fabric: "Semi Cotton",
    images: [
      "/bedding1.jpg",
      "/bedding2.jpg",
      "/bedding3.jpg",
      "/bedding4.jpg",
      "/bedding5.jpg"
    ],
    details: {
      "fabric": "Semi Cotton",
      "color": "Grey White",
      "size": "90x100 inches",
      "Pattern": "Traditional Block Print"
    }
  },
  {
    id: 2,
    name: "Comforter Set",
    price: "699",
    code: "102",
    category: "bedding",
    fabric: "Semi Cotton",
    images: [
      "/bedding1.jpg",
      "/bedding2.jpg",
      "/bedding3.jpg",
      "/bedding4.jpg",
      "/bedding5.jpg"
    ],
    details: {
      "fabric": "Semi Cotton",
      "color": "multi colors",
      "size": "90x100 inches",
      "Pattern": "Geometric"
    }
  },

  {
    id: 2,
    name: "Comforter Set",
    price: "699",
    code: "102",
    category: "bedding",
    fabric: "Semi Cotton",
    images: [
      "/bedding8.jpg",
      "/bedding2.jpg",
      "/bedding3.jpg",
      "/bedding4.jpg",
      "/bedding5.jpg"
    ],
    details: {
      "fabric": "Semi Cotton",
      "color": "multi colors",
      "size": "90x100 inches",
      "Pattern": "Geometric"
      }
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