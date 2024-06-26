export const getLocalStorageItem = <T>(key: string): T => {
  const savedTodos = localStorage.getItem(key);
  return savedTodos ? JSON.parse(savedTodos) : [];
};

export const setLocalStorageItem = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
