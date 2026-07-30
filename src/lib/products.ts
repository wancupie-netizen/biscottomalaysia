export type Variant = { label: string; price: number };
export type Category = "Desserts" | "Cakes" | "Mini Dessert" | "Event Cakes" | "Cookies" | "Goodies";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: Category;
  variants: Variant[];
  bestseller?: boolean;
  customQuote?: boolean;
};

export const products: Product[] = [
  // BESTSELLERS
  {
    id: "choux",
    name: "Choux",
    description: "Crispy on the outside, soft and creamy inside. Perfect for sharing.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289227/4.Choux.webp",
    category: "Mini Dessert",
    bestseller: true,
    variants: [
      { label: "4 pcs", price: 12 },
      { label: "6 pcs", price: 18 },
      { label: "10 pcs", price: 29 },
      { label: "16 pcs", price: 45 },
      { label: "20 pcs", price: 55 },
    ],
  },
  {
    id: "tiramisu",
    name: "Tiramisu",
    description: "Classic, smooth and rich with premium coffee flavour.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289207/1._Tiramisu_tub.webp",
    category: "Desserts",
    bestseller: true,
    variants: [
      { label: "1 tub", price: 18 },
    ],
  },
  {
    id: "brownies-8",
    name: "Brownies 8 inch",
    description: "Fudgy, gooey, with rich chocolate — a crowd favourite.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289206/3._Brownies_8_inch.webp",
    category: "Cakes",
    bestseller: true,
    variants: [
      { label: "Chocolate Brownies", price: 40 },
      { label: "Walnut Brownies", price: 45 },
      { label: "Cheesecake Brownies", price: 55 },
    ],
  },
  {
    id: "original-creampuff",
    name: "Original Creampuff",
    description: "Classic creampuff with a smooth vanilla custard filling.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289220/30.Original_Creampuff.webp",
    category: "Mini Dessert",
    bestseller: true,
    variants: [
      { label: "25 pcs", price: 35 },
      { label: "50 pcs", price: 65 },
    ],
  },

  // DESSERTS
  {
    id: "strawberry-pudding",
    name: "Strawberry Pudding",
    description: "Fresh pudding layered with sweet strawberry.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289213/5.strawberry_pudding.webp",
    category: "Desserts",
    variants: [
      { label: "1 tub", price: 18 },
    ],
  },
  {
    id: "banana-pudding",
    name: "Banana Pudding",
    description: "Smooth pudding with a comforting banana flavour.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289216/6.Banana_Pudding.webp",
    category: "Desserts",
    variants: [
      { label: "1 tub", price: 15 },
    ],
  },
  {
    id: "brownies-4x8",
    name: "Brownies (4x8 inch)",
    description: "Rich brownies in a 4x8 inch size, perfect for 2-4 people.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289215/7.Brownies_4_x_8_inch.webp",
    category: "Desserts",
    variants: [
      { label: "Chocolate Brownies", price: 21 },
      { label: "Walnut Brownies", price: 23 },
      { label: "Cheesecake Brownies", price: 28 },
    ],
  },
  {
    id: "tiramisu-tin-tub",
    name: "Tiramisu Tin Tub",
    description: "Tiramisu served in a tin, perfect for gatherings.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289216/8._Tiramisu_Tin_Tub.webp",
    category: "Desserts",
    variants: [
      { label: "1 tub", price: 50 },
    ],
  },
  {
    id: "moist-chocolate-cake-slice",
    name: "Moist Chocolate Cake Slice",
    description: "Moist, rich chocolate cake slice.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289218/9._Moist_Chocolate_Cake_Slice.webp",
    category: "Desserts",
    variants: [
      { label: "1 slice", price: 25 },
    ],
  },
  {
    id: "quesillo",
    name: "Quesillo",
    description: "Classic caramel pudding with a smooth texture.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289218/10._Quesillo.webp",
    category: "Desserts",
    variants: [
      { label: "Per Slice", price: 10 },
      { label: "6 inch", price: 50 },
      { label: "9 inch", price: 80 },
    ],
  },
  {
    id: "carrot-cake-tub",
    name: "Carrot Cake Tub",
    description: "Carrot cake in a tub, packed with walnuts and frosting.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289221/11._carrot_cake_tub.webp",
    category: "Desserts",
    variants: [
      { label: "1 tub", price: 19 },
    ],
  },
  {
    id: "caramel-pudding",
    name: "Caramel Pudding",
    description: "Smooth, rich caramel pudding.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/q_auto/f_auto/v1781289212/2._Caramel_pudding.webp",
    category: "Desserts",
    variants: [
      { label: "6 inch", price: 25 },
      { label: "9 inch", price: 55 },
    ],
  },

  // CAKES
  {
    id: "cheesecake-brownies-8x8",
    name: "Cheesecake Brownies 8x8 inch",
    description: "Kombinasi cheesecake & brownies dalam saiz 8x8 inch.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289219/12._Cheesecake_Brownies.webp",
    category: "Cakes",
    variants: [
      { label: "1 tray", price: 55 },
    ],
  },
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    description: "Classic carrot cake with cream cheese frosting.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289221/13._Carrot_Cake.webp",
    category: "Cakes",
    variants: [
      { label: "6 inch (RM100 - RM120)", price: 100 },
      { label: "9 inch", price: 150 },
    ],
  },
  {
    id: "tiramisu-cake",
    name: "Tiramisu Cake",
    description: "Layered tiramisu cake for special occasions.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289219/14._Tiramisu_Cake.webp",
    category: "Cakes",
    variants: [
      { label: "6 inch", price: 75 },
      { label: "8 inch", price: 120 },
      { label: "10 inch", price: 180 },
      { label: "12 inch", price: 240 },
      { label: "14 inch", price: 320 },
      { label: "16 inch", price: 400 },
    ],
  },
  {
    id: "moist-chocolate-cake",
    name: "Moist Chocolate Cake",
    description: "Moist, rich and creamy chocolate cake.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289206/15.Moist_Chocolate_Cake.webp",
    category: "Cakes",
    variants: [
      { label: "4 inch (RM45 - RM70)", price: 45 },
      { label: "6 inch (RM80 - RM150)", price: 80 },
      { label: "8 inch (RM150 - RM200)", price: 150 },
    ],
  },
  {
    id: "pavlova",
    name: "Pavlova",
    description: "Fluffy pavlova with fresh fruits and cream.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289206/16.Pavlova.webp",
    category: "Cakes",
    variants: [
      { label: "6 inch", price: 85 },
      { label: "8 inch", price: 105 },
    ],
  },
  {
    id: "burnt-cheesecake",
    name: "Burnt Cheesecake",
    description: "Baked cheesecake with a caramelised top.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289206/17.Burnt_Cheesecake.webp",
    category: "Cakes",
    variants: [
      { label: "6 inch", price: 75 },
      { label: "7 inch", price: 110 },
      { label: "9 inch", price: 160 },
    ],
  },
  {
    id: "feuilletine-dream-cakes",
    name: "Feuilletine Dream Cakes",
    description: "Luxurious cake with crispy feuilletine layers.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289207/18.Feuilletine_Dream_Cakes.webp",
    category: "Cakes",
    variants: [
      { label: "1 pc", price: 25 },
    ],
  },
  {
    id: "pavlova-4",
    name: "Pavlova 4 inch",
    description: "Fluffy mini pavlova, perfect for one.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289207/19.Pavlova_4_inch.webp",
    category: "Cakes",
    variants: [
      { label: "1 pc", price: 15 },
    ],
  },

  // MINI DESSERT
  {
    id: "mini-tiramisu",
    name: "Mini Tiramisu",
    description: "Mini tiramisu, minimum 30 pcs. Perfect for group servings.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289209/22.Mini_Tiramisu.webp",
    category: "Mini Dessert",
    variants: [
      { label: "RM4 per pcs", price: 4 },
    ],
  },
  {
    id: "mini-strawberry-pudding",
    name: "Mini Strawberry Pudding",
    description: "Cute and delicious mini strawberry puddings. Minimum 30 pcs.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289216/23.Mini_Strawberry_Pudding.webp",
    category: "Mini Dessert",
    variants: [
      { label: "RM4 per pcs", price: 4 },
    ],
  },
  {
    id: "mini-banana-pudding",
    name: "Mini Banana Pudding",
    description: "Smooth and creamy mini banana puddings. Minimum 25 pcs.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289220/32.Mini_Banana_Pudding.webp",
    category: "Mini Dessert",
    variants: [
      { label: "RM3.50 per pcs", price: 3.5 },
    ],
  },
  {
    id: "mini-fruit-pudding",
    name: "Mini Fruit Pudding",
    description: "Mini fruit puddings in Mango, Kiwi, Strawberry & Blueberry flavours. Minimum 25 pcs.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289214/24.Mini_Fruit_Pudding.webp",
    category: "Mini Dessert",
    variants: [
      { label: "RM3.50 per pcs", price: 3.5 },
    ],
  },
  {
    id: "mini-tutty-fruity-pudding",
    name: "Mini Tutty Fruity Pudding",
    description: "Mini fruity puddings with a mix of fruits. Minimum 25 pcs.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289217/25.Mini_Tutty_Fruity_Pudding.webp",
    category: "Mini Dessert",
    variants: [
      { label: "RM2.50 per pcs", price: 2.5 },
    ],
  },
  {
    id: "mini-pudding-caramel",
    name: "Mini Pudding Caramel",
    description: "Smooth mini caramel puddings. Minimum 25 pcs.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289217/26.Mini_Pudding_Caramel.webp",
    category: "Mini Dessert",
    variants: [
      { label: "RM2.50 per pcs", price: 2.5 },
    ],
  },
  {
    id: "pudding-caramel-cup",
    name: "Pudding Caramel Cup",
    description: "Caramel pudding served in cups. Minimum 7 pcs.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289217/27.Pudding_Caramel_Cup.webp",
    category: "Mini Dessert",
    variants: [
      { label: "7-20 pcs (RM5/cup)", price: 5 },
      { label: "Above 20 pcs (RM4/cup)", price: 4 },
    ],
  },
  {
    id: "mini-bite-pavlova",
    name: "Mini Bite Pavlova",
    description: "Pavlova mini sebesar gigitan, lazat & gebu.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289218/28.Mini_Bite_Pavlova.webp",
    category: "Mini Dessert",
    variants: [
      { label: "30 pcs", price: 65 },
      { label: "50 pcs", price: 95 },
    ],
  },
  {
    id: "mini-choux",
    name: "Mini Choux",
    description: "Crispy mini choux with a cream filling.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289219/29.Mini_Choux.webp",
    category: "Mini Dessert",
    variants: [
      { label: "6 pcs", price: 14 },
      { label: "12 pcs", price: 26 },
      { label: "25 pcs", price: 50 },
    ],
  },
  {
    id: "mini-soft-cookies",
    name: "Mini Soft Cookies",
    description: "Mini soft cookies, fresh from the oven.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289220/31.Mini_Soft_Cookies.webp",
    category: "Mini Dessert",
    variants: [
      { label: "Combo 30 pcs", price: 70 },
    ],
  },

  // EVENT CAKES (Custom Quote)
  {
    id: "wedding-cake",
    name: "Brownies Tower",
    description: "Custom design for your special wedding day.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781508813/46.Brownies_Tower.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "birthday-cake",
    name: "Birthday Cake",
    description: "Custom design for a sweet birthday celebration.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289220/33.Birthday_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "engagement-cake",
    name: "Engagement Cake",
    description: "Custom design for your engagement celebration.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289221/34.Engagement_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "baby-friendly-cake",
    name: "Baby Friendly Cake",
    description: "Custom-designed cake perfect for babies and children.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289221/35.Baby_Friendly_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "flower-bouquet-cake",
    name: "Flower Bouquet Cake",
    description: "Unique custom-designed cake shaped like a flower bouquet.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289222/36.Flower_Bouquet_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "bento-petite-cake",
    name: "Bento / Petite Cake",
    description: "Cute and special custom-designed mini cake.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289221/37.BentoPetite_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "anniversary-cake",
    name: "Anniversary Cake",
    description: "Custom design for wedding anniversary celebrations.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289223/38.Anniversary_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "cupcake",
    name: "Cupcake",
    description: "Custom-designed cupcakes for all kinds of occasions.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781289222/39.Cupcake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "Custom Quote", price: 0 },
    ],
  },
  {
    id: "tiramisu-tower",
    name: "Tiramisu Tower",
    description: "Elegant multi-glass tiramisu tower suitable for weddings, engagements, and special events.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781508814/40.Tiramisu_Tower.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "20 Glasses", price: 0 },
      { label: "24 Glasses", price: 0 },
      { label: "30 Glasses", price: 0 },
    ],
  },
  {
    id: "tiramisu-glass-bowl",
    name: "Tiramisu Glass Bowl",
    description: "Large sharing tiramisu presentation served in decorative glass bowls for events and celebrations.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781508813/41.Tiramisu_Glass_Bowl.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "M", price: 0 },
      { label: "L", price: 0 },
      { label: "XL", price: 0 },
      { label: "XXL", price: 0 },
    ],
  },
  {
    id: "tiramisu-wedding-cake",
    name: "Tiramisu Wedding Cake",
    description: "Premium wedding tiramisu cake customized for wedding celebrations and special occasions.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781508813/42.Tiramisu_Wedding_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "8 inch", price: 0 },
      { label: "10 inch", price: 0 },
      { label: "12 inch", price: 0 },
      { label: "14 inch", price: 0 },
      { label: "16 inch", price: 0 },
    ],
  },
  {
    id: "italian-wedding-cake",
    name: "Italian Wedding Cake",
    description: "Traditional Italian-style wedding cake customized according to event requirements.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781508813/43.Italian_Wedding_Cake.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "8 inch", price: 0 },
      { label: "10 inch", price: 0 },
      { label: "12 inch", price: 0 },
    ],
  },
  {
    id: "wedding-cake-tiered",
    name: "Wedding Cake",
    description: "Custom-designed wedding cake available in multiple tiers and decoration styles.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781508813/44.Wedding_Cake_2.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "1 Tier", price: 0 },
      { label: "2 Tier", price: 0 },
      { label: "3 Tier", price: 0 },
    ],
  },
  {
    id: "tiramisu-banana-pudding-live-scoop",
    name: "Tiramisu & Banana Pudding Live Scoop Wedding Vendor",
    description: "Live dessert station serving freshly scooped Tiramisu and Banana Pudding during weddings, corporate events, and special celebrations.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1781508813/45.Tiramisu_Banana_Pudding_Live_Scoop_Wedding_Vendor.webp",
    category: "Event Cakes",
    customQuote: true,
    variants: [
      { label: "100 Pax", price: 0 },
      { label: "150 Pax", price: 0 },
      { label: "200 Pax", price: 0 },
      { label: "300 Pax", price: 0 },
    ],
  },

  // COOKIES
  {
    id: "soft-cookies",
    name: "Soft Cookies",
    description: "Freshly baked soft cookies in a variety of indulgent flavours.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783009386/47.Soft_Cookies.webp",
    category: "Cookies",
    variants: [
      { label: "Choco Chip", price: 4.5 },
      { label: "Double Choco", price: 5.5 },
      { label: "Walnut Choco", price: 5.5 },
      { label: "Red Velvet Butterscotch", price: 5.5 },
      { label: "Teddy S'more", price: 5.5 },
      { label: "White Chocolate Matcha", price: 5.5 },
      { label: "Triple Choco S'more", price: 6 },
      { label: "Pistachio White Chocolate", price: 6.5 },
      { label: "Lemon Poppy Seed", price: 5.5 },
      { label: "Choco Twist S'more", price: 6 },
      { label: "Mint Blackout", price: 6 },
      { label: "Kunafa Pistachio", price: 7.5 },
    ],
  },
  {
    id: "sea-salt-cookies",
    name: "Sea Salt Cookies",
    description: "Buttery cookies with a delicate touch of sea salt.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783012349/53.sea_salt_cookies.webp",
    category: "Cookies",
    variants: [
      { label: "200g", price: 19.9 },
      { label: "400g", price: 38.9 },
    ],
  },
  {
    id: "crunchy-cookies",
    name: "Crunchy Cookies",
    description: "Crunchy cookies available in Choco Chip, Blackout Almond and Pistachio Choco.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783012350/54.crunchy_cookies.webp",
    category: "Cookies",
    variants: [
      { label: "Choco Chip 250g", price: 18.5 },
      { label: "Choco Chip 500g", price: 29.9 },
      { label: "Blackout Almond 250g", price: 21.5 },
      { label: "Blackout Almond 500g", price: 33.9 },
      { label: "Pistachio Choco 250g", price: 22.5 },
      { label: "Pistachio Choco 500g", price: 34.9 },
    ],
  },



  // GOODIES
  {
    id: "cookies-door-gift",
    name: "Cookies Door Gift",
    description: "Airtight premium container keeps cookies fresh, crunchy & delicious. Custom thank you sticker personalised with your wedding theme.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783009386/51.Cookies_Door_Gift.webp",
    category: "Goodies",
    customQuote: true,
    variants: [
      { label: "Request Quotation", price: 0 },
    ],
  },
  {
    id: "callebaut-sea-salt-cookies",
    name: "Callebaut Sea Salt Cookies",
    description: "Airtight premium container keeps cookies fresh, crunchy & delicious. Custom thank you sticker personalised with your wedding theme. Approximately 6-7 pcs per jar.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783009386/50.Callebaut_Sea_Salt_Cookies.webp",
    category: "Goodies",
    customQuote: true,
    variants: [
      { label: "Request Quotation", price: 0 },
    ],
  },
  {
    id: "mini-soft-cookies-goodies",
    name: "Mini Soft Cookies",
    description: "Delicious mini soft cookies, specially made for your precious moments. Made with quality ingredients and lots of love.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783009387/52.Mini_Soft_Cookies.webp",
    category: "Goodies",
    customQuote: true,
    variants: [
      { label: "Request Quotation", price: 0 },
    ],
  },
  {
    id: "brownie-bites",
    name: "Brownie Bites",
    description: "Premium brownie bites in three irresistible flavours. Perfectly packed for your precious moments.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783009386/48.Brownie_Bites.webp",
    category: "Goodies",
    customQuote: true,
    variants: [
      { label: "Request Quotation", price: 0 },
    ],
  },
  {
    id: "cake-collection",
    name: "Cake Collection",
    description: "Made with quality ingredients. Baked to perfection, always fresh and delicious. Suitable for all your special moments.",
    image: "https://res.cloudinary.com/drder1b6v/image/upload/v1783009386/49.Cake_Collection.webp",
    category: "Goodies",
    customQuote: true,
    variants: [
      { label: "Request Quotation", price: 0 },
    ],
  },
];

export const categories: Category[] = ["Desserts", "Cakes", "Mini Dessert", "Event Cakes", "Cookies", "Goodies"];

export const WHATSAPP_NUMBER = "60175587450";

export function formatRM(n: number) {
  return `RM${n.toFixed(2)}`;
}
