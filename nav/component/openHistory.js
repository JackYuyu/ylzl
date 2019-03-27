import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Dimensions,
    RefreshControl,
    FlatList,
    ActivityIndicator
} from 'react-native';
var {width,height} = Dimensions.get('window');
var dataAry = []
var start  = 0

export default class openHistory extends Component{
    //返回首页方法需要修改react-navigation库的源码.修改方法见:http://www.jianshu.com/p/2f575cc35780
    static navigationOptions = ({ navigation }) => ({
        title: '开门统计',
        headerStyle:{backgroundColor:'#023AFC'},
        headerTintColor: 'black',
        // headerLeft:(
//             <Text onPress={()=>navigation.goBack("Tab")}>返回首页</Text>
//         ),
    })

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        for(start = 0;start<10;start++){
            var obj = {}
            obj.key = start
            dataAry.push(obj)
        }

        this.state = {
            dataAry: dataAry,
            isRefreshing:true
        };
    }
    render() {
        return (
            <View>
            <FlatList
        data = {this.state.dataAry}
        renderItem = {(item) => this.renderRow(item)}
        refreshing={this.state.isRefreshing}
        onRefresh={()=>this.onRefreshData()}
        onEndReached = {()=>this.onEndReached()}
        onEndReachedThreshold = {0.5}
        initialNumToRender = {10}
        />
        </View>
    );
    }

    //listView的renderRow
    renderRow =(item) =>{
        var R = parseInt(Math.random()*255)
        var G = parseInt(Math.random()*255)
        var B = parseInt(Math.random()*255)
        return(
            <View style={styles.position}>
            <Image source={require('../image/one_selected.png')} style={{width:0,height:110,borderRadius:30,marginTop:5,marginBottom:5}}/>
        <View style={{flexDirection:'column',justifyContent:'space-around',marginLeft:5}}>
    <Text style={{fontSize:18,color:'#444662'}}>317大门</Text>
        <View style={{flexDirection:'row'}}>
    <Text style={{fontSize:14,color:'# BDBDBD'}}>2019-13-15 13:30</Text>
        <Text style={{fontSize:14,color:'#BDBDBD',marginLeft:10}}>专辑:react native</Text>
        </View>
        </View>
        <View style={{flex:1,flexDirction:'row',justifyContent:'space-around',alignItems:'flex-end',marginRight:17}}>
    <Image source={require('../image/锁.png')} style={{width:75,height:75,borderRadius:30,marginTop:5,marginBottom:5}}/>
        </View>
        </View>
    )
    }

    //请求数据
    componentDidMount(){
        this.setState({
            isRefreshing:false
        })
    }
    //刷新数据
    onRefreshData =()=>{
        // alert('下拉刷新')
    }
    onEndReached = () =>{
        // alert('上拉加载')
        for(var i = start;i<start + 10;i++){
            var obj = {}
            obj.key = i
            dataAry.push(obj)
        }
        start += 10
        this.setState({
            dataAry: dataAry
        })
    }

};

var styles = StyleSheet.create({
    container: {
        flex: 1,
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
    position: {
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        borderWidth:1,
        marginRight:10,
        borderColor:'rgba(0, 134, 255, 0.3)',
        backgroundColor:'white',
    }
});