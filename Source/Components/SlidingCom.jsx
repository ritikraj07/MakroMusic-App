import {useState, useEffect } from "react"
import {View, Text, Image, StyleSheet, Dimensions } from "react-native"
import { color } from "../Style/Global"

const {width, height} = Dimensions.get('window')

const SlidingCom = () => {
    return (
        <View style={styles.container} >
            <Image style={{ width: 70, height: 70, borderRadius: 40, marginLeft: '60%' }} source={{ uri: 'https://th.bing.com/th/id/OIP.JtsckhxiSGGFYWuY2JIy4QHaE8?pid=ImgDet&rs=1' }} />
            
            <View style={{
                margin:0,
                marginTop: -80,
            }}>
                <Image style={{ width: 90, height: 90, borderRadius: 40, marginLeft: '5%' }}
                    source={{ uri: 'https://th.bing.com/th/id/R.860a1d9691734abf12e1374a1ca50fe5?rik=lgd4FT%2bmUHv2%2bA&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f10000%2fvelka%2f1-1260977459Qiyi.jpg&ehk=jv7obFjPc3rwCxcFlnDYZAuSaI0ArrQGDmAXavPC7mk%3d&risl=&pid=ImgRaw&r=0' }} />
                <View style={{
                    position: 'absolute',
                    backgroundColor: color.pelorous,
                    padding: 3, borderRadius: 20,
                    top: 70, left: 70, paddingHorizontal: 5,
                    borderColor: 'rgb(9,18,40)',
                    borderWidth: 3,
                }} >
                    <Text style={{ color:'rgb(9,18,40)', fontSize:16, fontWeight:'bold' }} >You're listening to the same song!</Text>
                </View>
            </View>
            <Image style={{ width: 70, height: 70, borderRadius: 40, margin:0, marginLeft: '70%'}}
                source={{ uri: 'https://th.bing.com/th/id/R.9aefc0761a0696fb340d5d66af265419?rik=6D1APljaH5JNmw&pid=ImgRaw&r=0' }} />

           

            <View>
                <Text style={{fontSize:30, color:'white', textAlign:'center', fontWeight:'bold'}} >Meet People listening to </Text>
                <Text style={{ fontSize: 30, color: '#40bcbf', textAlign: 'center', fontWeight: 'bold' }}>the same song</Text>
                <Text style={{ fontSize: 30, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>with you at the same time</Text>
            </View>
        </View>
    )
}

export default SlidingCom;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingVertical: 5,
        justifyContent:'space-between'
    }
})