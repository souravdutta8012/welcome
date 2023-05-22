export const getLight = () => {
    return localStorage.getItem('theme') === 'light';
};

export const setTheme = (value: string) => {
    localStorage.setItem('theme', value);
    window.location.reload();
};
