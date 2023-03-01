import { FlatList, StyleSheet, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import SafeAreaContainer from '../components/SafeAreaContainer';
import Spacer from '../components/Spacer';
import Header from '../components/Header';
import EmptyHistoryPlaceholder from '../components/EmptyHistoryPlaceholder';
import HistoryListItem from '../components/HistoryListItem';
import { deleteTransaction, getTransaction } from '../api';

export type HistoryItem = {
    calculation: string;
    result: string | number;
};

const HistoryScreen = () => {
    const [historyList, setHistoryList] = useState<HistoryItem[]>([
        // { preview: '4 - 5', result: 1 },
        // { preview: '18 + 43 x 59', result: 2555 },
    ]);

    const fetchHistory = async () => {
        try {
            const { data } = await getTransaction(
                'e841de78-192a-4393-8616-9f07b203df31'
            );
            setHistoryList(data.transactions);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClearHistory = async () => {
        try {
            await Promise.all([
                deleteTransaction('e841de78-192a-4393-8616-9f07b203df31'),
                fetchHistory(),
            ]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <SafeAreaContainer>
            <View style={[styles.container, { backgroundColor: '#292A2D' }]}>
                <Spacer space={10} />
                <Header
                    title='History'
                    rightPress={() => {
                        Alert.alert(
                            'Clear History',
                            "You're about to clear your entire history. Are you sure you want to do this?",
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => {},
                                    style: 'cancel',
                                },
                                {
                                    text: 'Confirm',
                                    onPress: () => handleClearHistory(),
                                },
                            ]
                        );
                    }}
                />
                <Spacer space={10} />
                <FlatList
                    data={historyList}
                    keyExtractor={(item, index) => index.toString()}
                    ListEmptyComponent={<EmptyHistoryPlaceholder />}
                    renderItem={({ item, index }) => {
                        return <HistoryListItem data={item} index={index} />;
                    }}
                />
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
