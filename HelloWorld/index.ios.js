import React,{Component} from 'react';
import{AppRegistry,Text,Image,View,StyleSheet,AlertIOS} from 'react-native';

var AttributeToggler = React.createClass({
  getInitialState: function() {
    return {fontWeight: 'bold', fontSize: 15};
  },
  toggleWeight: function() {
    AlertIOS.alert(
      null,
      null,
      [
        {text: 'Foo', onPress: () => console.log('Foo Pressed!')},
              {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
      ]
    )
    // this.setState({
    //   fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
    // });
  },
  increaseSize: function() {
    this.setState({
      fontSize: this.state.fontSize + 1
    });
  },
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
        I am bold very much lost haha
      <Text numerOfLines={1} style={{color: 'red',fontSize:30}} onPress={() => console.log('and red被点击了')}>
        and red
      </Text>
    </Text>,
    
    <Text style={{marginTop:100}}>
     <Text>First part and </Text>
     <Text>second part</Text>
    </Text>,
    
    <View style={{marginTop:100}}>
     <Text>First part and </Text>
     <Text>second part</Text>
    </View>
    ),
    
    <Text style={{fontWeight: 'bold',marginTop:100}}>
      I am bold
      <Text style={{color: 'red'}} onPress={()=>console.log('lst')}>
      and red
    </Text>
</Text>

  }
});

class App extends Component {
  render() {
    return (
     <Text style={{fontWeight: 'bold',textAlign:'center',marginTop:100}}>
        I am bold
      <Text style={{color: 'red',fontSize:30}}>
        and red
      </Text>
    </Text>
    );
  }
}

// const App = () =>{
//   return(
//     <Text>Hello World!</Text>,
//     <View style={{alignItems:'center'}}>
//       <Text>Hello!</Text>
//     </View>,
    
//     <Image source={require("./ios/img/check.png")} style={{top:100,left:100,width:60,height:60,backgroundColor:'transparent'}}/>,
    
//     <Image source={{url:'http://facebook.github.io/react/img/logo_og.png'}} style={{top:100,left:100,width:60,height:60,backgroundColor:'transparent'}}/>,
    
//      <Text style={{fontWeight: 'bold',textAlign:'center',marginTop:100}}>
//         I am bold
//       <Text style={{color: 'red',fontSize:30}} onPress={this.toggleWeight}>
//         and red
//       </Text>
//     </Text>
//   )
// }

AppRegistry.registerComponent('HelloWorld', ()=> AttributeToggler);

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