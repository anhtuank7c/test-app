import {useCallback, useState} from 'react';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = useCallback(
    (onLogin: (username: String, password: String) => void) => {
      if (username.trim().length === 0) {
        return;
      }
      if (password.trim().length === 0) {
        return;
      }
      try {
        setSubmitting(true);
        onLogin(username, password);
        setSubmitting(false);
      } catch (e) {
        setSubmitting(false);
      }
    },
    [username, password],
  );

  return {
    username,
    password,
    isSubmitting,
    setSubmitting,
    setUsername,
    setPassword,
    onSubmit,
  };
};
