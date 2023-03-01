import React from 'react';
import MainStack from './src/navigation/MainStack';
import FlashMessage from 'react-native-flash-message';

export default function App() {
    return (
        <>
            <MainStack />
            <FlashMessage position='top' />
        </>
    );
}
