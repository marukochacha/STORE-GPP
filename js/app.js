/* ======================= STATE ======================= */
let registeredUsers = [];
let allOrders = [];

const STORAGE_KEY_USERS = 'gsp_registeredUsers';
const STORAGE_KEY_ACTIVE = 'gsp_activeUserEmail';

let appState = {
  loggedIn:false,
  user:{email:"",username:"",password:"",phone:"",address:""},
  cart:[],
  currentProductId:null,
  selectedColor:null,
  selectedSize:null,
  checkoutItems:[],
  activeCat:"semua",
  gallerySlideIndex:0,
};
let nextLineId = 1;

/* ======================= STORAGE FUNCTIONS ======================= */
function
