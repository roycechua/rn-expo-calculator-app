import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import SafeAreaContainer from '../components/SafeAreaContainer';

const Calculator = () => {
    return (
        <SafeAreaContainer>
            <View
                style={{ flex: 1, backgroundColor: '#fff', padding: 5 }}
            ></View>
        </SafeAreaContainer>
    );
};

export default Calculator;

const styles = StyleSheet.create({});
