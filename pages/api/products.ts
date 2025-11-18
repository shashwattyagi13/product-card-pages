import type { NextApiRequest, NextApiResponse } from 'next'

export type Product = {
  id: number
  title: string
  description?: string
  price?: string
  rating?: number
  image?: string
  outOfStock?: boolean
  sale?: boolean
}

const products: Product[] = [
  {
    id: 1,
    title: 'Classic Watch',
    description: 'Minimal, elegant watch for everyday wear.',
    price: '₹2,499',
    rating: 4.5,
    image: '/images/watch.jpg',
    sale: true
  },
  {
    id: 2,
    title: 'Leather Wallet',
    description: 'Slim leather wallet with multiple card slots.',
    price: '₹899',
    rating: 4.2,
    image: '/images/wallet.jpg'
  },
  {
    id: 3,
    title: 'Noise-Cancelling Headphones',
    description: 'Comfortable over-ear ANC headphones.',
    price: '₹7,999',
    rating: 4.7,
    image: '/images/headphone.jpg',
    outOfStock: true
  },
  {
    id: 4,
    title: 'Runner Shoes',
    description: 'Lightweight running shoes for daily training.',
    price: '₹3,299',
    rating: 4.4,
    image: '/images/shoes.jpg'
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products)
}
