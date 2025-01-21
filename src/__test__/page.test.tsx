import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Products from '../components/products/Products'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Products />)
 
    const heading = screen.getByRole('heading', { level: 2 })
 
    expect(heading).toBeInTheDocument()
  })
})