import { Text, View, Image, TextInput, Dimensions, Pressable, Touchable,
TouchableOpacity, TouchableWithoutFeedback, Alert, ScrollView, Platform,
 StyleSheet} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useState } from "react";

import Button from "../component/button";

import { router } from "expo-router";


export default function Index() {

            // HOOKS //

  const [firstName , setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('')
  const [email, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false)


// useEffect(effect, dependencies)

// useEffect(() =>, [])


  useEffect(() => {

    console.log('This was fired from the useEffect hook')

  }, [firstName, lastName])


  // console.log(` ${firstName}  ${lastName}  ${email}  ${password}`)




  // console.log('first name', FirstName)






  const {width , height} = Dimensions.get('screen')
  // console.log('screen width :', width, 'and' ,'screen height :', height)

  // console.log('This is the operating system of my device ', Platform.OS)

  function greetBasedOnDevice() {

    // Platform.OS === 'ios' ? Alert.alert('Hello!','Hello ios') 
    // : Alert.alert('Hello!', 'Hello android')



    // if(Platform.OS == 'android'){
    //   Alert.alert('Android', 'This is an android device')
    // }

    // else if(Platform.OS == 'ios'){
    //   Alert.alert('IOS', 'This is an ios device')
    // }

    // else{
    //   Alert.alert(`${Platform.OS}`, `This is an ${Platform.OS} device`)
    // }

    // NOTE: back tick(``) allows us to use/run Javascript
    //  expressions on our code and it will work perfectly 
    // and it is used with a dollar sign($)
    // e.g: Alert.alert(`${}`, `${}`). Anything inside the curly 
    // braces is a JavaScript expression.



    // Alert.alert(`${Platform.OS}`, `This is a ${Platform.OS} device`)


  }


  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1,
    paddingHorizontal:width*.04}}>


      <Text style={{fontWeight:'bold', fontSize:24, textAlign:'center', 
        marginVertical:10 }}>REUSABLE COMPONENT</Text>
{/* 
        Reusable compponent allowsus to reuse a component multiple times,
         without rewriting the entire component over again.
         example: */}

      <View style={styles.container}>
        
         <Text style={styles.label}>First name</Text>

         <TextInput placeholder="first name" keyboardType='default' 
         style={styles.input} onChangeText={(text) =>{

            // console.log(text)
            setFirstName(text)
         }} />

         

      </View>

      
      <View style={styles.container}>
        
         <Text style={styles.label}>Last name</Text>

         <TextInput placeholder="last name" keyboardType="default"
          style={styles.input} onChangeText={(text) =>{
          // console.log(text)

          setLastName(text)
         }} />
      </View>

      
      <View style={styles.container}>
        
         <Text style={styles.label}>Email</Text>

         <TextInput placeholder="email" keyboardType='email-address' 
         style={styles.input} onChangeText={(mail) =>{
          setMail(mail)
         }} />
      </View>

      
      <View style={styles.container}>
        
         <Text style={styles.label}>Password</Text>

         <TextInput placeholder="password" secureTextEntry={!passwordVisible}
          keyboardType='number-pad' 
         style={styles.input} onChangeText={(password) =>{
          setPassword(password)
         }} />


         <TouchableOpacity onPress={() =>{

          setPasswordVisible(!passwordVisible)

         }} style={{backgroundColor:'white',padding:2,
           position:'absolute', top:45, right:25}}>

            <Text style={{color:'black'}}>{passwordVisible ? 'Hide me' 
            : 'Show me'}</Text>

         </TouchableOpacity>

      </View>

      <View>
          <Button onPress={() =>{
            router.push('./profile')
          }} buttonStyle={{backgroundColor:'red', borderColor:'green', 
            borderWidth:5}} text={'Sign in'}/>

          <Button buttonStyle={{backgroundColor:'green'}} text={'Log in'}/>

          <Button text={'Register'}/>

      </View>



      {/* <ScrollView>


      

      <Text style={{color:'blue', fontSize:30}}>
        THIS IS GOD'SPOWER'S APP TESTING.
      </Text>

      <Text style={{color:'green', fontSize:30}}>
        My name is Gods'spower Omokpia, and I am a future Mobile App developer.
      </Text>

      <Text style={{color:'red', fontSize:20, fontStyle:'italic'}}>
        React Native is so so fun to code with and I love it.
      </Text> */}

      

{/* Image is a self closing component */}
      {/* <Image style={{marginTop:height*.02}} 
      source={require('../assets/images/favicon.png')}/> 
       */}
{/* TextInput is a self closing component */}

      {/* <TextInput style={{borderColor:'red', color:'white', 
      borderWidth:2, fontColor:'white',
      borderRadius:10, height:50, paddingLeft:20, marginTop: height*.05}}/>

      <Pressable onPress={() =>{

        console.log('My name is Godspower.')
        Alert.alert('ERROR', 'There was an error')

      }} style={{backgroundColor:'white', width:width*.4,
        marginTop:40, padding:30}}>
        <Text style={{color:'red' }}>Click me!</Text>
      </Pressable>

      <TouchableOpacity onPress={() =>{

        console.log('I love coding!!!')
        Alert.alert('SUCCESS', 'I was clicked successfully')
      
      }} style={{backgroundColor:'white', width:width*.4, 
       marginTop:40, padding:30}}>

        <Text style={{color:'blue' }}>LogIn 1!</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={() =>{

        console.log('I love coding!!!')
        Alert.alert('SUCCESS', 'I was clicked successfully')
      
      }} style={{backgroundColor:'white', width:width*.4,
        marginTop:40, padding:30}}>

        <Text style={{color:'blue' }}>LogIn 2!</Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={greetBasedOnDevice} 
      style={{backgroundColor:'white',
         width:width*.4, marginTop:40, padding:30}}>

        <Text style={{color:'blue' }}>LogIn 3!</Text>

      </TouchableOpacity> */}

{/* 
    </ScrollView> */}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  label : {
    fontSize:16,
     marginBottom:10,
     color:'blue'

  },
  input: {

    backgroundColor:'gray', borderRadius:20, height:50,
           padding:10, color:'white'
  },
  container:{
    marginBottom:20,
    
  }
})