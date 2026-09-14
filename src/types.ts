export interface BurgerItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge?: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  badge?: string;
}

export interface SideItem {
  name: string;
  price: string;
  description?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  timeAgo: string;
  rating: number;
  content: string;
  image: string;
  imageAlt: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  isSpecial?: boolean;
}
