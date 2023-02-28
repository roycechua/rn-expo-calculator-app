import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaContainer from '../components/SafeAreaContainer';
import CalculatorItem from '../components/CalculatorItem';
import Spacer from '../components/Spacer';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/MainStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type CalculatorData = {
    value: string;
    type: string;
};

const CALCULATOR_CONTENT: CalculatorData[] = [
    { value: 'AC', type: 'action' },
    { value: '+/-', type: 'action' },
    { value: '%', type: 'operation' },
    { value: '/', type: 'operation' },
    { value: '7', type: 'number' },
    { value: '8', type: 'number' },
    { value: '9', type: 'number' },
    { value: 'x', type: 'operation' },
    { value: '4', type: 'number' },
    { value: '5', type: 'number' },
    { value: '6', type: 'number' },
    { value: '-', type: 'operation' },
    { value: '1', type: 'number' },
    { value: '2', type: 'number' },
    { value: '3', type: 'number' },
    { value: '+', type: 'operation' },
    { value: '.', type: 'action' },
    { value: '0', type: 'number' },
    { value: 'Q', type: 'action' },
    { value: '=', type: 'action' },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Calculator'>;

const Calculator = (props: Props) => {
    const navigation = useNavigation<Props>();

    const [computedValue, setComputedValue] = useState(0);
    const [computationPreview, setComputationPreview] = useState('');

    const handleCalculatorPress = (data) => {
        switch (data.type) {
            case 'number':
                setComputationPreview((prevValue) => prevValue + data.value);
                break;
            case 'operation':
                setComputationPreview((prevValue) => prevValue + data.value);
                break;
            case 'action':
                if (data.value === 'AC') {
                    setComputationPreview('');
                    setComputedValue(0);
                } else if (data.value === '=') {
                    let finalComputationString = computationPreview;
                    if (finalComputationString.includes('x')) {
                        finalComputationString = finalComputationString.replaceAll('x','*')
                    }
                    setComputedValue(eval(finalComputationString));
                } else if (data.value === '.') {
                    if (
                        !isNaN(
                            parseInt(
                                computationPreview[
                                    computationPreview.length - 1
                                ]
                            )
                        )
                    ) {
                        setComputationPreview(
                            (prevValue) => prevValue + data.value
                        );
                    } else {
                        setComputationPreview(
                            (prevValue) => prevValue + `0${data.value}`
                        );
                    }
                } else if (data.value === 'Q') {
                    navigation.navigate('History');
                }
                break;
            default:
                break;
        }
    };

    return (
        <SafeAreaContainer>
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#292A2D',
                    padding: 5,
                    justifyContent: 'flex-end',
                }}
            >
                <FlatList
                    data={CALCULATOR_CONTENT}
                    numColumns={4}
                    overScrollMode='never'
                    // scrollEnabled={false}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.value}
                    ListHeaderComponent={() => (
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'flex-end',
                                padding: 20,
                            }}
                        >
                            <Text style={{ fontSize: 36, color: '#5B5E67' }}>
                                {computationPreview}
                            </Text>
                            <Spacer space={5} />
                            <Text style={{ fontSize: 80, color: '#FFF' }}>
                                {computedValue}
                            </Text>
                        </View>
                    )}
                    renderItem={({ item, index }) => (
                        <CalculatorItem
                            data={item}
                            index={index}
                            onPress={handleCalculatorPress}
                        />
                    )}
                />
            </View>
        </SafeAreaContainer>
    );
};

export default Calculator;

const styles = StyleSheet.create({});