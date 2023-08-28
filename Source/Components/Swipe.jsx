import { } from 'react'
import {} from 'react-native'
import { View, Text, Dimensions, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const {width, height} = Dimensions.get('window')

const Swipe = ({ item, isFirst, swipe, ...rest }) => {

    
    const Rotate = swipe.x.interpolate({
        inputRange: [-100, 0, 100],
        outputRange:['-8deg', '0deg', '8deg']
    })
    
    const AcceptOpacity = swipe.x.interpolate({
        inputRange: [10, 100],
        outputRange: [0, 1],
        extrapolate:'clamp'
    })

    const IgnoreOpacity = swipe.x.interpolate({
        inputRange: [-100, -10],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })

    const ChoiceText = ({bool}) => {
        return (<Animated.View style={[
            { position: 'absolute', height: '100%', width: '40%', },
            bool ? { left: 0, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, opacity: AcceptOpacity } :
                { right: 0, borderTopRightRadius: 10, borderBottomRightRadius: 10, opacity:IgnoreOpacity}
        ]}>
            <LinearGradient
            colors={bool ? ['rgba(104, 223, 104, 0.6)', 'transparent'] : ['transparent', 'rgba(240, 80, 40, 0.6)']}
            style={[
                { position: 'absolute', height: '100%', width: '100%', },
                bool ? { left: 0, borderTopLeftRadius: 10, borderBottomLeftRadius:10 } : { right: 0, borderTopRightRadius: 10, borderBottomRightRadius:10 }
            ]}
            start={bool ? { x: 0, y: 0.5 } : { x: -0.1, y: 0.5 }}
            end={bool ? { x: 1, y: 0.5 } : { x: 1, y: 0.5 }}
        >
            <Text
                style={[
                    bool ? { color: 'rgba(104, 223, 104, 1)', left: 50 } : { color: 'red', right: 50 },
                    { fontSize: 24, fontWeight: 'bold', position: 'absolute', top: 50 }
                ]}
            >
                {bool ? 'Accept' : 'Ignore'}
            </Text>
            </LinearGradient>
        </Animated.View>
)
    }


    return (
        <Animated.View
            key={item.id}
            style={[
                {
                    width: '90%',
                    height: '100%',
                    alignSelf: 'center',
                    position: 'absolute',
                    borderRadius: 10,
                    borderWidth: 0.5, borderColor: '#00A8B6',
                },
                 { transform: [...swipe.getTranslateTransform(), {rotate: Rotate}] },
            ]}
            {...rest}
        >
        
            <Image resizeMode='contain' source={{ uri: item.image }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.5)']} style={{ width: '100%', height: '100%', borderRadius: 10, position: 'absolute' }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 25,
                        position: 'absolute',
                        bottom: 20,
                        left: 10,
                    }}
                >
                    {item.name}
                </Text>

            </LinearGradient>
            <ChoiceText bool={true} />
            <ChoiceText bool={false} />
            <View style={{
                width: '100%',
                alignItems: 'center', padding: 5,
                paddingTop: 20, backgroundColor: 'white',
                marginTop:10, borderRadius:10
            }} >
                <TouchableOpacity style={styles.btm} >
                    <Text style={styles.btmText} > Your Match Ratio is 23% </Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

export default Swipe;


const styles = StyleSheet.create({
    btm: {
        backgroundColor: '#00A8B6',  justifyContent:'center',
        width: '90%',
        height: 50,
        borderRadius: 5,
        paddingLeft:10
    },
    btmText: {
        fontSize: 18,
        color: 'rgb(9, 18, 40)',
        fontWeight:'bold'
    }
})