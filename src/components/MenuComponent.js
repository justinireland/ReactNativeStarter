import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class MenuComponent extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 20}}>
                <Text>Menu</Text>
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
export default connect(mapStateToProps)(MenuComponent)
