import {useNavigation} from '@react-navigation/native';
import {renderHook} from '@testing-library/react-hooks';
import {act} from 'react-test-renderer';
import {useAuth} from './useAuth';

/**
 * Test business logics
 */
test('auth flow', () => {
  const nav = renderHook(() => useNavigation());
  const auth = renderHook(() => useAuth({navigation: nav.result.current}));

  // test login with correct credential
  act(() => auth.result.current.onLogin('tuan', '123456'));

  // test logout
  act(() => auth.result.current.onLogout());

  // test login with INCORRECT credential
  act(() =>
    expect(() =>
      auth.result.current.onLogin('tuan_incorrect', '123456_credential'),
    ).toThrowError(Error('Invalid credentials')),
  );
});
