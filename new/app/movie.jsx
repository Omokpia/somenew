import {Text } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context";





const MovieScreen = () => {
    return(
        <SafeAreaView>

            <Text style={{color:'black', fontSize:21, 
                alignSelf:"center"}}>Movie screen</Text>

        </SafeAreaView>
    )
}

export default MovieScreen;