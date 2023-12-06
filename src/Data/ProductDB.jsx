export const ProductDB = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/menu") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              menu: [
                {
                  id: 1,
                  title: "Neck T-Shirt",
                  price: 375,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686035087/-473Wx593H-464958006-aqua-MODEL_a1lzgw.jpg",
                  reting: 3.5,
                  is_off: 75,
                  size: "L",
                  cancel_price: 1499,
                  category: "men",
                  description:"Fastdry + anticstatic Regular Fit Package contains: 1 t-shirt Machine wash cold100% polyester"
                },
                {
                  id: 2,
                  title: "Long Kurta",
                  price: 1649,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686035691/-473Wx593H-466039133-green-MODEL_q89nyo.jpg",
                  reting: 2,
                  is_off: 66,
                  size: "XL",
                  cancel_price: 2499,
                  category: "men",
                  description:"Regular Fit Package contains:1 kurta Machine wash 100% cotton."
                },
                {
                  id: 3,
                  title: "Polo T-Shirt.",
                  price: 1499,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686050778/-473Wx593H-463794087-black-MODEL_t131l5.jpg",
                  reting: 3.9,
                  is_off: 40,
                  size: "M",
                  cancel_price: 2499,
                  category: "men",
                  description:"Fastdry + anticstatic Regular Fit Package contains: 1 t-shirt Machine wash cold100% polyester"
                },
                {
                  id: 4,
                  title: "The Hollander",
                  price: 714,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686051115/-473Wx593H-466217921-white-MODEL_uk9hyr.jpg",
                  reting: 1.7,
                  is_off: 55,
                  size: "L",
                  cancel_price: 1299,
                  category: "men",
                  description:"Fastdry + anticstatic Regular Fit Package contains: 1 t-shirt Machine wash cold100% polyester"
                },
                {
                  id: 5,
                  title: "The Bear House",
                  price: 599,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686051507/-473Wx593H-464175602-grey-MODEL_rqldcb.jpg",
                  reting: 1,
                  is_off: 76,
                  size: "XXL",
                  cancel_price: 2499,
                  category: "men",
                  description:"Regular Fit Package contains: 1 shirt Machine wash Cotton"
                },
                {
                  id: 6,
                  title: "Netplay",
                  price: 714,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686051955/-473Wx593H-462323964-green-MODEL_hrhhcb.jpg",
                  reting: 3.8,
                  is_off: 35,
                  size: "XL",
                  cancel_price: 1099,
                  category: "men",
                  description:"Regular Fit Package contains: 1 shirt Machine wash Cotton"
                },
                {
                  id: 7,
                  title: "Snitch",
                  price: 635,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686052098/-473Wx593H-465668288-white-MODEL_ksjwsi.jpg",
                  reting: 2.0,
                  is_off: 60,
                  size: "L",
                  cancel_price: 1598,
                  category: "men",
                  description:"Regular Fit Package contains: 1 shirt Machine wash Cotton"
                },
                {
                  id: 8,
                  title: "Snitch",
                  price: 719,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686052231/-473Wx593H-464817841-green-MODEL_cosgrr.jpg",
                  reting: 4.0,
                  is_off: 60,
                  size: "XXL",
                  cancel_price: 1799,
                  category: "men",
                  desctiption:"Regular Fit Package contains: 1 shirt Machine wash Cotton"
                },
                {
                  id: 9,
                  title: "Flare Dress",
                  price: 1378,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686052461/-473Wx593H-464611023-yellow-MODEL_mnwkf6.jpg",
                  reting: 3.9,
                  is_off: 34,
                  size: "M",
                  cancel_price: 2089,
                  category: "women",
                  description:" We recommend you buy a size larger 1:Dress Machine wash Polyester"
                },
                {
                  id: 10,
                  title: "Straight Kurta",
                  price: 1079,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686052610/-473Wx593H-464080291-green-MODEL_oqlaau.jpg",
                  reting: 2.4,
                  is_off: 64,
                  size: "M",
                  cancel_price: 2999,
                  category: "women",
                  description:"Bottomwear fabric: Rayon Dupatta length: 2.25 m Dupatta fabric: Chiffon Package contains: 1 kurta, 1 pants, 1 dupattaKurta, Bottomwear & DupattaMachine wash100% rayon"
                },
                {
                  id: 11,
                  title: "Flare Dress",
                  price: 979,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686052733/-473Wx593H-464889829-green-MODEL_oc7zid.jpg",
                  reting: 4.3,
                  is_off: 65,
                  size: "S",
                  cancel_price: 2799,
                  category: "women",
                  description:" We recommend you buy a size larger 1:Dress Machine wash Polyester"
                },
                {
                  id: 12,
                  title: "Straight Kurta",
                  price: 457,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686066566/-473Wx593H-461710320-black-MODEL2_xhks9i.jpg",
                  reting: 3.7,
                  is_off: 66,
                  size: "XXL",
                  cancel_price: 1579,
                  category: "women",
                  description:"Bottomwear fabric: Rayon Dupatta length: 2.25 m Dupatta fabric: Chiffon Package contains: 1 kurta, 1 pants, 1 dupattaKurta, Bottomwear & DupattaMachine wash100% rayon"
                },
                {
                  id: 13,
                  title: " Kaftan Kurta",
                  price: 1119,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686053258/-473Wx593H-410334372-green-MODEL_zpdshh.jpg",
                  reting: 1.9,
                  is_off: 40,
                  size: "XL",
                  cancel_price: 2799,
                  category: "women",
                  description:"Package contains: 1 dress Rayon"
                },
                {
                  id: 14,
                  title: "Flare Dress",
                  price: 1903,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686053373/-473Wx593H-410334341-multi-MODEL_g0mynr.jpg",
                  reting: 4.0,
                  is_off: 32,
                  size: "M",
                  cancel_price: 2799,
                  category: "women",
                  description:"Package contains: 1 dress Rayon"

                },
                {
                  id: 15,
                  title: "Kurta Suit Set",
                  price: 3839,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686053505/-473Wx593H-410334356-blue-MODEL_t8l3vn.jpg",
                  reting: 4.5,
                  is_off: 20,
                  size: "XXL",
                  cancel_price: 4799,
                  category: "women",
                  description:"Bottomwear fabric: Rayon Dupatta length: 2.25 m Dupatta fabric: Chiffon Package contains: 1 kurta, 1 pants, 1 dupattaKurta, Bottomwear & DupattaMachine wash100% rayon"
                },
                {
                  id: 16,
                  title: "Kaftan Dress",
                  price: 3600,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686053638/-473Wx593H-410334391-blue-MODEL_gaghdy.jpg",
                  reting: 3.7,
                  is_off: 10,
                  size: "M",
                  cancel_price: 4000,
                  category: "women",
                  description:" We recommend you buy a size larger 1:Dress Machine wash Polyester"
                },
                {
                  id: 17,
                  title: "Flared Kurta",
                  price: 704,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686052903/-473Wx593H-464087877-blue-MODEL4_b6tl60.jpg",
                  reting: 3.7,
                  is_off: 47,
                  size: "S",
                  cancel_price: 1499,
                  category: "women",
                  description:"Bottomwear fabric: Rayon Dupatta length: 2.25 m Dupatta fabric: Chiffon Package contains: 1 kurta, 1 pants, Bottomwear & DupattaMachine wash100% rayon"
                },
                {
                  id: 18,
                  title: "Flare Dress",
                  price: 764,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686067062/-473Wx593H-466044959-magenta-MODEL_rcyxma.jpg",
                  reting: 4.7,
                  is_off: 45,
                  size: "S",
                  cancel_price: 1699,
                  category: "kids",
                  description:"Regular Fit Package contains: 1 jumpsuit Machine wash Cotton"
                },
                {
                  id: 19,
                  title: "Round-Neck T-shirt",
                  price: 260,
                  image:
                    " https://res.cloudinary.com/dg8qxje02/image/upload/v1686054535/-473Wx593H-464402727-multi-MODEL_fx3siv.jpg",
                  reting: 4.0,
                  is_off: 87,
                  size: "M",
                  cancel_price: 2000,
                  category: "kids",
                  description:"Package contains: 1 t-shirt Cotton Relaxed Fit"
                },
                {
                  id: 20,
                  title: "Crew-Neck T-shirt",
                  price: 286,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686054675/-473Wx593H-464401210-black-MODEL_gxrs8s.jpg",
                  reting: 3.7,
                  is_off: 74,
                  size: "S",
                  cancel_price: 1100,
                  category: "kids",
                  description:"Package contains: 1 t-shirt Cotton Relaxed Fit",
                },
                {
                  id: 21,
                  title: "Slim Fit T-shirt",
                  price: 420,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686054958/-473Wx593H-464131354-multi-MODEL_a5v0a6.jpg",
                  reting: 4.7,
                  is_off: 79,
                  size: "S",
                  cancel_price: 1999,
                  category: "kids",
                  description:"Package contains: 1 t-shirt Cotton Relaxed Fit",
                },
                {
                  id: 22,
                  title: "Neck T-Shirt",
                  price: 645,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686055045/-473Wx593H-465070283-navy-MODEL4_tqgwko.jpg",
                  reting: 3.8,
                  is_off: 45,
                  size: "M",
                  cancel_price: 1434,
                  category: "kids",
                  description:"Package contains: 1 t-shirt Cotton Relaxed Fit",
                },
                {
                  id: 23,
                  title: " Flare Dress",
                  price: 968,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686055296/-473Wx593H-466009669-black-MODEL_fqvrbw.jpg",
                  reting: 4.9,
                  is_off: 57,
                  size: "S",
                  cancel_price: 1699,
                  category: "kids",
                  description:"Regular Fit Package contains: 1 jumpsuit Machine wash Cotton"
                },
                {
                  id: 24,
                  title: "Striped Jumpsuit ",
                  price: 840,
                  image:
                    "https://res.cloudinary.com/dg8qxje02/image/upload/v1686055454/-473Wx593H-466079151-multi-MODEL_wqzood.jpg",
                  reting: 3.7,
                  is_off: 47,
                  size: "M",
                  cancel_price: 1789,
                  category: "kids",
                  description:"Regular Fit Package contains: 1 jumpsuit Machine wash Cotton"
                }
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "product list not found."
          });
        }
      }, 100);
    });
  };
  