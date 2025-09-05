import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";


const Profile = () => {
    return(

        <SafeAreaView style={{flex:1, backgroundColor:'white', paddingHorizontal:'5%'}}>

            <TouchableOpacity onPress={() =>{
                router.back()
            }} style={{backgroundColor:'black', borderRadius:8, padding:5, width:'20%'}}>
                <Text style={{color:'white'}}>Back</Text>
            </TouchableOpacity>

           <Text style={{color:'black', fontSize:40, fontWeight:'bold'}}>This is a profile screen</Text> 

        </SafeAreaView>


    )
};


export default Profile