import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import SafeAreaContainer from '../components/SafeAreaContainer';

const HomeScreen = () => {
    return (
        <SafeAreaContainer>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Text>HomeScreen</Text>
            </View>
        </SafeAreaContainer>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
