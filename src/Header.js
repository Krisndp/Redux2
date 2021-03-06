import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../redux/actionCreators'

class Header extends React.Component {

    render() {
        return (
            <View style={{paddingHorizontal:20 ,flexDirection: 'row', backgroundColor: '#d9d9d9', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>MY WORDS</Text>
                <TouchableOpacity onPress = {()=> this.props.toggleIsAdding()}>
                <Text>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default connect(null,{toggleIsAdding})(Header);