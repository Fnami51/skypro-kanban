import { createContext, useState, useContext, useEffect } from 'react';

// Создаем контекст
export const UserContext = createContext(null);

// Создаем провайдер для контекста
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    // Обновление isAuth при изменении токена
    useEffect(() => {
        setIsAuth(!!token);
    }, [token]);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken, isAuth }}>
            {children}
        </UserContext.Provider>
    );
};

// Хук для использования контекста
export const useUser = () => useContext(UserContext);