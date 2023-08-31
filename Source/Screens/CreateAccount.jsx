import { useState } from 'react'
import { ScrollView, Image, View, Text, StyleSheet, TextInput, SafeAreaView, ToastAndroid, TouchableOpacity, } from 'react-native';
import { Input, Icon, CheckBox } from '@rneui/themed';
import GlobalStyle from '../Style/Global';
import { LoadingScreen, showToast } from '../Components';

const CreateAccount = ({navigation}) => {
    const [tab, setTab] = useState(0)
    const [selectedIndex, setIndex] = useState(0);
    const [user, setUser] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        gender: 'nale',
        age: '',

    })
    let logo = 'https://cdn-images-1.medium.com/fit/t/1600/480/1*FpqeaQi8Q1siHs9M2gEMZA.png'
    const handleInput = (field, value) => {
        setUser((prevUser) => ({
            ...prevUser,
            [field]: value,
        }));
    };

    function nextPart() {

        if (user.name.length < 1 || user.age.length < 1 || user.gender.length < 1) {
            showToast("please fill all data", 'short')
            return
        }
        setTab(1)
    }
    return (
        <ScrollView contentContainerStyle={[GlobalStyle.screenBG, { alignItems: 'center', paddingHorizontal: 10 }]}>
            <Image style={{
                width: 200,
                height: 70
            }}
                resizeMode='contain'
                source={{ uri: logo }} />
          {tab==0 &&  <SafeAreaView style={styles.container}  >
                <Text style={styles.lable}>Name</Text>
                <Input
                    style={styles.input}
                    placeholder='Enter Your Name'
                    onChange={(e) => handleInput('name', e.nativeEvent.text)}
                />
                <Text style={styles.lable}>Age</Text>
                <Input
                    style={styles.input}
                    placeholder='Enter Your Age'
                    onChange={(e) => handleInput('age', e.nativeEvent.text)}
                    keyboardType='number-pad'
                />

                <Text style={styles.lable}>Select Your Gender</Text>

                <CheckBox
                    checked={selectedIndex === 0}
                    onPress={() => {
                        handleInput('gender', 'male')
                        setIndex(0)
                    }}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title={'Male'}
                />
                <CheckBox
                    checked={selectedIndex === 1}
                    onPress={() => {
                        handleInput('gender', 'female')
                        setIndex(1)
                    }}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    title={'Female'}
                />

                <TouchableOpacity style={styles.btm} onPress={() => {
                    nextPart()
                }} >
                    <Text style={styles.btmText} > Next </Text>
                </TouchableOpacity>

            </SafeAreaView>}

           {tab ==1 && <SafeAreaView style={{width:'100%', alignItems:'center' }} >
                <View style={styles.inputContainer} >
                    <Image style={styles.logo} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png' }} />
                    <TouchableOpacity style={styles.Btm}
                        onPress={() => { navigation.navigate('CreateAccWithEmailPassword') }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 22,
                            paddingHorizontal: 10
                        }}> Continue With Email </Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>}

            

        </ScrollView>
    )
}

export default CreateAccount;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10

    },
    input: {
        width: '100%',
        color: 'black',
        margin: 0,
        padding: 0,
        marginTop: -10

    },
    lable: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10
    },
    btm: {
        backgroundColor: '#00A8B6',
        width: 70,
        alignSelf: 'center',
        borderRadius: 2,
        padding:5
        
    },
    btmText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        
    },
    logo: {
        width: 60,
        height:'100%'
    },
    inputContainer: {
        width: '95%',
        flexDirection: 'row',
        backgroundColor: '#00A8B6',
        alignItems: 'center',
        height: 55,
    },
    Btm: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '82%',
        height: '100%'
    }
})