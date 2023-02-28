import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
    space: number;
    horizontal?: boolean;
}

const Spacer = (props: Props) => {
    const { space, horizontal } = props;
    return (
        <View
            style={{
                margin: space,
                flexDirection: horizontal ? 'row' : 'column',
            }}
        />
    );
};

export default Spacer;

const styles = StyleSheet.create({});
