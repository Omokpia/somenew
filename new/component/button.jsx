
import { TouchableOpacity, Text, Alert } from "react-native"


const Button = ({text, buttonStyle, onPress}) =>{

    return(

        <TouchableOpacity onPress={onPress}
             style={{backgroundColor:'black', borderRadius:25, height:58, padding:10,
            justifyContent:'center', marginVertical:10, ...buttonStyle}}>


            <Text style={{color:'white', textAlign:'center', fontWeight:'bold', 
                fontSize:20}}>{text}</Text>

        </TouchableOpacity>


    )

}

export default Button




