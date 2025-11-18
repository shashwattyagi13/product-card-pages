import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductCard from '../components/ProductCard'
import { CartProvider } from '../components/CartProvider'

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'Short description',
  price: '₹999',
  rating: 4.5,
  image: '/images/watch.jpg'
}

describe('ProductCard', () => {
  it('renders title and price and buttons', () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    )

    expect(screen.getByText(/Test Product/i)).toBeInTheDocument()
    expect(screen.getByText(/₹999/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Add Test Product to cart/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now test product/i })).toBeInTheDocument()
  })
})
