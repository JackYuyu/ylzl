/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


import Two from './component/Two';
import One from './component/One';
import OneDetails from './component/OneDetails'
import OneDetailsFlat from './component/OneDetailsFlat'
import OneDetailsList from './component/OneDetailsList'
import Authhistory from'./component/Authhistory'
import openHistory from'./component/openHistory'
import loginView from'./component/loginView'
import feedback from'./component/feedback'
import inviteHistory from'./component/inviteHistory'
import about from'./component/about'

export default class RootScene extends Component {

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                             // 只要切换tab,push,pop,这里一定走
                             console.log(prevState)
                             console.log(currentState)

                        }
                    }
            />
        );
    }
}

const Tab = TabNavigator({
        One: {
            screen: One,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '门锁'
            }),
        },
        Two: {
            screen: Two,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '访客'
            }),
        },
        Three: {
            screen: Two,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的'
            }),
        },

    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#979797',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },

    });

const Navigator = StackNavigator({
    Tab: {
        screen: Tab,
    },
    OneDetails : {
        screen: OneDetails,
    },
    OneDetailsFlat : {
        screen:OneDetailsFlat
    },
    OneDetailsList : {
        screen:OneDetailsList
    },
    Authhistory : {
        screen:Authhistory
    },
    openHistory : {
        screen:openHistory
    },
    loginView : {
        screen:loginView
    },
    feedback : {
        screen:feedback
    },
    inviteHistory : {
        screen:inviteHistory
    },
    about : {
        screen:about
    }
});