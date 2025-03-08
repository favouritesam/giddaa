export const getSessionItem = (key: string): string | null => {
    return typeof window !== "undefined" && window.sessionStorage
        ? sessionStorage.getItem(key)
        : null;
};

export const removeItem = (key: string): void => {
    if (typeof window !== "undefined") {
        sessionStorage.removeItem(key);
    }
};
export const setSessionItem = (key: string, value: string): void => {
    if (typeof window !== "undefined") {
        sessionStorage.setItem(key, value);
    }
};

export const storeUserToken = (token: string): void => {
    setSessionItem('token', token);
};

export const getUserToken = (): string | null => {
    return typeof window !== "undefined" && window.sessionStorage ? sessionStorage.getItem("token") || "" : ""
};
export default function getSiteName() {
    return typeof window !== "undefined" && window.sessionStorage ? sessionStorage.getItem("siteName") || "" : ""
}