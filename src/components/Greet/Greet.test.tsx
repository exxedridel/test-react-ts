import { render, screen } from '@testing-library/react'
import Greet from './Greet'
// Greet needs { } when not default exported

describe('Greet', () => {
   test('Renders correctly', () => {
      render(<Greet />)
      const textElement = screen.getByText(/hello/i)
      expect(textElement).toBeInTheDocument()
   })

   describe('Nested', () => {
      test('Renders a name', () => { // test.only(), test.skip()
         render(<Greet name='Heved' />)
         const textElement = screen.getByText('Hello Heved')
         expect(textElement).toBeInTheDocument()
      })
   })
})

// Several describes is also posible but test suites is still 1 per file


