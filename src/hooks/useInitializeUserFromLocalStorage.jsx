import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/userSlice';

const useInitializeUserFromLocalStorage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Get user data from local storage
        const userData = localStorage.getItem('user');
        if (userData) {
            const user = JSON.parse(userData);
            dispatch(setUser(user));
        }
    }, [dispatch]);
};

export default useInitializeUserFromLocalStorage;
