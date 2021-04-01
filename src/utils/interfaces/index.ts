export interface SearchQuery {
  grapes?: string;
  date?: string;
  city?: string;
}

export interface Credentials {
  username?: string;
  email?: string;
  password: string;
  name?: string;
  lastname?: string;
}


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
