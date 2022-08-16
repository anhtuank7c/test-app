import {renderHook, act} from '@testing-library/react-hooks';
import useLogin from './useLogin';

/**
 * Test business logics
 */
test('hooks work correctly', () => {
  const {result} = renderHook(() => useLogin());

  // test enter username
  act(() => result.current.setUsername('tuan'));
  expect(result.current.username).toEqual('tuan');

  // test enter password
  act(() => result.current.setPassword('123456'));
  expect(result.current.password).toEqual('123456');

  // test onSubmit function
  const onLogin = jest.fn();
  act(() => expect(() => result.current.onSubmit(onLogin)).toBeTruthy());
});
