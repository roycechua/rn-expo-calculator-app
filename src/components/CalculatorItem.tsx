import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CalculatorData } from '../screens/CalculatorScreen';

interface Props {
    data: CalculatorData;
    onPress: (data: CalculatorData) => void;
}

const CalculatorItem = (props: Props) => {
    const { data, onPress } = props;
    return (
        <Pressable
            onPress={() => {
                onPress && onPress(data);
            }}
            style={{
                flex: 1,
                margin: 1,
                padding: 25,
                borderRadius: 15,
                backgroundColor: '#3B3D43',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ color: '#FFF', fontSize: 24 }}>{data.value}</Text>
        </Pressable>
    );
};

export default CalculatorItem;

const styles = StyleSheet.create({});
