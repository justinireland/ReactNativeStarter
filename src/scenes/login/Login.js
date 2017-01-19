import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, SocialIcon } from 'react-native-elements'
import { connect } from 'react-redux'
// Redux actions
import { handleAuth } from '../../redux/modules/Authentication'
// Styles
import { styles, theme } from '../../styles'

class Login extends Component {
    constructor(props){
        super(props)
    }
    onLoginPress = () => {
        /*
        this.props.dispatch(handleAuth({username:'user', password:'pass'}))
            .then((res) => {
                this.props.navigator.immediatelyResetRouteStack([{name: 'home'}])
            })
        */
        this.props.navigator.immediatelyResetRouteStack([{name: 'home'}])
    }

    render() {
        return (
            <View style={styles.container}>
                 <Button
                     raised
                     large
                     backgroundColor={theme.colors.primary}
                     onPress={this.onLoginPress}
                     title='LOGIN' />
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                    style={{paddingLeft: 20, paddingRight: 20}}
                    onPress={this.onLoginPress}
                />
            </View>
        )
    }
}

function mapStateToProps({AppState, Authentication},{navigator}){
    return {
        AppState,
        Authentication,
        navigator
    }
}
export default connect(mapStateToProps)(Login)
