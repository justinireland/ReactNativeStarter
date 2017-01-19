import React from 'react'
import { StyleSheet } from 'react-native'

export const theme = {
    colors: {
        primary: '#2196F3',
        secondary: '#00C18A'
    }
}

export const styles = StyleSheet.create({
    column: {
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
})