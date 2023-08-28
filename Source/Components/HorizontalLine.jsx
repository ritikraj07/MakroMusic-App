import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
    return <View style={styles.horizontalLine} />;
};

const styles = StyleSheet.create({
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#a3a3c2',
        marginVertical: 10,
    },
});

export default HorizontalLine;
