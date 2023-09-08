import {useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { setUser, setprogress } from '../../Redux/Reducers/user'
import showToast from '../showToast';

const AddPhoto = () => {
    const [image1, setimage1] = useState()
    const [image2, setimage2] = useState()
    let dispatch = useDispatch()

    // const { image } = useSelector((state) => state.user)

    // console.log(image)

    async function GetImage(index) {
        const options = {
            title: 'Select an Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        try {
            const result = await launchImageLibrary(options);
            // console.log(result.assets[0])
            if (index == 1) {
                setimage1(result.assets[0])
            } else {
                setimage2(result.assets[0])
            }
         } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.box}>
                <Text style={styles.header} >
                    Add you top two photos!
                </Text>
                <Text style={styles.subtitle} >Users who have added two photos have a 43% high matching ratio!</Text>

                <View style={styles.btmBox}>
                    
                    <TouchableOpacity
                        onPress={() => {
                            GetImage(1)

                        }}
                        style={styles.imgBtm} >
                        
                        {image1?.uri != undefined && <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} source={{ uri: image1?.uri }} />}
                            
                        {image1?.uri == undefined && <Text style={{ color: '#40bcbf', fontSize: 50, }} >+</Text>}
                           
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => {
                        GetImage(0)

                    }} style={styles.imgBtm} >
                        
                        {image2?.uri != undefined && <Image resizeMode='contain' style={{ width: '100%', height: '100%' }} source={{ uri: image2?.uri }} />}

                        {image2?.uri == undefined && <Text style={{ color: '#40bcbf', fontSize: 50, }} >+</Text>}
                        
                    </TouchableOpacity>

                </View>


            </View>



            <TouchableOpacity style={styles.btm}
                onPress={() => {
                    if (!image1 && !image2) {
                        showToast('Please add atleast one picture', 'short')
                        return
                    }
                    let data = []
                    if (image1) data.push(image1)
                    if (image2) data.push(image2)
                    // console.log('data==>', data)
                    dispatch(setUser({ field:'image', value: data}))
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