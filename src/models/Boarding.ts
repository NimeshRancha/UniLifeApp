export interface BoardingPhoto {
    photo_id: number;
    boarding_id: number;
    user_id: number;
    photo_url: string;
    likes: number;
  }
  
  export interface BoardingReview {
    review_id: number;
    review: string;
    likes: number;
    user_id: number;
    BoardingPhotos: BoardingPhoto[]; // Photos are now associated with reviews
  }
  
  export interface Boarding {
    boarding_id: number;
    boarding_name: string;
    address: string;
    location: string;
    contact_number: string;
    BoardingReviews: BoardingReview[]; // Reviews now contain photos
  }
  