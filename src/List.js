import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class List extends React.Component {

    memorizedWord(){
        this.props.dispatch({type:'TOGGLE_MEMORIZED', id: this.props.myWord.id})
    }
    showWord(){
        this.props.dispatch({type:'TOGGLE_SHOW', id: this.props.myWord.id})
    }
    render() {
        
        const { en, vn, memorized, isShow } = this.props.myWord;
        const memorizedButton = memorized ? 'forget' : 'memorized';
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const meaning = isShow ? vn : '-----';
        const showButton = isShow ? 'Hide' : 'Show';
        return (
            <View style={{ backgroundColor: '#D2DEF6', margin: 10, padding: 10 }}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text>{meaning}</Text>
                <View style={{ flexDirection: 'row', justifyContent:'center', marginTop:5 }}>
                    <TouchableOpacity onPress={()=> this.memorizedWord()} style={{ marginRight: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Text style={{ color: 'black', margin:5 }}>{memorizedButton}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.showWord()} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                        <Text style={{ color: 'black', margin: 5 }}>{showButton}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default connect()(List);