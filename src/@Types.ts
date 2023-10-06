export interface Tour {
  id: number
  title: string
  destination: string
  description: string
  tourRoute: string
  availableDate: string
  price: string
}

export interface User {
  role: Array<{ authority: string }>
  token: string;
  mail: string;
}