import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Button} from './button';

test('render correctly', () => {
  render(<Button />);
  expect(screen).toMatchSnapshot();
});
