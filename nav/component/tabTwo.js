import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
    Dimensions,
} from 'react-native';
import { Content, Card, CardItem, Text, Body, Button } from "native-base";
import DashSecondLine from './DashSecondLine';

var {height,width} =  Dimensions.get('window');

export default class TabTwo extends Component {
render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 ,height:255}}>
          <CardItem>
            <Body>
    <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5,height:180+19}}>
<Text style={{fontSize:18,color:'#444662'}}>办业务</Text>
    <Text style={{fontSize:14,color:'#BDBDBD',marginLeft:10}}>专辑:react native</Text>
    <View>
    <DashSecondLine backgroundColor='gray' len={50} width={width-60}></DashSecondLine>
        </View>
    <Text style={{fontSize:18,color:'#444662'}}>云邻公司张三四</Text>
    <View style={{flexDirection:'row'}}>
<Text style={{fontSize:14,color:'# BDBDBD'}}>歌手:虚拟歌姬</Text>
    <Text style={{fontSize:14,color:'#BDBDBD',marginLeft:10}}>专辑:react native</Text>
    </View>
    </View>

    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',
        alignItems: 'stretch'}}>
    <Button style={{width:(width-25)/2}} light><Text style={{marginLeft:50}}> 拒绝 </Text></Button>
    <Button style={{width:(width-25)/2}}><Text style={{marginLeft:50}}> 授权 </Text></Button>
    </View>

            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
