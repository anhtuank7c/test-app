import React from 'react';
import {render, screen} from '@testing-library/react-native';
import AppNavigator from './app-navigator';

/**
 * Test View
 */

test('render correctly', () => {
  render(<AppNavigator />);
  expect(screen.toJSON()).toMatchSnapshot();
});
