import {useRef, useCallback, useState } from 'react'
import { View, Text, ScrollView, PanResponder, Animated, Dimensions } from 'react-native'
import { Swipe, TobBar, FindNewMatch } from '../Components'
import GlobalStyle from '../Style/Global'


const { width, height } = Dimensions.get('window')


const Matches = () => {
    const [data, setdata] = useState([
        {
            id: 1,
            image: 'https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg',
            name: 'Iron Man'
        },
        {
            id: 2,
            image: 'https://wallpapers.com/images/hd/captain-america-android-0aqaztdwgpz41epy.jpg',
            name: 'Captain America'
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/736x/5b/f4/a9/5bf4a989ac96489a138b7f2dc223ebd0.jpg',
            name: 'Thor'
        },
        {
            id: 4,
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png',
            name: 'Hulk'
        },
        {
            id: 5,
            image: 'https://cdn.marvel.com/content/1x/042_bluebayou_digital_keyart_teaser_r16_lg.jpg',
            name: 'Black Widow'
        },

        {
            id: 7,
            image: 'https://ironusa.vtexassets.com/arquivos/ids/192798/090357_0.jpg?v=637909345411270000',
            name: 'Black Panther'
        },
        {
            id: 8,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk6X59owdnbxTGNb51bHbfRcYnivU_E2XAMTdqu4F-TM97X6MDSMQuJw5osRoLpfd8dY&usqp=CAU',
            name: 'Spider-Man'
        },
        {
            id: 9,
            image: 'https://i0.wp.com/www.orissapost.com/wp-content/uploads/2023/05/Elizabeth-Olsen-.jpg?fit=657%2C522&ssl=1',
            name: 'Scarlet Witch'
        },
        {
            id: 10,
            image: 'https://resizing.flixster.com/35FB4rNQ8DhnEGwwzx4KpAyN6RI=/206x305/v2/https://resizing.flixster.com/vK77TbbXQYgkJ2HpvPp1p_W0tj4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FkNDZiMzU2LTFmYTQtNDgwMS1iOWM5LTgxNTg2NDMxNjBmNi53ZWJw',
            name: 'Doctor Strange'
        }
    ])

    const swipe = useRef(new Animated.ValueXY()).current
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx, dy }) => {
            swipe.setValue({ x: dx, y: 0 })
            
            // console.log('dx', dx, 'dy', dy)
        },
        onPanResponderRelease: (_, { dx, dy }) => {
            let direction = Math.sign(dx);
            // console.log(direction)
           
            let isActionActive = Math.abs(dx) > 100;
            if (isActionActive) {
                Animated.timing(swipe, {
                    toValue: { x: dx*500, y: dy*500 },
                    useNativeDriver: true,
                    duration:500
                }).start(removeCard)
                if (dx > 0) { console.log('Accept') }
                else{console.log("Ignore")}
            } else {
                Animated.spring(swipe, {
                    toValue: { x: 0, y: dy> 0 ? 0 : dy
},
                    useNativeDriver: true,
                    friction:5
                }).start()
            }
            
            // console.log("Relesed", 'dx', 'dy', dy)
        },
    })
    const removeCard = useCallback(() => {
        setdata(preData => preData.slice(1))
        swipe.setValue({ x: 0, y: 0 })
        
    }, [swipe])
    return (
        <View style={[GlobalStyle.screenBG, {} ]} >
            <TobBar />
            {data?.length == 0 && <FindNewMatch />}
            {data?.length>0&& <View style={{
                alignItems: 'center', overflow: 'hidden',
                width: '100%', height: '88%', 
                alignSelf:'center'
            }} >
                {data.map((item, i) => {
                    let isFirst = i === 0;
                    let dragHandler = isFirst ? panResponder.panHandlers : "";
                    return <Swipe key={item.id} item={item} isFirst={isFirst} swipe={swipe} {...dragHandler} />
                }).reverse()}
            </View>}
        </View>
    )
}

export default Matches