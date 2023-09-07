import { } from 'react'
import { View, Text, Platform, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch, useSelector } from 'react-redux'
import { setprogress } from '../../Redux/Reducers/user'
const Location = () => {

    let dispatch = useDispatch()

    return (
        <SafeAreaView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container} >

            <View style={styles.box}>
                
                <View style={styles.circleBox} >
                    <View style={styles.circleBox} >

                        <View style={styles.circleBox} >
                            <View style={styles.circleBox} >
                                <View style={styles.circleBox} >

                                    <View style={styles.circleBox} >
                                        <View style={[styles.circleBox1]} >
                                            <Entypo name='location-pin' color={'#40bcbf'} size={80} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
               
                <View style={styles.box2} >
                    <View style={{alignItems:'center', justifyContent:'center'}} >
                        <Text style={styles.header}> Allow Location</Text>
                        <Text style={styles.subtitle} >We use your location to show your nearby matches</Text>
                    </View>
                    <View>

                    </View>
                </View>
               
            </View>

            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    dispatch(setprogress())
                }}
            >
                <Text style={styles.btmText}>Continue</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Location;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 20,
      
    },

    box: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height:400
    },
    box2: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        alignItems:'center'
    },
    circleBox: {
        width: '100%',
        height: '100%',
        borderRadius: 500,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#40bcbf",
        padding: 20,
        position: 'absolute',
        

    },
    circleBox1: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#394347',
        borderColor:'#46426b'
        
    },
    header: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginVertical: 5,
    },

    subtitle: {
        color: '#bbbdca',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5,
        marginHorizontal: 20,
        textAlign:'center'
    },
    inputBox: {
        borderColor: '#40bcbf',
        borderWidth: 3,
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8

    },
    input: {
        fontSize: 20,
        color: 'white',
        flex: 1,
        alignContent: 'center'
    },

    btm: {
        width: '100%',
        height: 50,
        backgroundColor: '#40bcbf',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,

    },
    btmText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(9,18,40)'
    }




})