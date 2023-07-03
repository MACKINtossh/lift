export interface NavLinks {
  id: string;
  title: string;
  href: string;
  active?: boolean;
}

export interface Billboard {
  id: string;
  name: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}
