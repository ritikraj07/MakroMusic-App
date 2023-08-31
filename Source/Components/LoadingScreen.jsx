import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import {useSelector} from 'react-redux'
const {width, height} = Dimensions.get('window')



const LoadingScreen = () => {
    let isloading = useSelector((state) => state.loading.value)
    // console.log(useSelector((state)=>state), "<====")
    console.log('isloading', isloading)
    return (
        <View style={[ isloading && {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: height/50,
            left: width/50,
            width: width,
            height:height
        }]}>
          {isloading &&  <ActivityIndicator size="large" color="#00A8B6" />}
        </View>
    );
};

export default LoadingScreen;
