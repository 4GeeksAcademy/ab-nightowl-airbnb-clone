export type Accommodation = {
  id: string;
  name: string;
  image: string;
  location: string;
  dateRange?: string;
  hostType?: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
  isRecommended?: boolean;
};
