import { View, Text, TouchableOpacity } from 'react-native'


export default function RadioBtm({ item, GP, setGP }){
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 8,
        }}
            onPress={()=>setGP(item.id)}
        >
            <Text style={{
                color: 'white',
                fontSize: 16,
                fontWeight:'500'
            }} >{item.option}</Text>
            <View
                style={[{
                    width: 25,
                    height: 25,
                    borderWidth: 2,
                    borderRadius: 20,
                    borderColor: '#00464d',
                    backgroundColor: '#002f33'
                    
                }, GP == item.id ? { borderWidth: 5, borderColor:'#00A8B6'  }:{} ]}
            >

            </View>
        </TouchableOpacity>
    )
}