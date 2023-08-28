import { useState, useRef } from 'react'
import { View, Text, Animated, StyleSheet, ScrollView, PanResponder, Dimensions, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import RadioBtm from './RadioBtm';
import HorizontalLine from './HorizontalLine';

const { width, height } = Dimensions.get('window')
const Filter = () => {
    const [topValue, setTopValue] = useState(0);
    const [GP, setGP] = useState(4)
    const [Age, setAge] = useState({ min: 18, max: 65 })
    const [leftValue, setLeftValue] = useState(0);
    const [rightValue, setRightValue] = useState(100);
    const [locationRange, setlocationRange] = useState(100)
    const [matchingTypes, setMatchingTypes] = useState([
        { type: "Track", des: 'Match with people who are listening to me same song with you at the same time', status: 'false' },
        { type: 'Artist', des: "Match with people who are listening to same artist with you at the same time", status: false },
        { type: 'Recently Played', des: 'Match with people who have listened to the same song before', status: false }
    ])

    const drag = useRef(new Animated.ValueXY()).current


    const GenderPreference = [
        { id: 1, option: 'Men', status: false },
        { id: 2, option: 'Women', status: false },
        { id: 3, option: 'Non-Binary', status: false },
        { id: 4, option: 'All', status: true },
    ]

    const filterPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dy }) => {
            const newValue = topValue + dy;
            console.log(newValue, "===>")
            if (newValue >= 0 && newValue <= 800) {
                setTopValue(newValue);
            }
        },
        onPanResponderRelease: (_, { dy }) => {
            const newValue = topValue + dy;
            if (newValue>300) {
                // Close the filter panel
                setTopValue(800);
            } else {
                // Reset topValue
                setTopValue(0);
            }
        },
    });


    const handleCloseFilter = () => {
        Animated.spring(drag, {
            useNativeDriver: true,
            toValue: 0, // Set the top value to the desired closing top position
            friction: 5,
        }).start();
    };






    const leftSliderPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
            // console.log(Math.floor(leftValue))
            let m = Math.floor(leftValue / 2 + 18)
            setAge({ ...Age, min: m, })
            const newValue = leftValue + (dx / (width - 40)) * 100;
            if (newValue >= 0 && newValue <= rightValue - 7) {
                setLeftValue(newValue);
            }
        },
    });

    const rightSliderPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
            // console.log(Math.floor(rightValue))
            let m = Math.floor(rightValue / 2.1 + 18)
            setAge({ ...Age, max: m, })
            const newValue = rightValue + (dx / (width - 40)) * 100;
            if (newValue >= leftValue + 10 && newValue <= 100) {
                setRightValue(newValue);
            }
        },
    });

    const backgroundPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
            // You can set the background color logic here based on dx value
        },
    });


    const locationSliderPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
            // console.log(Math.floor(locationRange))
            let m = Math.floor(locationRange / 2.1 + 18)

            const newValue = locationRange + (dx / (width - 40)) * 100;
            if (newValue >= 1 && newValue <= 100) {
                setlocationRange(newValue);
            }
        },
    });


    const locationbackgroundPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx }) => {
            // You can set the background color logic here based on dx value
        },
    });
    return (<Animated.View
        style={[
            {
                zIndex: 10,
                height: `100%`,
                position: 'absolute',
                backgroundColor: 'rgb(9,18,40)',
                width: '100%',
                padding: 10,
                paddingHorizontal: 15,
            },
            { top: topValue },
        ]}
        {...filterPanResponder.panHandlers}
    >


        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', justifyContent: 'center', marginBottom: 20 }} >
            <Entypo
                name="cross"
                size={30}
                color="white"
                style={{ position: 'absolute', left: 10 }}
                onPress={handleCloseFilter}
            />

            <Text style={[styles.lable,]} >Matching filters</Text>
        </View>
        <ScrollView>
            <View>
                <View>
                    <Text style={styles.lable} >Gender preference</Text>
                    <Text style={[styles.subtitle]} >Who do you want to match with?</Text>
                </View>
                <View style={{ marginVertical: 10 }} >
                    {GenderPreference.map((item) => {
                        return <RadioBtm key={item.id} item={item} GP={GP} setGP={setGP} />
                    })}
                </View>
            </View>
            <HorizontalLine />

            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text style={styles.lable} >Age</Text>
                    <Text style={[styles.subtitle, { fontSize: 18 }]} >{Age.min}-{Age.max}{Age.max >= 65 ? "+" : ""}</Text>
                </View>
                <Text style={styles.subtitle} >Set the age range you want to match</Text>
                <View style={styles.container}>
                    {/* honrizontal line */}
                    <View style={styles.sliderHr}></View>
                    {/* left slider button */}
                    <Animated.View {...leftSliderPanResponder.panHandlers} style={[styles.sliderBtm, { left: leftValue + '%' }]}></Animated.View>
                    {/* right slider button */}
                    <Animated.View {...rightSliderPanResponder.panHandlers} style={[styles.sliderBtm, { right: 100 - rightValue + '%' }]}></Animated.View>
                    {/* background changer */}
                    <Animated.View
                        {...backgroundPanResponder.panHandlers}
                        style={[
                            styles.sliderBg,
                            {
                                width: `${rightValue - leftValue}%`,
                                left: `${leftValue}%`,
                            },
                        ]}
                    ></Animated.View>
                </View>
            </View>

            <HorizontalLine />
            {/* Location */}
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text style={styles.lable} >Location</Text>
                    <Text style={[styles.subtitle, { fontSize: 18 }]} > {Math.floor(locationRange * 5)}{Math.floor(locationRange * 5) >= 500 ? "+" : ""}  Km </Text>
                </View>
                <Text style={styles.subtitle} >Set the maximum distance you want to match</Text>

                {/* Location ranger */}

                <View style={styles.container}>
                    {/* honrizontal line */}
                    <View style={styles.sliderHr}></View>
                    {/* right slider button */}
                    <Animated.View {...locationSliderPanResponder.panHandlers} style={[styles.sliderBtm, { right: 100 - locationRange + '%' }]}></Animated.View>
                    {/* background changer */}
                    <Animated.View
                        {...locationbackgroundPanResponder.panHandlers}
                        style={[
                            styles.sliderBg,
                            {
                                width: `${locationRange - 0}%`,
                                left: `${0}%`,
                            },
                        ]}
                    ></Animated.View>
                </View>


            </View>

            <HorizontalLine />

            <View>
                <Text style={styles.lable} >Matching Type</Text>
                {matchingTypes.map((item) => {
                    return (
                        <View key={item.type} style={{ marginVertical: 10 }} >
                            <View style={{ width: '80%' }} >
                                <Text style={{ color: 'white', fontSize: 16 }} >{item.type}</Text>
                                <Text>{item.des}</Text>
                            </View>
                            <View>

                            </View>
                        </View>
                    )
                })}
            </View>

            <TouchableOpacity style={{
                backgroundColor: '#00A8B6',
                width: '60%',
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center'

            }} >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 14 }} >Save</Text>
            </TouchableOpacity>

        </ScrollView>

    </Animated.View>)
}

export default Filter;


const styles = StyleSheet.create({
    lable: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#a3a3c2',
        marginTop: 10

    },
    container: {
        width: '95%',
        margin: 5,
        marginVertical: 20,
        position: 'relative',
        justifyContent: 'center',
        paddingHorizontal: 5

    },
    sliderHr: {
        width: '100%',
        backgroundColor: '#a3a3c2',
        height: 1,
        position: 'relative'
    },
    sliderBtm: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 20,
        zIndex: 2,
        color: 'white',
        backgroundColor: 'white'
    },
    sliderBg: {
        backgroundColor: '#00A8B6',
        position: 'absolute',
        width: '10%',
        height: 4,
        zIndex: 1
    },



})