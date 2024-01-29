import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('should saw a calculator layout', () => {
    const { getByLabelText } = render(<App />);
    expect(getByLabelText('calculatorLayout')).toHaveStyle({
      width: '300px',
      height: '500px',
      backgroundColor: 'black',
      borderRadius: '0% 0% 0% 0%'
    })
  }); 
}); 

 