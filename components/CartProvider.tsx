'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

export type CartItem = {
  id: number | string
  title: string
  price?: string
  qty?: number
  image?: string
}

type CartContextValue = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number | string) => void
  clearCart: () => void
  setCart: (items: CartItem[]) => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCartState] = useState<CartItem[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart_v1')
      if (raw) setCartState(JSON.parse(raw))
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('cart_v1', JSON.stringify(cart))
    } catch {
      // ignore
    }
  }, [cart])

  function addToCart(item: CartItem) {
    setCartState((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: (p.qty ?? 1) + (item.qty ?? 1) } : p))
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }]
    })
  }

  function removeFromCart(id: number | string) {
    setCartState((prev) => prev.filter((p) => p.id !== id))
  }

  function clearCart() {
    setCartState([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, setCart: setCartState }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
