import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      text: ''  // indaicates no default value
      
    };
  }


  render()
  {
  return (
    <View style={styles.container}>
      <TextInput                    // this leavces the bank sapce for user  write 
      style={styles.input}         // propertiess mentiond below


      placeholderTextColor="#30336B"
      placeholder='enter email '
      onChangeText={text =>         // this proberly let user type owrds
        {
          this.setState({text});
        }

      }
      />
      
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: 
  {                   // this give sthe box effect to the textinput
    height:50,
    width : 200,
    borderWidth:2,
    //paddnig:10,
    borderRadius:5   
  }
});
