import React,{Component} from 'react';
import{AppRegistry,NavigatorIOS,Text,Image,View,StyleSheet,AlertIOS} from 'react-native';


var SearchPage = require('./SearchPage');
var styles = StyleSheet.create({
	text:{
		color: 'black',
		backgroundColor: 'white',
		fontSize: 30,
		margin: 80
	},
  container:{
    flex: 1
  }
});

var AttributeToggler = React.createClass({
  render() {
    return (
     <Text numerOfLines={1} style={{fontFamily:'Verdana',textDecorationLine:'underline',fontWeight: 'bold',textAlign:'left',marginTop:100,backgroundColor: '#ffaaaa',marginLeft:20,marginRight:20}} onPress={() => AlertIOS.alert(
            'Foo Title',
            'My Alert Msg',
            [
              {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
              {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
            ]
          )}>
        sldjflajsdlfjjdfjasdl
      <Text numerOfLines={1} style={{color: 'red',fontSize:30}} onPress={() => console.log('and red被点击了')}>
        and red
      </Text>
    </Text>,
    
    <View style={{backgroundColor:'red',marginLeft:0,marginRight:0,marginTop:0,marginBottom:20}}>
        <Image source={require("./ios/img/check.png")} blurRadius={10} style={{top:100,left:100,width:100,height:100,borderRadius:50}} onLoad={() => console.log('开始加载了')} onProgress={(loader,total) => console.log('百分比')}/>
    </View>
    )}
});

class HelloWorld extends React.Component{
	render(){
		return(
			<Text style={styles.text}>
			 Hello world
			</Text>
		)
	}
}

class PropertyFinderApp extends Component{
  render(){
    return(
      <NavigatorIOS style={styles.container} 
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/> 
    );
  }
}

AppRegistry.registerComponent('HelloWorld', ()=> PropertyFinderApp);

// class App extends Component {
//   render() {
//     return (
//      <Text style={{fontWeight: 'bold',textAlign:'center',marginTop:100}}>
//         I am bold
//       <Text style={{color: 'red',fontSize:30}}>
//         sb
//       </Text>
//     </Text>
//     );
//   }
// }

// const App = () =>{
//   return(
//     <Text>Hello World!</Text>,
//     <View style={{alignItems:'center'}}>
//       <Text>Hello!</Text>
//     </View>,
    
    // <Image source={require("./ios/img/check.png")} style={{top:100,left:100,width:60,height:60,backgroundColor:'transparent'}}/>,
    
//     <Image source={{url:'http://facebook.github.io/react/img/logo_og.png'}} style={{top:100,left:100,width:60,height:60,backgroundColor:'transparent'}}/>,
    
//      <Text style={{fontWeight: 'bold',textAlign:'center',marginTop:100}}>
//         I am bold
//       <Text style={{color: 'red',fontSize:30}} onPress={this.toggleWeight}>
//         and red
//       </Text>
//     </Text>
//   )
// }



// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// class AwesomeProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('HelloWorld', () => AwesomeProject);