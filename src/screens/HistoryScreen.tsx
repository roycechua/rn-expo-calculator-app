import { StyleSheet, View } from 'react-native';
import React from 'react';
import SafeAreaContainer from '../components/SafeAreaContainer';
import Spacer from '../components/Spacer';
import Header from '../components/Header';

const HistoryScreen = () => {
    return (
        <SafeAreaContainer>
            <View style={[styles.container, { backgroundColor: '#292A2D' }]}>
                <Spacer space={10} />
                <Header title='History' rightPress={() => {}} />
            </View>
        </SafeAreaContainer>
    );
};

export default HistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
