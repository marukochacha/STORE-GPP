/* ======================= DATA PRODUK GADGET ======================= */
const DEMO_VIDEO = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const products = [
  {id:1,name:"iPad",price:7999000,oldPrice:8999000,desc:"Tablet layar lebar dengan performa kencang, cocok untuk kerja, belajar, gambar digital, dan hiburan.",rating:4.8,sold:412,stock:48,cat:"ipad",badge:"Best Seller",
   img:"assets/images/ipad.jpg",
   gallery:["assets/images/ipad.jpg"],
   video:"assets/videos/ipad.mp4",
   colors:[{name:"Space Gray",hex:"#3a3d40"},{name:"Silver",hex:"#c9cdd1"}],
   sizes:["128GB","256GB"]},
  {id:2,name:"iPhone 15",price:13999000,oldPrice:14999000,desc:"Smartphone flagship dengan kamera canggih, performa cepat, dan desain premium.",rating:4.9,sold:288,stock:120,cat:"smartphone",badge:"Baru",
   img:"assets/images/iphone%2015.jpg",
   gallery:["assets/images/iphone%2015.jpg"],
   video:"assets/videos/iphone.mp4",
   colors:[{name:"Hitam",hex:"#1c1c1c"},{name:"Putih",hex:"#f5f5f5"},{name:"Biru",hex:"#2e6cd9"}],
   sizes:["128GB","256GB"]},
  {id:3,name:"Case",price:99000,oldPrice:129000,desc:"Case pelindung pas di bodi, bahan kuat anti benturan, tetap tipis dan nyaman digenggam.",rating:4.7,sold:196,stock:65,cat:"aksesoris",badge:"Best Seller",
   img:"assets/images/case.jpg",
   gallery:["assets/images/case.jpg"],
   video:"assets/videos/case.mp4",
   colors:[{name:"Hitam",hex:"#1c1c1c"},{name:"Bening",hex:"#e9e9e9"}],
   sizes:["Standard"]},
  {id:4,name:"MacBook",price:16999000,oldPrice:null,desc:"Laptop tipis dan ringan dengan performa kencang, baterai awet, cocok untuk kerja maupun kuliah.",rating:4.8,sold:150,stock:20,cat:"macbook",badge:"Baru",
   img:"assets/images/macbook.jpg",
   gallery:["assets/images/macbook.jpg"],
   video:"assets/videos/VID%20MACBOOK.mp4",
   colors:[{name:"Silver",hex:"#c9cdd1"},{name:"Space Gray",hex:"#3a3d40"}],
   sizes:["256GB","512GB"]},
];

const sampleReviews = [
  {name:"Dimas Pratama",avatar:"https://i.pravatar.cc/60?img=33",rating:5,text:"Kualitas build-nya premium, pengiriman cepat dan packing aman!"},
  {name:"Sinta Amelia",avatar:"https://i.pravatar.cc/60?img=45",rating:4,text:"Barangnya bagus, cuma dus agak penyok dikit pas nyampe."},
  {name:"Fajar Nugroho",avatar:"https://i.pravatar.cc/60?img=22",rating:5,text:"Sudah kedua kalinya beli di sini, garansi resmi dan responsif."},
];

/* ======================= DATA SUPPLIER ======================= */
let suppliers = [
  {id:1, name:"CV Sumber Elektronik", contact:"Budi Santoso", phone:"081234567890", email:"budi@sumberelektronik.co.id", cat:"smartphone", address:"Jl. Pasar Baru No. 12, Jakarta", status:"Aktif"},
  {id:2, name:"PT Aksesoris Nusantara", contact:"Rina Wulandari", phone:"081298765432", email:"rina@aksesorisnusantara.id", cat:"aksesoris", address:"Jl. Kembang Raya No. 5, Bandung", status:"Aktif"},
  {id:3, name:"UD Gadget Sejahtera", contact:"Andi Firmansyah", phone:"081311223344", email:"andi@gadgetsejahtera.com", cat:"ipad", address:"Jl. Diponegoro No. 88, Surabaya", status:"Nonaktif"},
];

let nextSupplierId = 4;

const CAT_LABEL = {smartphone:"Smartphone", ipad:"iPad", macbook:"MacBook", aksesoris:"Aksesoris"};

const ADMIN_CREDENTIALS = {username:"admin", password:"admin123"};
