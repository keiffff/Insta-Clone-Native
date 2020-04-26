import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export function useFetchSession() {
  const [token, setToken] = useState('');
  const fetchSession = useCallback(async () => {
    const storageValue = await AsyncStorage.getItem('@token');
    setToken(storageValue ?? '');
  }, []);
  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  return token;
}
