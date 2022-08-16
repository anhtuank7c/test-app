import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {LoginScreen} from './login-screen';

/**
 * Test View
 */

test('render correctly', () => {
  const {getByTestId} = render(<LoginScreen />);

  // test UI elements exist
  expect(getByTestId('header')).toBeTruthy();
  expect(getByTestId('username')).toBeTruthy();
  expect(getByTestId('password')).toBeTruthy();
  expect(getByTestId('loginButton')).toBeTruthy();

  // trying to fill and submit form [CORRECT]
  fireEvent.changeText(getByTestId('username'), 'tuan');
  fireEvent.changeText(getByTestId('password'), '123456');
  fireEvent.press(getByTestId('loginButton'));
});
