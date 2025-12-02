import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Portfolio App', () => {
  test('renders main application components', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /Портфолио проектов/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Используйте фильтры/i)).toBeInTheDocument();
  });

  test('has all filter categories', () => {
    render(<App />);

    const filterButtons = screen.getAllByRole('button');
    const filterTexts = filterButtons.map((button) => button.textContent);

    expect(filterTexts.some((text) => text.includes('All'))).toBeTruthy();
    expect(filterTexts.some((text) => text.includes('Websites'))).toBeTruthy();
    expect(
      filterTexts.some((text) => text.includes('Business Cards'))
    ).toBeTruthy();
    expect(filterTexts.some((text) => text.includes('Flayers'))).toBeTruthy();
  });
});
