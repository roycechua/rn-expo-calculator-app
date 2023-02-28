import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaContainer from '../components/SafeAreaContainer';
import CalculatorItem from '../components/CalculatorItem';
import Spacer from '../components/Spacer';

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

const Calculator = () => {
    const [computedValue, setComputedValue] = useState(0);
    const [computationPreview, setComputationPreview] = useState("");

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
                    scrollEnabled={false}
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
                        <CalculatorItem data={item} index={index} onPress={(data) => {
                            switch (data.type) {
                                case "number": 
                                    setComputationPreview(prevValue => prevValue + data.value)
                                    break;
                                case "operation":
                                    setComputationPreview(prevValue => prevValue + data.value)
                                    break;
                                case "action": 
                                    if(data.value === "AC") {
                                        setComputationPreview("");
                                        setComputedValue(0);
                                    } else if (data.value === "=") {
                                        setComputedValue(eval(computationPreview))
                                    } else if (data.value === ".") {
                                        if(!isNaN(parseInt(computationPreview[computationPreview.length - 1]))) {
                                            setComputationPreview(prevValue => prevValue + data.value)
                                        } else {
                                            setComputationPreview(prevValue => prevValue + `0${data.value}`)
                                        }
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }} />
                    )}
                />
            </View>
        </SafeAreaContainer>
    );
};

export default Calculator;

const styles = StyleSheet.create({});
