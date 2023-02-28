import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { CalculatorData } from '../screens/CalculatorScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    data: CalculatorData;
    index: number;
    onPress: (data: CalculatorData) => void;
}

const CalculatorItem = (props: Props) => {
    const { data, index, onPress } = props;

    const generateButtonColor = (index: number) => {
        if (index < 3) {
            return '#5B5E67';
        } else if (
            index === 3 ||
            index === 7 ||
            index === 11 ||
            index === 15 ||
            index === 19
        ) {
            return '#3764B4';
        } else {
            return '#3B3D43';
        }
    };

    return (
        <TouchableOpacity
            onPress={() => {
                onPress && onPress(data);
            }}
            style={{
                flex: 1,
                margin: 1,
                padding: 25,
                borderRadius: 15,
                backgroundColor: generateButtonColor(index),
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {data.icon ? <MaterialCommunityIcons name={data.icon} size={24} color="#FFF" /> : <Text style={{ color: '#FFF', fontSize: 24 }}>{data.value}</Text>}
        </TouchableOpacity>
    );
};

export default CalculatorItem;

const styles = StyleSheet.create({});
