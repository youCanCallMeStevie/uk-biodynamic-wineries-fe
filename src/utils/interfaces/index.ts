export interface SearchQuery {
  grapes?: string;
  date?: string;
  city?: string;
}

export interface Credentials {
  username?: string;
  email?: string;
  password: string;
}

// export interface UserProfile {
//   publicProfile: boolean;
//   followers: Array<string | null>;
//   following: Array<string | null>;
//   reviewsGiven: Array<string | null>;
//   likedReviews: Array<string | null>;
//   likedVineyards: Array<string | null>;
//   vistedVineyards: Array<string | null>;
//   _id: string;
//   name: string;
//   lastname: string;
//   username: string;
//   email: string;
//   createdAt: Date;
//   updatedAt: Date;
//   __v?: number;
//   refreshToken: string;
//   imageUrl?: string | null;
// }

export interface Review {
    likes:     Array<string | null>;
    _id:       string;
    text:      string;
    rating:    number;
    userId:    string;
    createdAt: Date;
    updatedAt: Date;
    __v?:       number;
}
