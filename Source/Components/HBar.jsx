import { View, Text, StyleSheet } from 'react-native'

const HBar = ({ title = 'ok', rodSize = 20 }) => {
    rodSize= rodSize/2
    return (
        <View style={styles.container}>
            <View style={[styles.rod, { width: `${rodSize}%` }]} />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default HBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    rod: {
        height: 40,
        backgroundColor: '#00A8B6',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        marginLeft: 10,
        color: 'white',
        fontSize: 18
    },
});