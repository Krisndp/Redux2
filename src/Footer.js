import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Footer extends React.Component {

    getTextStyle(statusName){
        const {myFilterStatus} = this.props;
        if(statusName === myFilterStatus){
            return {color:'yellow', fontSize:'bold',fontSize: 12}
        } else {
            return {color:'white', fontSize: 12}
        }
    }
    setFilterStatus(actionType){
        console.log(actionType);
        this.props.dispatch({type:actionType})
    }
    render() {
        return (
            <View style={{ backgroundColor: 'brown', flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress = {()=> this.setFilterStatus('FILTER_SHOW_ALL')}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress = {()=> this.setFilterStatus('FILTER_MEMORIZED')}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress = {()=> this.setFilterStatus('FILTER_NEED_PRACTICE')}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED_PRACTICE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
function mapStateToProps(state){
    return { myFilterStatus: state.filterStatus}
}
export default connect(mapStateToProps)(Footer);