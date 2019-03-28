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
export default class about extends Component {
    render() {
        return (
            <Content padder style={{ marginTop: 0 }}>
    <View style={{flex: 1, flexDirection: 'column',height:300,alignItems:'center'}}>
    <Image source={require('../image/icon_logo.png')} style={{width:110,height:110,borderRadius:30,marginTop:55,marginBottom:5}}/>
        <Text style={{fontSize:18,color:'#444662'}}>版本：5.0.1</Text>
        </View>
        <Form>
        <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:16,color:'# BDBDBD',marginLeft:20,marginRight:20}}>关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们关于我们关于我们关于我们
        关于我们关于我们关于我们</Text>
        </View>
        </Form>

        </Content>
    );
    }
}