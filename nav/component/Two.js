/**
 * Created by shaotingzhou on 2017/5/9.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
export default class Two extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '订单',
        headerRight: (
                <Image source={require('../image/two.png')} style={{width:20,height:20,marginRight:5}} />
        ),
        headerLeft: (
            <View style={{marginLeft:5,flexDirection:'row'}}>
                <Image style={{ width: 20, height: 20 }} source={require('../image/two.png')} />
                <Text style={{ fontSize: 15, color: '#333333' }}> android</Text>
            </View>
        ),
        headerStyle:{backgroundColor:'cyan'},
    })

    render() {
        return (
            <Container style={{flexDirection:'row',marginTop:0,marginLeft:-15}}>
            <Header hasTabs/>
    <Tabs renderTabBar={()=> <ScrollableTab />}>
<Tab heading="拜访预约">
        <Tab1 />
        </Tab>
        <Tab heading="拜访授权">
        <Tab2 />
        </Tab>
        </Tabs>
        </Container>
        );
    }





}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

