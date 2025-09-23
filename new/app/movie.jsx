import {Text , ActivityIndicator, Alert,
     View, Image, ScrollView, FlatList} from "react-native";


import axios from "axios";

import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useState} from "react";




   const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';


 
const MovieScreen = () => {


    const [isFetching , setIsFetching] = useState(false)
    const [moviesData, setMoviesData] = useState([])

    console.log(`The amount of movies fetched is ${moviesData?.length}`)


    useEffect(() =>{

        // getMovies()

        getMoviesWithAxios()

    }, [])

    const getMovies = () =>{

        try{

            setIsFetching(true)

            fetch(url, {
                method: 'GET',
                headers: {
                        'x-rapidapi-key': 'c0a325639emsh7652e48950072a3p108dc3jsnf7226afa7c38',
                    	'x-rapidapi-host': 'imdb236.p.rapidapi.com'
                }
            }).then((response) =>{

               return response.json()


            }).then((data) =>{

                // console.log('This is my data in json format ', data.results[0])



                 if(!data?.results){
                //     Alert.alert('Error', data?.message)
                //     return

                    
                 if(data?.message.toLowerCase().includes('Exceeded'.toLowerCase())){
                //    return console.log('Exceeded is in the error message')
                   return Alert.alert('Message', 'You have exceeded your quota for the month, kindly upgrade your plan')
                }
            }

                

                








                 console.log(data)
                console.log(data.results)

            setMoviesData(data.results)


                Alert.alert('Success', 'The request was successfully')

            }).catch((error) =>{

                console.log('error ', error)

                Alert.alert('Error', 'The request was unsuccessful')  

            })

        }
        catch(error){

            console.log('There was an error ', error)

        }

        finally{
            setIsFetching(false)
        }
        



    }

    const getMoviesWithAxios = async () =>{

        try{

            const response = await axios.get(url, {

                headers: {
                        'x-rapidapi-key': 'c0a325639emsh7652e48950072a3p108dc3jsnf7226afa7c38',
                    	'x-rapidapi-host': 'imdb236.p.rapidapi.com'
                }

            })

            

            console.log(response)
            

        }

        catch(error){

            console.log(error)

        }

        finally{

        }

    }

     

  return(
        <SafeAreaView style={{paddingHorizontal:'10%', marginBottom:40,
         backgroundColor:'white', flex:1}}>
            


            {/* <View style={{marginTop:0}}>  

            <ActivityIndicator animating={isFetching} size={'large'} color={'red'} />

            </View> */}

            <FlatList showsVerticalScrollIndicator={false} 
            data={moviesData} renderItem={({item}) =>{
                return(
                    <View>

                            <Image style={{height:100, width:100}} 
                            source={{uri:item.primaryImage}}/>

                            <Text style={{fontSize:15, marginBottom:5,
                                fontWeight:'bold'}}>{item.primaryTitle}</Text>

                            <Text style={{fontSize:18}}>{item.description}</Text>
                        </View>
                )

            }}
            
            ListHeaderComponent={() => {
                return(
                    <View style={{marginBottom:30}}>
                        <Text style={{color:'black', fontSize:50, 
                alignSelf:"center"}}>Movie Screen</Text>
                    </View>
                )
            }}

            ListEmptyComponent={() =>{
                return(
                    <View>

                         <ActivityIndicator animating={isFetching}
                         size={'large'} color={'red'} /> 

                         {/* <Text style={{textAlign:'center'}}>
                            The data is fetching.....</Text> */}


                    </View>
                )
            }}

            ListFooterComponent={() => {
                return(
                    <View style={{marginVertical:30}}>

                        {
                            moviesData?.length >= 1 ? (
                                 <Text style={{fontSize:30, color:'red',
                             textAlign:'center'}}>This is the end of the List</Text>)
                             : null
                        }


                       

                    </View>
                )
            }}
            style={{paddingVertical:5, marginBottom:40}}
            contentContainerStyle={{backgroundColor:'white', marginBottom:40}}
            
            />

            {/* {
                moviesData?.map((data, index) => {
                    return(
                        <View>

                            <Image style={{height:100, width:100}}
                             source={{uri:data.primaryImage}}/>

                            <Text style={{fontSize:15, marginBottom:5,
                            fontWeight:'bold'}}>{data.primaryTitle}</Text>

                            <Text style={{fontSize:18}}>{data.description}</Text>
                        </View>
                    )
                })
            } */}


            

        </SafeAreaView>
    )
}

export default MovieScreen;