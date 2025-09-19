import {Text } from "react-native"

import { SafeAreaView } from "react-native-safe-area-context";





 const MovieScreen = () => {



//      function getMovies() {

//         fetch(url, {
//         method: 'DELETE',
//         headers: {
//             'x-rapidapi-key': 'c0a325639emsh7652e48950072a3p108dc3jsnf7226afa7c38',
// 		    'x-rapidapi-host': 'imdb236.p.rapidapi.com'
//         }
    
//         })


//         try{

//         }
//         catch(error){

//         }
//         finally{

//         }









//     }




//     const url = 'https://imdb236.p.rapidapi.com/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id';

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
// 	console.log(result);

// } catch (error) {

// 	console.error(error);
// }






    return(
        <SafeAreaView>

            <Text style={{color:'black', fontSize:50, 
                alignSelf:"center"}}>Movie Screen</Text>

        </SafeAreaView>
    )
}

export default MovieScreen;