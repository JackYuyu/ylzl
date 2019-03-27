import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Dimensions,
} from 'react-native';
import { Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Input,
    Body,
    Left,
    Right,
    Icon,
    Form,
    Text } from "native-base";

var {height,width} =  Dimensions.get('window');
export default class loginView extends Component {
    render() {
        return (
            <Content padder style={{ marginTop: 0 }}>
        <View style={{flex: 1, flexDirection: 'column',height:300,alignItems:'center'}}>
    <Image source={require('../image/icon_logo.png')} style={{width:110,height:110,borderRadius:30,marginTop:55,marginBottom:5}}/>
        <Text style={{fontSize:18,color:'#444662'}}>云邻智联</Text>
        </View>
        <Form>
        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',
            alignItems: 'stretch',}}>
        <Item style={{width:width-120,}} regular>
        <Input placeholder="输入手机号" style={{marginLeft:15,}}/>
            </Item>
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',
            alignItems: 'stretch',}}>
    <Button style={{width:80,marginRight:10}}><Text> 发送短信 </Text></Button>
        </View>
            </View>
            <Item last regular>
        <Input placeholder="输入验证码" secureTextEntry style={{marginLeft:0}}/>
        </Item>
        </Form>
        <Button block style={{ margin: 15, marginTop: 50 }}>
    <Text>登陆</Text>
        </Button>
        </Content>
    );
    }
}