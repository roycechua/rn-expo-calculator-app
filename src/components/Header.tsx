import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import Spacer from './Spacer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    title?: string;
    leftComponent?: JSX.Element;
    centerComponent?: JSX.Element;
    rightComponent?: JSX.Element;
    leftPress?: () => void;
    rightPress?: () => void;
    style?: ViewStyle
}

const Header = (props: Props) => {
    const { title, leftComponent, centerComponent, rightComponent, leftPress, rightPress, style } = props;
    return (
        <View style={[styles.row, style]}>
            {leftComponent ? leftComponent : <Spacer horizontal space={10} />}
            {centerComponent ? centerComponent : <Text style={{ color: '#FFFFFF', fontSize: 24 }}>{title}</Text>}
            {rightComponent ? rightComponent : <View>
                <TouchableOpacity onPress={() => { rightPress && rightPress() }}>
                    <MaterialCommunityIcons
                        name='trash-can'
                        size={24}
                        color='#FFF'
                    />
                </TouchableOpacity>
            </View>}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
