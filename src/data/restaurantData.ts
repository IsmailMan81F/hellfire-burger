import { BurgerItem, DrinkItem, SideItem, ReviewItem, OpeningHour } from '../types';

export const RESTAURANT_INFO = {
  name: 'HELLFIRE BURGER',
  baseline: 'Né en Enfer, le Goût du Paradis',
  heroSubtitle: 'Burgers artisanaux smashés et cuits à la flamme vive à Alger Centre. Une viande fraîche saisie à la perfection, des sauces signatures et des pains briochés dorés.',
  phone: '0560 109 999',
  phoneFormatted: '0560 109 999',
  phoneCallUrl: 'tel:0560109999',
  whatsappUrl: 'https://wa.me/213560109999',
  instagramUrl: 'https://www.instagram.com/hellfireburger/',
  locationAddress: '04 Boulevard Victor Hugo, Alger Centre',
  googleMapsAddress: "Av. Victor Hugo, Sidi M'Hamed 16000",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Victor+Hugo,+Sidi+M%27Hamed+16000",
  averageRating: '4.9',
  totalReviews: '66 avis',
};

export const BURGER_FORMULAS = [
  {
    type: 'SIMPLE',
    sub: '1 Steak smashé braisé à la flamme',
    soloPrice: '300 DA',
    menuPrice: '500 DA',
    menuNote: 'Frites croustillantes + Boisson fraîche incluses',
    badge: 'Populaire',
  },
  {
    type: 'DOUBLE',
    sub: '2 Steaks smashés braisés à la flamme',
    soloPrice: '500 DA',
    menuPrice: '700 DA',
    menuNote: 'Frites croustillantes + Boisson fraîche incluses',
    badge: 'Gourmand',
  },
];

export const BURGERS_LIST: BurgerItem[] = [
  {
    id: 'sin',
    name: 'SIN',
    tagline: 'Sauce Signature',
    description: 'La recette emblématique HellFire avec notre sauce secrète relevée, fromage fondu et pain brioché toasté.',
    badge: 'Signature',
  },
  {
    id: 'burn',
    name: 'BURN',
    tagline: 'Sauce Épicée & Oignons Caramélisés',
    description: 'Pour les amateurs de sensations fortes : sauce épicée ardente, oignons confits fondants et fromage fondu.',
    badge: 'Pimenté',
  },
  {
    id: 'smoke',
    name: 'SMOKE',
    tagline: 'Sauce Barbecue & Cornichons',
    description: 'Un parfum fumé intense au bois de chêne, sauce BBQ onctueuse, pickles croquants et cheddar affiné.',
    badge: 'Fumé',
  },
  {
    id: 'wild',
    name: 'WILD',
    tagline: 'Sauce Ail et Herbes & Champignons',
    description: 'Une touche forestière raffinée avec sauce crémeuse ail et fines herbes, champignons frais sautés et caramélisés.',
    badge: 'Gourmet',
  },
  {
    id: 'pepper',
    name: 'PEPPER',
    tagline: 'Sauce Poivre & Oignons Frais',
    description: 'Caractère affirmé avec une sauce au poivre noir concassé et le croquant revigorant des oignons frais émincés.',
    badge: 'Intense',
  },
];

export const SIDES_LIST: SideItem[] = [
  {
    name: 'Sauce Fromagère Cheddar',
    price: '100 DA',
    description: 'Cheddar chaud fondu onctueux',
  },
  {
    name: 'Portion de Frites Maison',
    price: '150 DA',
    description: 'Frites dorées et croustillantes',
  },
  {
    name: 'Sauce Maison Supplémentaire',
    price: '100 DA',
    description: 'Au choix : Sin, Burn, Smoke, Wild ou Pepper',
  },
  {
    name: 'Boissons Gazeuses & Jus',
    price: '100 DA',
    description: 'Cannettes fraîches assorties',
  },
  {
    name: 'Eau Minérale',
    price: '50 DA',
    description: 'Bouteille 50cl fraîche',
  },
];

export const HOT_DRINKS_LIST: DrinkItem[] = [
  {
    id: 'espresso',
    name: 'Espresso',
    price: '100 DA',
    description: 'Café noir court, crema dorée et arôme corsé',
  },
  {
    id: 'capsule',
    name: 'Café Capsule',
    price: '100 DA',
    description: 'Sélection de grands crus d’arabica torréfiés',
  },
  {
    id: 'tea',
    name: 'Thé Traditionnel',
    price: '100 DA',
    description: 'Infusion parfumée servi chaud',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: '150 DA',
    description: 'Espresso avec mousse de lait crémeuse et cacao',
  },
  {
    id: 'latte',
    name: 'Café Latte',
    price: '150 DA',
    description: 'Douceur lactée veloutée mariée à un espresso corsé',
  },
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Yusuf Salhotra',
    timeAgo: 'Il y a 2 mois',
    rating: 5,
    content: "Super bonne nourriture, cuisine et restaurant extrêmement propres. Venez sans la moindre hésitation, c'est le feu absolu !",
    image: '/assets/images/reviews/mountain.jpg',
    imageAlt: 'Photo de profil paysage montagneux de Yusuf Salhotra',
  },
  {
    id: 'review-2',
    author: 'Ice Eyolf',
    timeAgo: 'Il y a 2 mois',
    rating: 5,
    content: "Les burgers, le personnel, l'ambiance... tout était au top ! 10/10. Le seul petit point est la climatisation, il fait chaud à l'intérieur, mais dans l'ensemble tout était parfait. Définitivement mon nouveau spot préféré.",
    image: '/assets/images/reviews/sea.jpg',
    imageAlt: 'Photo de profil paysage marin de Ice Eyolf',
  },
  {
    id: 'review-3',
    author: 'Sif Hocine',
    timeAgo: 'Il y a 4 mois',
    rating: 5,
    content: "Une superbe halte pour moi. Ça mérite vraiment le détour ! La cuisson à la flamme donne une saveur incomparable.",
    image: '/assets/images/reviews/plants.jpg',
    imageAlt: 'Photo de profil nature et arbres de Sif Hocine',
  },
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: 'Lundi', hours: '11h30 – 00h00' },
  { day: 'Mardi', hours: '11h30 – 00h00' },
  { day: 'Mercredi', hours: '11h30 – 00h00' },
  { day: 'Jeudi', hours: '11h30 – 00h00' },
  { day: 'Vendredi', hours: '18h00 – 00h00', isSpecial: true },
  { day: 'Samedi', hours: '11h30 – 00h00' },
  { day: 'Dimanche', hours: '11h30 – 00h00' },
];

export const RESTAURANT_FEATURES = [
  { title: 'Sur Place & À Emporter', desc: 'Dégustez au comptoir ou emportez votre festin' },
  { title: 'Livraison Rapide', desc: 'Vos burgers livrés chauds à Alger Centre' },
  { title: 'Paiement Espèces', desc: 'Règlement en espèces uniquement' },
  { title: 'Accueil Chaleureux', desc: 'Idéal en solo, entre amis ou en famille' },
];
