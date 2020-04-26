import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type Options = {
  lazy?: boolean;
};

export function useFetchSession({ lazy = false }: Options) {
  const [token, setToken] = useState('');
  const fetchSession = useCallback(async () => {
    const storageValue = await AsyncStorage.getItem('@token');
    setToken(storageValue ?? '');
  }, []);
  useEffect(() => {
    if (lazy) return;
    fetchSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { token, fetchSession };
}
