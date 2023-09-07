import { } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { setprogress } from '../../Redux/Reducers/user'
const AddPhoto = () => {
    let dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                    Add you top two photos!
                </Text>
                <Text style={styles.subtitle} >Users who have added two photos have a 43% high matching ratio!</Text>

                <View style={styles.btmBox}>
                    
                    <TouchableOpacity style={styles.imgBtm} >
                        <Text style={{ color:'#40bcbf', fontSize:50, }} >+</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.imgBtm} >
                        <Text style={{ color: '#40bcbf', fontSize: 50, }} >+</Text>
                    </TouchableOpacity>

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

export default AddPhoto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 20
    },

    box: {
        marginTop: 30
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
    },
    btmBox: {
        flexDirection: 'row',
        marginTop: 10
    },
    imgBtm: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#bbbdca',
        backgroundColor: '#242347',
        flex: 1,
        height: 140,
        margin: 8,
        borderRadius: 10,
        

    },
   

    btm: {
        width: '100%',
        height: 50,
        backgroundColor: '#40bcbf',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    },
    btmText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(9,18,40)'
    }




})