import { StyleSheet } from 'react-native'

let color = {
    'mirage': '#141922',
    'french-greay': '#bbbdca',
    'pelorous': '#40bcbf',
    'scami': '#6a5fae',
    'nevada': '#606d77',
    'mulled-wine': '#46426b',
    'limed-spruce': '#394347',
    'port-gore': '#242347',
    'don-juan':'#594c4a'
}


const GlobalStyle = StyleSheet.create({
    screenBG: {
        backgroundColor: 'rgb(9,18,40)',
        flex:1
    }
})

export default GlobalStyle;

export {color}