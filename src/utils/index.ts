import AsyncStorage from '@react-native-async-storage/async-storage';
import { addUser } from '../api';

export const getUUID = async (os: string) => {
    try {
        const value = await AsyncStorage.getItem('@user_uuid');
        if (value !== null) {
            // value previously stored
            return value;
        } else {
            const { data } = await addUser(os);
            const uuid = data?.user?.uuid;
            await AsyncStorage.setItem('@user_uuid', uuid);
            return uuid;
        }
    } catch (error) {
        // saving error
        console.log(error);
    }
};
