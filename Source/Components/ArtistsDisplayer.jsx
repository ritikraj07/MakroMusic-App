import {useState} from 'react'
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('screen')

const ArtistsDisplayer = ({ artists, title, shape }) => {
    
    const newArtistsArray = []
    
    for (var i = 0; i < artists.length; i += 6){
        newArtistsArray.push(artists.slice(i, i+6))
    }

    console.log(shape)
    const CreateProfile = ({item}) => {
        return (
            <View style={{width:width/3, alignItems:'center', justifyContent:'center', marginVertical:10 }} >
                <Image resizeMode='center' source={{ uri: item.image }} style={[shape =="circle"?styles.circle:styles.square]} />
                <Text numberOfLines={1} style={{ textAlign: 'center', color: 'white' }} >{item.name}</Text>
                {shape=='square' && <Text numberOfLines={1} style={{ textAlign: 'center', color: 'white' }} >{item.name}</Text>}

            </View>
            
        )
    }
    
    const CreateAritstProfies = ({item}) =>{
        return (
            <FlatList
                data={item}
                renderItem={CreateProfile}
                numColumns={3}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                nestedScrollEnabled
            />
        )
    }
    
    return (

        <View style={{ paddingVertical: 10 }} >
            <Text style={{color:'white', fontSize:20, fontWeight:800, marginLeft:20 }} >{title}</Text>
            <FlatList

                data={newArtistsArray}
                renderItem={CreateAritstProfies}
                nestedScrollEnabled
                horizontal
            />
        </View>
    )
}

export default ArtistsDisplayer;


const styles = StyleSheet.create({
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    square: {
        width: 90,
        height: 90,
        borderRadius:5
    }
})