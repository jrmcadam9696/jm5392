import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Song from './Song';

describe('Song Component', () => {
  test('renders song title and artist correctly', () => {
    render(<Song title="Test Song" artist="Test Artist" year={2024} setCurrentTrack={() => {}} />);
    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Test Artist - 2024')).toBeInTheDocument();
  });

  test('does not render when title or artist is missing', () => {
    const { container } = render(<Song title="" artist="Test Artist" year={2024} setCurrentTrack={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  test('calls setCurrentTrack when clicked', () => {
    const mockSetCurrentTrack = jest.fn();
    render(<Song title="Test Song" artist="Test Artist" year={2024} setCurrentTrack={mockSetCurrentTrack} />);
    
    fireEvent.click(screen.getByText('Test Song'));
    expect(mockSetCurrentTrack).toHaveBeenCalledWith('Test Song');
  });
});
