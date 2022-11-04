import { render, screen } from '@testing-library/react'
import Greet from '../components/Greet/Greet'
// Greet needs { } when not default exported

describe('Greet', () => {
   it('Renders correctly', () => { // it insted of test is the same
      render(<Greet />)
      const textElement = screen.getByText(/hello/i)
      expect(textElement).toBeInTheDocument()
   })

   describe('Nested', () => {
      // fit is the same for test.only
      it('Renders a name', () => { // xit is the same for test.skip
         render(<Greet name='Heved' />)
         const textElement = screen.getByText('Hello Heved')
         expect(textElement).toBeInTheDocument()
      })
   })
})




