import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const EmptyHistoryPlaceholder = () => {
    return (
        <View
            style={{
                flex: 1,
                padding: 50,
                alignItems: 'center',
                backgroundColor: '#4D5057',
                margin: 10,
                borderRadius: 15,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    color: '#FFF',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                Empty! {'\n'} Do some calculations
            </Text>
        </View>
    );
};

export default EmptyHistoryPlaceholder;

const styles = StyleSheet.create({});
