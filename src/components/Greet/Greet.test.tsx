import { render, screen } from '@testing-library/react'
import Greet from './Greet'
// Greet needs { } when not default exported

test('Greet renders correctly', () => {
   render(<Greet />)
   const textElement = screen.getByText(/hello/i)
   expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {
   render(<Greet name='Heved'/>)
   const textElement = screen.getByText('Hello Heved')
   expect(textElement).toBeInTheDocument()
})