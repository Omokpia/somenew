import {Text , ActivityIndicator, Alert, View, Image, ScrollView} from "react-native"

import { SafeAreaView } from "react-native-safe-area-context";

import { useEffect, useState} from "react";




   const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';

//     const options = {

// 	method: 'GET',
    
// 	headers: {
// 		'x-rapidapi-key': 'c0a325639emsh7652e48950072a3p108dc3jsnf7226afa7c38',
// 		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
// 	}
// };

// try {

// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);}
//  catch (error) {

// 	console.error(error);}


 
const MovieScreen = () => {


    const [isFetching , setIsFetching] = useState(false)
    const [moviesData, setMoviesData] = useState(null)


    useEffect(() =>{

        getMovies()

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

                console.log('This is my data in json format ', data.results[0])

                setMoviesData(data.results)

                // Alert.alert('Success', 'The request was successfully')

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



     

  return(
        <SafeAreaView style={{paddingHorizontal:'10%'}}>
            <ScrollView>
            

            <Text style={{color:'black', fontSize:50, 
                alignSelf:"center"}}>Movie Screen</Text>


            <View style={{marginTop:70}}>  

            <ActivityIndicator animating={isFetching} size={'large'} color={'red'} />

            </View>

            {
                moviesData?.map((data, index) => {
                    return(
                        <View>

                            <Image style={{height:100, width:100}} source={{uri:data.primaryImage}}/>

                            <Text style={{fontSize:15, marginBottom:5,fontWeight:'bold'}}>{data.primaryTitle}</Text>

                            <Text style={{fontSize:18}}>{data.description}</Text>
                        </View>
                    )
                })
            }

            </ScrollView>

            

        </SafeAreaView>
    )
}

export default MovieScreen;