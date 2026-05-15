export type FeedbackReview = {
  _id?: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  email?: string;
  approved: boolean;
  createdAt: Date;
};

export type FeedbackInput = {
  name: string;
  company: string;
  rating: number;
  review: string;
  email?: string;
};

export type PublicReview = {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  createdAt: string;
};
