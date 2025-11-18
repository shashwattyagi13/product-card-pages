import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductGrid from '../components/ProductGrid'
import { CartProvider } from '../components/CartProvider'

const products = [
  { id: 1, title: 'P1', price: '₹100', image: '/images/watch.jpg' }
]

describe('ProductGrid', () => {
  it('renders a product card from props', () => {

    render(
      <CartProvider>
        <ProductGrid products={products as any} />
      </CartProvider>
    )

    expect(screen.getByText(/P1/)).toBeInTheDocument()
  })
})
