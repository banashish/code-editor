import { useEffect, useState } from "react";

const useLocalstorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalstorage;
