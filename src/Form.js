import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding, addWord } from '../redux/actionCreators';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vn:'',
            en:'',
        }
    }

    onAdd(){
        const {vn, en} = this.state;
        this.props.addWord(en,vn);
        this.props.toggleIsAdding();
    }

    render() {
        return (
            <View style = {{alignSelf:'stretch', justifyContent:'center', alignItems:'center'}}>
                <TextInput
                    style={{margin:10, paddingHorizontal:10,  width: 300, height: 40, backgroundColor: '#E4f6d4' }}
                    value = {this.state.en}
                    onChangeText = {(text)=> this.setState({en:text})}
                    placeholder='English Word'
                />
                <TextInput
                    style={{margin:10, paddingHorizontal:10, width: 300, height: 40, backgroundColor: '#E4f6d4' }}
                    value = {this.state.vn}
                    onChangeText = {(text)=> this.setState({vn:text})}
                    placeholder= 'Meaning'
                />
                <TouchableOpacity onPress={()=>this.onAdd()}>
                    <Text>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default connect(null, {addWord, toggleIsAdding})(Form);