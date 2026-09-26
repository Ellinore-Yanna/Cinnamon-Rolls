// ============================================================
//  BAKES BY EL — site settings
//  This is the one file to edit each week (flavors, photos, etc.)
// ============================================================

window.BAKERY = {
  name: 'Bakes by El',
  venmoUser: 'ellinelson1',
  textNumber: '(701) 306-9643',
  deliveryArea: 'Anywhere within 20 miles of West Fargo, ND',

  // Paste your Google Apps Script web app URL here (see README.md, step 2).
  // Until this is filled in, orders and email sign-ups are NOT saved anywhere.
  ordersEndpoint: 'https://script.google.com/macros/s/AKfycbx7wNVD76zUBSj5yjUNsbxeYFRFK_UwbxSK3aD13-MtDY7uitcHqxhyOpvZcsyY8hbs/exec',

  // Ordering window, in Central Time. Opens Sunday 12:00 AM,
  // closes Thursday at 8 PM. Delivery is the Saturday after.
  timeZone: 'America/Chicago',
  closeDay: 4,      // 0 = Sunday ... 4 = Thursday
  closeHour: 20,    // 24-hour clock, 20 = 8 PM

  // This week's flavors. The first one should stay the Original.
  // price: 3 for the Original, 4 for gourmet flavors.
  flavors: [
    {
      id: 'original',
      name: 'Original Cinnamon Roll',
      price: 3,
      gourmet: false,
      desc: 'Soft dough, brown-sugar cinnamon filling, cream cheese icing.',
      ingredients: 'Flour, butter, brown sugar, cinnamon, milk, eggs, powdered sugar, cream cheese, vanilla',
      allergens: 'Wheat, milk, eggs',
      img: 'images/original.webp'
    },
    {
      id: 'apple-streusel',
      name: 'Apple Cinnamon with Streusel',
      price: 4,
      gourmet: true,
      desc: 'Our original roll with warm cinnamon apples and a crumbly streusel topping.',
      ingredients: 'Everything in the original, plus apples and cornstarch',
      allergens: 'Wheat, milk, eggs',
      img: 'images/apple-streusel.webp'
    },
    {
      id: 'cookies-and-cream',
      name: 'Cookies and Cream',
      price: 4,
      gourmet: true,
      desc: 'Our original roll loaded with crushed Oreo cookies.',
      ingredients: 'Everything in the original, plus Oreo cookies',
      allergens: 'Wheat, milk, eggs, soy',
      img: 'images/cookies-and-cream.webp'
    }
  ],

  // "Past & future flavors" section on the homepage.
  pastAndFuture: [
    { name: 'Peach Cobbler', img: 'images/peach-cobbler.webp' },
    { name: 'Pumpkin', img: 'images/pumpkin.webp' },
    { name: 'Banana Bread', img: 'images/banana-bread.webp' },
    { name: 'Tiramisu', img: 'images/tiramisu.webp' }
  ]
};
