import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
    Dimensions,
} from 'react-native';
import { Content, Card, CardItem, Text, Body, Button } from "native-base";

var {height,width} =  Dimensions.get('window');

export default class TabTwo extends Component {
render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                NativeBase builds a layer on top of React Native that provides
                you with basic set of components for mobile application
                development. This helps you to build world-class application
                experiences on native platforms.
              </Text>

    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',
        alignItems: 'stretch',}}>
    <Button style={{width:(width-40)/2}} light><Text style={{marginLeft:50}}> 拒绝 </Text></Button>
    <Button style={{width:(width-40)/2}}><Text style={{marginLeft:50}}> 授权 </Text></Button>
    </View>

            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
