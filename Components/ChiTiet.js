import React, {Component} from "react";
import {View,Text} from "react-native";

export default class ChiTiet extends Component{
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View>
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
      </View>
    );
  }
}
