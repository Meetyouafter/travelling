const StorageService = {
  language: localStorage.getItem('language'),
  theme: localStorage.getItem('theme'),
  getLanguage() {
    return localStorage.getItem('language') || 'ru';
  },
  getTheme() {
    return localStorage.getItem('theme') || 'dark';
  },
  setItem(key:string, value:string) {
    if (!Object.keys(StorageService).includes(key)) {
      throw new Error('This key is invalid for localStorage. Please check it');
    } else {
      localStorage.setItem(key, value);
    }
  },
};

export default StorageService;
