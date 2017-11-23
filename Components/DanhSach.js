import React, {Component} from "react";
import {View, Text, FlatList, Image, Button} from "react-native";

export default class DanhSach extends Component{
  constructor(props){
    super(props);
    this.state={
      mang:[],
      trang:0

    }
  }
  loadMore(){
    this.setState({
      trang:this.state.trang + 1
    },()=>{
      fetch("http://192.168.1.4/JSNew.php?trang="+this.state.trang)
      .then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({
          mang:responseJson
        });
      });
    });
  }
  render(){
    const { navigate } = this.props.navigation;
    return(

      <View>
        <View style={{height:30,backgroundColor:"#dbe7f9", justifyContent:"center", alignItems:"center"}}>
          <Text>Trang: {this.state.trang}</Text>
        </View>
        <FlatList
          onEndReachedThreshold="-0.2"
          onEndReached={()=>{this.loadMore()}}
          data={this.state.mang}
          renderItem={({item}) =>
          <View style={{borderBottomWidth:0.5}}>

            <View style={{flexDirection:"row",marginTop:10}}>
              <View style={{flex:1}}>
              <Image
                style={{flex:1, alignSelf:"stretch", width:null}}
                source={{uri:item.URL}}
              />
              </View>
              <View style={{flex:2, paddingLeft:10}}>
              <Text style={{color:"red",marginTop:10}}>{item.TIEUDE}</Text>
              <Text>{item.TOMTAT}</Text>
              </View>

            </View>
          </View>
        }
        />

      </View>

    );
  }
  componentDidMount(){
    fetch("http://192.168.1.4/JSNew.php?trang=1")
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        mang:responseJson
      });
    });
  }
}
