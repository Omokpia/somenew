
import { TouchableOpacity, Text } from "react-native"


const Button = ({text}) =>{

    return(

        <TouchableOpacity style={{backgroundColor:'black', borderRadius:25, height:58, padding:10,
            justifyContent:'center'}}>


            <Text style={{color:'white', textAlign:'center', fontWeight:'bold', 
                fontSize:20}}>{text}</Text>

        </TouchableOpacity>




    )




}

export default Button