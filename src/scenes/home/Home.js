import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SideMenu } from 'react-native-elements'
import { connect } from 'react-redux'
// Redux
import { toggleMenu } from '../../redux/modules/AppState'
// Components
import MenuComponent from '../../components/MenuComponent'
// styles
import { styles, theme } from '../../styles'

class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {

        return (
            <SideMenu
                isOpen={this.props.AppState.showMenu}
                onChange={(isOpen) => { if(!isOpen){this.props.dispatch(toggleMenu())}}}
                menu={MenuComponent}>
                <View style={[styles.container,{backgroundColor: theme.colors.secondary}]}>
                    <TouchableOpacity onPress={() => this.props.dispatch(toggleMenu())}>
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>
            </SideMenu>
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
export default connect(mapStateToProps)(Home)