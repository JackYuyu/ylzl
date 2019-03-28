/**
 * Created by shaotingzhou on 2017/5/9.
 */
/**
 * Created by shaotingzhou on 2017/5/9.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class OneDetails extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '详情',
        headerStyle:{backgroundColor:'cyan'},
        headerTintColor: 'red',
//         headerLeft:(
//             <Text onPress={()=>navigation.goBack(null)}>回到上一页</Text>
//         ),
        headerTitleStyle:{alignSelf:'center'} //安卓title的位置

    })
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    传过来的参数是: {this.props.navigation.state.params.age} + {this.props.navigation.state.params.name}
                </Text>
                <Text>测试下FlatList 和 ListView性能</Text>
                <Text onPress={()=>this.onclickBtn()}>点击再跳转FlatList</Text>
                <Text onPress={()=>this.onclickBtn1()}>点击再跳转ListView</Text>
                <Text onPress={()=>this.onclickBtn2()}>点击再跳转OpenHisView</Text>
        <Text onPress={()=>this.onclickBtn3()}>点击再跳转OpenHisView</Text>
        <Text onPress={()=>this.onclickBtn4()}>点击再跳转feedback</Text>
        <Text onPress={()=>this.onclickBtn5()}>点击再跳转invite</Text>
        <Text onPress={()=>this.onclickBtn6()}>点击再跳转about</Text>
        </View>
        );
    }
    onclickBtn =() =>{
        this.props.navigation.navigate('OneDetailsFlat')
    }
    onclickBtn1 =() =>{
        this.props.navigation.navigate('Authhistory')
    }
    onclickBtn2 =() =>{
        this.props.navigation.navigate('openHistory')
    }
    onclickBtn3 =() =>{
        this.props.navigation.navigate('loginView')
    }
    onclickBtn4 =() =>{
        this.props.navigation.navigate('feedback')
    }
    onclickBtn5 =() =>{
        this.props.navigation.navigate('inviteHistory')
    }
    onclickBtn6 =() =>{
        this.props.navigation.navigate('about')
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

