import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HistoryItem } from '../screens/HistoryScreen';

interface Props {
    data: HistoryItem;
    index: number;
}

const HistoryListItem = (props: Props) => {
    const { data, index } = props;
    return (
        <View
            style={[
                styles.itemContainer,
                {
                    backgroundColor: '#4D5057',
                    borderBottomColor: '#3B3D4D',
                },
                index === 0
                    ? {
                          borderTopLeftRadius: 14,
                          borderTopRightRadius: 14,
                      }
                    : {},
            ]}
        >
            <Text style={styles.itemText}>{data.preview}</Text>
            <Text style={styles.itemText}>= {data.result}</Text>
        </View>
    );
};

export default HistoryListItem;

const styles = StyleSheet.create({
    itemContainer: {
        borderBottomWidth: 2,
        marginHorizontal: 10,
        padding: 20,
    },
    itemText: {
        color: '#FFF',
        fontSize: 20,
    },
});
