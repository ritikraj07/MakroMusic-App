import { createSlice } from '@reduxjs/toolkit';

let user = {
    image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864',
    name: "Ritik Raj",
    isPremiumUser: true,
    username: '@ritikraj07',
    spotifyId: '',
    instagram: false,
    about: 'Everthing thing is ok ',
    isloggedIn:true,
    artists: [
        {
            id: 1,
            name: 'Arijit Singh',
            image: 'https://imgs.search.brave.com/G3jp9cl5gQ2Cmhq-PAp5yaHRBOk2LavYyfq5OewhCFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU5/MzQ2NTJzLmpwZw'
        },
        {
            id: 2,
            name: 'Pritam',
            image: 'https://imgs.search.brave.com/OjfrEgG2JyRKAFn7Dw56SevBHJ6PYbZAnQ3970ryxDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1ByaXRhbV9D/aGFrcmFib3J0eV9h/dF90aGVfNXRoX0dp/TUFfQXdhcmRzLmpw/Zw'
        },
        {
            id: 3,
            name: 'KK',
            image: 'https://imgs.search.brave.com/kQS7wmgWjSQd6MHeKvDkfU10ngu7beTqHCTnz4Tjoc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL0tLXzUw/MHg1MDAuanBn'
        },
        {
            id: 4,
            name: 'Jubin Nautiyal',
            image: 'https://imgs.search.brave.com/lovCzpgaCdrQq57ImUt0fuI6IX_k6G9hiB3YyJMyA4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2p1bi90/b3B0ZW5zb25nc29m/anViaW5uYXV0aXlh/bHlvdW11c3RsaXN0/ZW50b29uaGlzYmly/dGhkYXkxMTY1NTE4/OTExOS5qcGc'
        },
        {
            id: 5,
            name: 'Aanchal Tyagi',
            image: 'https://imgs.search.brave.com/5DAKQsAkI4DTGb3cCszbKk9iLdbBzaAd3iC-w9WJHzY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNS9NcmluYWxp/bmktVHlhZ2kuanBn'
        },
        {
            id: 6,
            name: 'Honey Singh',
            image: 'https://imgs.search.brave.com/L6xBXj915RNv6_UACmJp4ZSXVmHHTX2EKYXnL8n8BzI/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzAxL1lvLVlvLUhv/bmV5LVNpbmdoLTMu/anBn'
        },
        {
            id: 7,
            name: 'Badshah',
            image: 'https://imgs.search.brave.com/gZDgEfB7vvwUgOMXUG0CjInoi19VmOC5HKt5vQL_KQU/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA5L0JhZHNoYWgu/anBn'
        },
        {
            id: 8,
            name: 'Alka Yagnik',
            image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
        },
        {
            id: 9,
            name: 'Shreya Ghoshal',
            image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
        },
        {
            id: 10,
            name: 'Arijit Singh',
            image: 'https://imgs.search.brave.com/G3jp9cl5gQ2Cmhq-PAp5yaHRBOk2LavYyfq5OewhCFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU5/MzQ2NTJzLmpwZw'
        },
        {
            id: 11,
            name: 'Pritam',
            image: 'https://imgs.search.brave.com/OjfrEgG2JyRKAFn7Dw56SevBHJ6PYbZAnQ3970ryxDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1ByaXRhbV9D/aGFrcmFib3J0eV9h/dF90aGVfNXRoX0dp/TUFfQXdhcmRzLmpw/Zw'
        },
        {
            id: 12,
            name: 'KK',
            image: 'https://imgs.search.brave.com/kQS7wmgWjSQd6MHeKvDkfU10ngu7beTqHCTnz4Tjoc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL0tLXzUw/MHg1MDAuanBn'
        },
        {
            id: 13,
            name: 'Jubin Nautiyal',
            image: 'https://imgs.search.brave.com/lovCzpgaCdrQq57ImUt0fuI6IX_k6G9hiB3YyJMyA4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2p1bi90/b3B0ZW5zb25nc29m/anViaW5uYXV0aXlh/bHlvdW11c3RsaXN0/ZW50b29uaGlzYmly/dGhkYXkxMTY1NTE4/OTExOS5qcGc'
        },
        {
            id: 14,
            name: 'Aanchal Tyagi',
            image: 'https://imgs.search.brave.com/5DAKQsAkI4DTGb3cCszbKk9iLdbBzaAd3iC-w9WJHzY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNS9NcmluYWxp/bmktVHlhZ2kuanBn'
        },
        {
            id: 15,
            name: 'Honey Singh',
            image: 'https://imgs.search.brave.com/L6xBXj915RNv6_UACmJp4ZSXVmHHTX2EKYXnL8n8BzI/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzAxL1lvLVlvLUhv/bmV5LVNpbmdoLTMu/anBn'
        },
        {
            id: 16,
            name: 'Badshah',
            image: 'https://imgs.search.brave.com/gZDgEfB7vvwUgOMXUG0CjInoi19VmOC5HKt5vQL_KQU/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA5L0JhZHNoYWgu/anBn'
        },
        {
            id: 17,
            name: 'Alka Yagnik',
            image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
        },
        {
            id: 18,
            name: 'Shreya Ghoshal',
            image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn'
        },
    ],
    recentlyPlayedSong: [
        {
            id: '1',
            songName: 'Jai Ho',
            artistName: 'A.R. Rahman',
            image: 'https://example.com/jaiho.jpg',
        },
        {
            id: '2',
            songName: 'Lag Ja Gale',
            artistName: 'Lata Mangeshkar',
            image: 'https://example.com/lagjagale.jpg',
        },
        {
            id: '3',
            songName: 'Mere Sapno Ki Rani',
            artistName: 'Kishore Kumar',
            image: 'https://example.com/meresapnokirani.jpg',
        },
        {
            id: '4',
            songName: 'Tum Hi Ho',
            artistName: 'Arijit Singh',
            image: 'https://example.com/tumhiho.jpg',
        },
        {
            id: '5',
            songName: 'Dilbar',
            artistName: 'Neha Kakkar',
            image: 'https://example.com/dilbar.jpg',
        },
        {
            id: '6',
            songName: 'DJ Waley Babu',
            artistName: 'Badshah',
            image: 'https://example.com/djwaleybabu.jpg',
        },
        {
            id: '7',
            songName: 'Deewani Mastani',
            artistName: 'Shreya Ghoshal',
            image: 'https://example.com/deewanimastani.jpg',
        },
        {
            id: '8',
            songName: 'Tera Hone Laga Hoon',
            artistName: 'Atif Aslam',
            image: 'https://example.com/terahonelaga.jpg',
        },
    ],
    ignoredMatch: [
        {
            name: 'Ritik Raj',
            image: 'https://cdn2.makromusic.com/user_image/n1-e8eca371-c012-4318-9b9b-b9bfdef2c864',
            ratio: '20% Match Ratio'
        },
        {
            name: 'Ruchi',
            image: 'https://i.pinimg.com/564x/49/10/b0/4910b092fe9a309b6036442cf05811d4.jpg',
            ratio: '40% Match Ratio'
        },
        {
            name: 'Krishna',
            image: 'https://cdn2.momjunction.com/wp-content/uploads/2015/05/The-Story-Of-The-Birth-Of-Lord-Krishna-For-Your-Kid-624x702.jpg',
            ratio: '100% Match Ratio'
        },
        {
            name: 'Ram',
            image: 'https://hinduismwayoflife.com/wp-content/uploads/2018/02/Lord-Rama1.jpg',
            ratio: '99% Match Ratio'
        },
        {
            name: 'Kapil Sharma',
            image: 'https://yt3.googleusercontent.com/XVVi44_WFTkdPXYorOffTEJ51xPacaBdx_-peDEao52ZHF8DdfuJz76IZLQI3hNwulwnHrBHIQ=s900-c-k-c0x00ffffff-no-rj',
            ratio: '20% Match Ratio'
        },
        {
            name: 'Nikita',
            image: 'https://nikita-saini-portfolio.vercel.app/assets/dp-3386394a.jpg',
            ratio: '70% Match Ratio'
        },
        {
            name: 'Aman',
            image: 'https://pbs.twimg.com/media/FQaC7hxaIAAffE2?format=jpg&name=large',
            ratio: '50% Match Ratio'
        },
    ],
    searchHistory: [
        {
            id: '1',
            songName: 'Jai Ho',
            artistName: 'A.R. Rahman',
            image: 'https://imgs.search.brave.com/G3jp9cl5gQ2Cmhq-PAp5yaHRBOk2LavYyfq5OewhCFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZTMubW91dGhzaHV0/LmNvbS9pbWFnZXMv/aW1hZ2VzcC85MjU5/MzQ2NTJzLmpwZw',
            historyText:'Jai Ho'
        },
        {
            id: '2',
            songName: 'Lag Ja Gale',
            artistName: 'Lata Mangeshkar',
            image: 'https://imgs.search.brave.com/OjfrEgG2JyRKAFn7Dw56SevBHJ6PYbZAnQ3970ryxDs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1ByaXRhbV9D/aGFrcmFib3J0eV9h/dF90aGVfNXRoX0dp/TUFfQXdhcmRzLmpw/Zw',
            historyText: 'Lag Ja Gale'
        },
        {
            id: '3',
            songName: 'Mere Sapno Ki Rani',
            artistName: 'Kishore Kumar',
            image: 'https://imgs.search.brave.com/kQS7wmgWjSQd6MHeKvDkfU10ngu7beTqHCTnz4Tjoc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL0tLXzUw/MHg1MDAuanBn',
            historyText: 'Mere Sapno Ki Rani'
        },
        {
            id: '4',
            songName: 'Tum Hi Ho',
            artistName: 'Arijit Singh',
            image: 'https://imgs.search.brave.com/lovCzpgaCdrQq57ImUt0fuI6IX_k6G9hiB3YyJMyA4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2p1bi90/b3B0ZW5zb25nc29m/anViaW5uYXV0aXlh/bHlvdW11c3RsaXN0/ZW50b29uaGlzYmly/dGhkYXkxMTY1NTE4/OTExOS5qcGc',
            historyText: 'Tum Hi Ho'
        },
        {
            id: '5',
            songName: 'Dilbar',
            artistName: 'Neha Kakkar',
            image: 'https://imgs.search.brave.com/gZDgEfB7vvwUgOMXUG0CjInoi19VmOC5HKt5vQL_KQU/rs:fit:860:0:0/g:ce/aHR0cDovL3N0YXJz/dW5mb2xkZWQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE1/LzA5L0JhZHNoYWgu/anBn',
            historyText: 'Dilbar'
        },
        {
            id: '6',
            songName: 'DJ Waley Babu',
            artistName: 'Badshah',
            image: 'https://imgs.search.brave.com/oZ8IqpCDzkflSDPlgJb1893KxCxvo7DwkIJeBhi5PJQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUzNTYz/MTcuanBn',
            historyText: 'DJ Waley Babu'
        },
        {
            id: '7',
            songName: 'Deewani Mastani',
            artistName: 'Shreya Ghoshal',
            image: 'https://imgs.search.brave.com/5DAKQsAkI4DTGb3cCszbKk9iLdbBzaAd3iC-w9WJHzY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wNS9NcmluYWxp/bmktVHlhZ2kuanBn',
            historyText: 'Deewani Mastani'
        },
        {
            id: '8',
            songName: 'Tera Hone Laga Hoon',
            artistName: 'Atif Aslam',
            image: 'https://imgs.search.brave.com/lovCzpgaCdrQq57ImUt0fuI6IX_k6G9hiB3YyJMyA4o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxt/ZmFyZS53d21pbmRp/YS5jb20vY29udGVu/dC8yMDIyL2p1bi90/b3B0ZW5zb25nc29m/anViaW5uYXV0aXlh/bHlvdW11c3RsaXN0/ZW50b29uaGlzYmly/dGhkYXkxMTY1NTE4/OTExOS5qcGc',
            historyText: 'era Hone Laga Hoon'
        },
    ]
    


}

const userSlice = createSlice({
    name: 'user',
    initialState: user,
    reducers: {
        setUser: (state, action) => action.payload,
        clearUser: () => null,
        logOut: (state) => {state.isloggedIn = false},
        logIn: (state) => { state.isloggedIn = true },
        removeFromSearchHistory: (state, action) => {
            state.searchHistory = [...state.searchHistory.filter(e=>e.id!=action.payload)]
        },
        clearSearchHistory:(state)=>{state.searchHistory = []}

    },

});

export const { setUser, clearUser, logOut,
    logIn, removeFromSearchHistory,
    clearSearchHistory
} = userSlice.actions;

export default userSlice.reducer;
