import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Get from local storage and store in state
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : initialValue;
  const [value, setValue] = useState(initial);

  // Create a new setter function that also updates local storage
  const setLocalStorage = newValue => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorage];
};

export default useLocalStorage;