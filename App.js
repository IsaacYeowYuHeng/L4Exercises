//===EXERCISE 1===
//import React from 'react';
//import {View, Text} from 'react-native';
//
//const Exercise1 = () => {
//    return (
//    <View>
//    <Text style={{fontSize: 24}}>RP Values</Text>
//    <Text style={{color: green}}>Excellence</Text>
//    <Text style={{color: green}}>Excellence</Text>
//
//    </View>
//    );
//}

//===EXERCISE 2===
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black'
//     },
//     boxText: {
//     textAlign: 'center',
//     color: 'white'
//     },
//     title: {
//     fontWeight: 'bold'
//     }});
// }
//
// const Exercise2 = () => {
//     return (
//     <View style={{marginTop: 50}}>
//         <Text style={[styles.boxText, styles.title]}>
//             Who Are We
//         </Text>
//     </View>
//     <View style={styles.greenBox}>
//         <Text style={styles.boxText}>
//         Our People
//         </Text>
//     </View>
//     <View style={styles.greenBox}>
//         <Text style={styles.boxText}>
//             Our Campus
//         </Text>
//     </View>
//
//
//     const styles = Stylesheet.create({
//     parent: {
//             flexDirection: 'row',
//             backgroundColor: '#F5fcff',
//             borderColor: '#0099AA',
//             borderWidth: 5
//         },
//             child: {
//             borderWidth: 2,
//             textAlign:'center',
//             fontSize: 28
//         }
//     });
// }

//===EXERCISE 3A===
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flexDirection: 'row',
//         backgroundColor: '#f5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5
//     },
//     child:{
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 28
//     }
// });
//
// const Exercise3A = () => {
//     return(
//         <View style={[styles.parent,{marginTop:50}]}>
//         <Text style={[styles.child, {backgroundColor: 'powderblue'}]}>
//         Child One
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'skyblue'}]}>
//         Child Two
//         </Text>
//         <Text style={[styles.child, {backgroundColor: 'steelblue'}]}>
//         Child Three
//         </Text>
//     </View>
//     );
// };
// export default Exercise3A;

//===EXERCISE 3B===
//
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flex:1,
//         flexDirection: 'column',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5,
//     },
//     child:{
//         flex:1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24,
//     },
// });

//===EXERCISE 3C===
import {View} from "react-native";

const Exercise3C = () => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {backgroundColor: 'powderblue', maxWidth: 90]}>
                Child One
            </Text>
            <Text style={[styles.child, backgroundColor: 'skyblue']}>
                Child Two
            </Text>
            <Text style={[styles.child, backgroundColor: 'steelblue', maxHeight: 120]}>
                Child Three
            </Text>
        </View>
    )
}

//===EXERCISE 4===
//
// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flex:1,
//         backgroundColor: 'whitesmoke',
//         marginTop:50,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//     },
//
//     child:{
//         flex:80,
//         height:80,
//         alignItems: 'center',
//         textAlign: 'center',
//         textAlignVertical: 'center',
//     },
// });
//
// const Exercise4 = () => {
//     return (
//         <View style={styles.parent}>
//             <Text style={[styles.child, {backgroundColor:'lightblue'}]}>
//                 Square 1
//             </Text>
//             <Text style={[styles.child, {backgroundColor:'lightgreen'}]}>
//                 Square 2
//             </Text>
//             <Text style={[styles.child, {backgroundColor:'red'}]}>
//                 Square 3
//             </Text>
//         </View>
//     );
// };
// export default Exercise4;
