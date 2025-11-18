'use client'

import { useCart } from './CartProvider'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function CartIcon() {
  const { cart } = useCart()
  const count = cart.reduce((n, item) => n + (item.qty ?? 1), 0)

  return (
    <div className="fixed top-4 right-20 z-[100]">
      <Link
        href="/checkout"
        aria-label="Cart"
        className="relative flex items-center justify-center"
      >
        <ShoppingCart
          size={26}
          className="text-gray-900 dark:text-gray-100 drop-shadow-lg mr-4"
        />

        {count > 0 && (
          <span
            className="absolute -top-2  bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-lg"
          >
            {count}
          </span>
        )}
      </Link>
    </div>
  )
}
