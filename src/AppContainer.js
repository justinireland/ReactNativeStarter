import React, { Component } from 'react'
import { BackAndroid, Navigator, Platform, TouchableWithoutFeedback, Text, View } from 'react-native'
import dismissKeyboard from 'dismissKeyboard'
import { Provider } from 'react-redux'
import Store from './redux/store'
// styles
import { styles } from './styles'
// Scenes
import { Home, Login } from './scenes'

const ROUTES = {
    home: {
        component: Home,
        index: 0
    },
    login: {
        component: Login,
        index: 0
    }
}

export class AppContainer extends Component {

    renderScene(route, navigator){
        const Scene = ROUTES[route.name].component
        const routeIndex = ROUTES[route.name].index

        function onBack(){
            if(routeIndex > 1){
                navigator.jumpBack()
            }
        }

        BackAndroid.addEventListener('hardwareBackPress', () => {
            onBack()
            return true
        })

        return (
            <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                <View style={[styles.container, {marginTop: Platform.OS === 'ios' ? 20: 0}]}>
                    <Scene navigator={navigator} />
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render() {

        const state = Store.getState()
        const initialRouteName = state.Authentication.isAuthed ? 'home' : 'login'

        return (
            <Provider store={Store}>
                <Navigator
                    style={{flex: 1}}
                    initialRoute={{name: initialRouteName}}
                    renderScene={this.renderScene}
                    configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
                />
            </Provider>
        )
    }
}