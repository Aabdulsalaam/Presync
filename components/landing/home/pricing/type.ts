export interface Feature {
  text: string;
  available: boolean;
}

export interface Plan {
  title: string;
  description: string;
  price: string;
  period?: string;
  buttonText: string;
  primary: boolean;
  features: Feature[];
}