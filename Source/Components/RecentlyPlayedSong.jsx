
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
const RecentlyPlayedSong = ({ item }) => {
    // item = item.item
    console.log(item)
    return (
        <View style={styles.box} >
            <Image style={styles.image} source={{ uri: 'https://imgs.search.brave.com/nCk7L3Iw5k0yPzzIk2t_zAYHcbiqMuJqa5Uc9D-jrb0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8x/OTEvS2VzYXJpeWEt/RnJvbS1CcmFobWFz/dHJhLUhpbmRpLTIw/MjItMjAyMjA3MTcw/OTI4MjAtNTAweDUw/MC5qcGc' }} />
            <View style={{flex:1, marginHorizontal:10 }} >
                <Text numberOfLines={1} style={styles.title}>{item.songName}</Text>
                <Text numberOfLines={1} style={styles.title}>{item.artistName}</Text>
            </View>
            <TouchableOpacity> 
                <AntDesign name='play' size={20} color={'white'} />
            </TouchableOpacity>
        </View>
    )
}

export default RecentlyPlayedSong;

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:5
    },
    image: {
        width: 50, 
        height:50
    },
    title: {
        color: 'white',
        fontSize: 16,
        
    }
})