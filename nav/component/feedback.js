import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';
import { Content, Card, CardItem, Text, Body, Button,Textarea, Form} from "native-base";
import DashSecondLine from './DashSecondLine';

var {height,width} =  Dimensions.get('window');

export default class feedback extends Component {
    render() {
        return (
            <Content padder style={{ marginTop: 0 }}>
    <Card style={{ flex: 0 ,height:255}}>
    <CardItem>
        <Body>
        <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5,height:180}}>
    <Form>
        <Textarea style={{width:width-60}} rowSpan={5} placeholder="请输入您的意见" />
            </Form>
        </View>

        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',
            alignItems: 'stretch',}}>
    <Button style={{width:(width-40)/2}} light><Text style={{marginLeft:50}}> 取消 </Text></Button>
        <Button style={{width:(width-40)/2}}><Text style={{marginLeft:50}}> 提交 </Text></Button>
        </View>

        </Body>
        </CardItem>
        </Card>
        </Content>
    );
    }
}