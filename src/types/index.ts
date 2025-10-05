export interface IBlog {
  _id: string;
  title: string;
  content: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProject {
  _id?: string;
  title: string;
  thumbnail: string;
  repoLink?: string;
  liveLink?: string;
  description: string;
  features: string[];
  techStack?: string[];
  tags?: string[];
  isFeatured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}
