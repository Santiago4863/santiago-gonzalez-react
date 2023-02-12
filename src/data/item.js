const items = [
  {
    "id":1,
    "titulo": "Ray-Ban",
    "imagen": "./img/hombre-1.jpg",
    "descripcion":"Lentes para hombre",
    "stock":120,
    "categoria":"Hombre",
    "precio": 11000
},
{
    "id": 2,
    "titulo": "Ray-Ban",
    "imagen": "./img/hombre-2.jpg",
    "descripcion":"Lentes para hombre",
    "stock":120,
    "categoria":"Hombre",
    "precio": 10000
},
{
    "id": 3,
    "titulo": "Ray-Ban",
    "imagen": "./img/hombre-3.jpg",
    "descripcion":"Lentes para hombre",
    "stock":120,
    "categoria":"Hombre",
    "precio": 10500
},
{
    "id": 4,
    "titulo": "Bangue",
    "imagen": "./img/hombre-4.jpg",
    "descripcion":"Lentes para hombre",
    "stock":120,
    "categoria":"Hombre",
    "precio": 11500
},
{
    "id": 5,
    "titulo": "Ray-Ban",
    "imagen": "/img/hombre-5.jpg",
    "descripcion":"Lentes para hombre",
    "stock":120,
    "categoria":"Hombre",
    "precio": 9000
},
{
    "id": 6,
    "titulo": "Bangue",
    "imagen": "./img/mujer-1.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 14000
},
{
    "id": 7,
    "titulo": "Bangue",
    "imagen": "./img/mujer-2.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 12000
},
{
    "id": 8,
    "titulo": "Ray-Ban",
    "imagen": "./img/mujer-3.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 13600
},
{
    "id": 9,
    "titulo": "Bangue",
    "imagen": "./img/mujer-4.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 19000
},
{
    "id": 10,
    "titulo": "Bangue",
    "imagen": "./img/mujer-5.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 10000
},
{
    "id": 11,
    "titulo": "Bangue",
    "imagen": "./img/mujer-6.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 8000
},
{
    "id": 12,
    "titulo": "Ray-Ban",
    "imagen": "./img/mujer-7.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 11000
},
{
    "id": 13,
    "titulo": "Bangue",
    "imagen": "./img/mujer-8.jpg",
    "descripcion":"Lentes para mujer",
    "stock":120,
    "categoria":"Mujer",
    "precio": 13800
},
{
    "id": 14,
    "titulo": "Rip Curl",
    "imagen": "./img/niños-1.jpg",
    "descripcion":"Lentes para niños",
    "stock":120,
    "categoria":"Niños",
    "precio": 7000
},
{
    "id": 15,
    "titulo": "Rip Curl",
    "imagen": "./img/niños-2.jpg",
    "descripcion":"Lentes para niños",
    "stock":120,
    "categoria":"Niños",
    "precio": 8000
},
{
    "id": 16,
    "titulo": "Bangue",
    "imagen": "/img/niños-3.jpg",
    "descripcion":"Lentes para niños",
    "stock":120,
    "categoria":"Niños",
    "precio": 6800
},
{
    "id": 17,
    "titulo": "Bangue",
    "imagen": "img/niños-4.jpg",
    "descripcion":"Lentes para niños",
    "stock":120,
    "categoria":"Niños",
    "precio": 8300
},

{
    "id": 18,
    "titulo": "Rip Curl",
    "imagen": "../img/niños-estuche.jpg",
    "descripcion":"estuches para niños",
    "stock":120,
    "categoria":"Niños",
    "precio": 2000
}
]
/*

{ "id":1,
"titleProduct":"iPhone 9",
"descriptionProduct":"An apple mobile which is nothing like apple",
"priceProduct":549,
"discountPercentage":12.96,
"rating":4.69,
"stock":94,
"brand":"Apple",
"category":"smartphones",
"thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/1/1.jpg"
},
{"id":2,
"titleProduct":"iPhone X",
"descriptionProduct":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
"priceProduct":899,"discountPercentage":17.94,
"rating":4.44,
"stock":34,
"brand":"Apple",
"category":"smartphones",
"thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/2/1.jpg"
},
{"id":3,
"titleProduct":"Samsung Universe 9",
"descriptionProduct":"Samsung's new variant which goes beyond Galaxy to the Universe",
"priceProduct":1249,"discountPercentage":15.46,"rating":4.09,"stock":36,"brand":"Samsung",
"category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/3/1.jpg"
},
{"id":4,
"titleProduct":"OPPOF19",
"descriptionProduct":"OPPO F19 is officially announced on April 2021.",
"priceProduct":280,"discountPercentage":17.91,
"rating":4.3,"stock":123,"brand":"OPPO","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/4/1.jpg"
},
{"id":5,
"titleProduct":"Huawei P30","descriptionProduct":"Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.","priceProduct":499,"discountPercentage":10.58,"rating":4.09,"stock":32,"brand":"Huawei","category":"smartphones","thumbnail":"https://i.dummyjson.com/data/products/5/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/5/1.jpg"
},
{"id":6,
"titleProduct":"MacBook Pro","descriptionProduct":"MacBook Pro 2021 with mini-LED display may launch between September, November","priceProduct":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"APPle","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/6/thumbnail.png","imgProduct":"https://i.dummyjson.com/data/products/6/1.png"
},
{"id":7,"titleProduct":"Samsung Galaxy Book","descriptionProduct":"Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","priceProduct":1499,"discountPercentage":4.15,"rating":4.25,"stock":50,"brand":"Samsung","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/7/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/7/1.jpg"},
{"id":8,
"titleProduct":"Microsoft Surface Laptop 4",
"descriptionProduct":"Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","priceProduct":1499,"discountPercentage":10.23,"rating":4.43,"stock":68,"brand":"Microsoft Surface","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/8/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/8/1.jpg"},
{"id":9,"titleProduct":"Infinix INBOOK","descriptionProduct":"Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","priceProduct":1099,"discountPercentage":11.83,"rating":4.54,"stock":96,"brand":"Infinix","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/9/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/9/1.jpg"},
{"id":10,
"titleProduct":"HP Pavilion 15-DK1056WM","descriptionProduct":"HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","priceProduct":1099,"discountPercentage":6.18,"rating":4.43,"stock":89,"brand":"HP Pavilion","category":"laptops","thumbnail":"https://i.dummyjson.com/data/products/10/thumbnail.jpeg","imgProduct":"https://i.dummyjson.com/data/products/10/1.jpg"},
{"id":11,"titleProduct":"perfume Oil","descriptionProduct":"Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil","priceProduct":13,"discountPercentage":8.4,"rating":4.26,"stock":65,"brand":"Impression of Acqua Di Gio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/11/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/11/1.jpg"},
{"id":12,
"titleProduct":"Brown Perfume","descriptionProduct":"Royal_Mirage Sport Brown Perfume for Men & Women - 120ml","priceProduct":40,"discountPercentage":15.66,"rating":4,"stock":52,"brand":"Royal_Mirage","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/12/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/12/1.jpg"},
{"id":13,
"titleProduct":"Fog Scent Xpressio Perfume","descriptionProduct":"Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men","priceProduct":13,"discountPercentage":8.14,"rating":4.59,"stock":61,"brand":"Fog Scent Xpressio","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/13/thumbnail.webp","imgProduct":"https://i.dummyjson.com/data/products/13/1.jpg"},
{"id":14,"titleProduct":"Non-Alcoholic Concentrated Perfume Oil","descriptionProduct":"Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil","priceProduct":120,"discountPercentage":15.6,"rating":4.21,"stock":114,"brand":"Al Munakh","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/14/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/14/1.jpg"}
,{"id":15,"titleProduct":"Eau De Perfume Spray","descriptionProduct":"Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality","priceProduct":30,"discountPercentage":10.99,"rating":4.7,"stock":105,"brand":"Lord - Al-Rehab","category":"fragrances","thumbnail":"https://i.dummyjson.com/data/products/15/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/15/1.jpg"}
,{"id":16,"titleProduct":"Hyaluronic Acid Serum","descriptionProduct":"L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid","priceProduct":19,"discountPercentage":13.31,"rating":4.83,"stock":110,"brand":"L'Oreal Paris","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/16/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/16/1.png"}
,{"id":17,"titleProduct":"Tree Oil 30ml","descriptionProduct":"Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,","priceProduct":12,"discountPercentage":4.09,"rating":4.52,"stock":78,"brand":"Hemani Tea","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/17/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/17/1.jpg"}
,{"id":18,"titleProduct":"Oil Free Moisturizer 100ml","descriptionProduct":"Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.","priceProduct":40,"discountPercentage":13.1,"rating":4.56,"stock":88,"brand":"Dermive","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/18/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/18/1.jpg"}
,{"id":19,"titleProduct":"Skin Beauty Serum.","descriptionProduct":"Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m","priceProduct":46,"discountPercentage":10.68,"rating":4.42,"stock":54,"brand":"ROREC White Rice","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/19/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/19/1.jpg"}
,{"id":20,"titleProduct":"Freckle Treatment Cream- 15gm","descriptionProduct":"Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.","priceProduct":70,"discountPercentage":16.99,"rating":4.06,"stock":140,"brand":"Fair & Clear","category":"skincare","thumbnail":"https://i.dummyjson.com/data/products/20/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/20/1.jpg"}
,{"id":21,"titleProduct":"- Daal Masoor 500 grams","descriptionProduct":"Fine quality Branded Product Keep in a cool and dry place","priceProduct":20,"discountPercentage":4.81,"rating":4.44,"stock":133,"brand":"Saaf & Khaas","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/21/thumbnail.png","imgProduct":"https://i.dummyjson.com/data/products/21/1.png"},
{"id":22,"titleProduct":"Elbow Macaroni - 400 gm","descriptionProduct":"Product details of Bake Parlor Big Elbow Macaroni - 400 gm","priceProduct":14,"discountPercentage":15.58,"rating":4.57,"stock":146,"brand":"Bake Parlor Big","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/22/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/22/1.jpg"},
{"id":23,"titleProduct":"Orange Essence Food Flavou","descriptionProduct":"Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item","priceProduct":14,"discountPercentage":8.04,"rating":4.85,"stock":26,"brand":"Baking Food Items","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/23/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/23/1.jpg"},
{"id":24,"titleProduct":"cereals muesli fruit nuts","descriptionProduct":"original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji","priceProduct":46,"discountPercentage":16.8,"rating":4.94,"stock":113,"brand":"fauji","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/24/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/24/1.jpg"},
{"id":25,"titleProduct":"Gulab Powder 50 Gram","descriptionProduct":"Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds","priceProduct":70,"discountPercentage":13.58,"rating":4.87,"stock":47,"brand":"Dry Rose","category":"groceries","thumbnail":"https://i.dummyjson.com/data/products/25/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/25/1.png"},
{"id":26,"titleProduct":"Plant Hanger For Home","descriptionProduct":"Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf","priceProduct":41,"discountPercentage":17.86,"rating":4.08,"stock":131,"brand":"Boho Decor","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/26/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/26/1.jpg"},
{"id":27,"titleProduct":"Flying Wooden Bird","descriptionProduct":"Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm","priceProduct":51,"discountPercentage":15.58,"rating":4.41,"stock":17,"brand":"Flying Wooden","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/27/thumbnail.webp","imgProduct":"https://i.dummyjson.com/data/products/27/1.jpg"}
,{"id":28,"titleProduct":"3D Embellishment Art Lamp","descriptionProduct":"3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)","priceProduct":20,"discountPercentage":16.49,"rating":4.82,"stock":54,"brand":"LED Lights","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/28/thumbnail.jpg","imgProduct":"https://i.dummyjson.com/data/products/28/1.jpg"}
,{
  "id":29,"titleProduct":"Handcraft Chinese style","descriptionProduct":"Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate","priceProduct":60,"discountPercentage":15.34,"rating":4.44,"stock":7,"brand":"luxury palace","category":"home-decoration","thumbnail":"https://i.dummyjson.com/data/products/29/thumbnail.webp","imgProduct":"https://i.dummyjson.com/data/products/29/1.jpg"},
{"id":30,"titleProduct":"Key Holder","descriptionProduct":"Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality","priceProduct":30,"discountPercentage":2.92,"rating":4.92,"stock":54,"brand":"Golden","category":"home-decoration",
"thumbnail":"https://i.dummyjson.com/data/products/30/thumbnail.jpg",
"imgProduct":"https://i.dummyjson.com/data/products/30/1.jpg"}]
  */
  
  export default items;