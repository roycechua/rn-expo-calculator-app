import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import Constants from 'expo-constants';

interface Props {
    children?: ReactNode;
    style?: ViewStyle;
}

const SafeAreaContainer = (props: Props) => {
    const { children, style } = props;
    return <SafeAreaView style={[styles.container, style]}>
        {children}
    </SafeAreaView>;
};

export default SafeAreaContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
    },
});
