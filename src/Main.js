import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import List from './List';
import Footer from './Footer';
import Header from './Header';
import Form from './Form';
class Main extends React.Component {
    getWordList() {
        const { myFilter, myWords } = this.props;
        if (myFilter === 'SHOW_ALL') {
            return myWords;
        } else if (myFilter === "MEMORIZED") {
            return myWords.filter(e => e.memorized);
        } else if (myFilter === 'NEED_PRACTICE') {
            return myWords.filter(e => !e.memorized);
        }
    }
    render() {
        return (
            <View style={{ backgroundColor: 'yellow', flex: 1, alignSelf: 'stretch', justifyContent: 'space-between' }}>
                <Header />
                <View style={{ flex: 10 }}>
                    {this.props.myIsAdding ? <Form /> : null}
                    <FlatList
                        data={this.getWordList()}
                        renderItem={({ item, index }) => <List myWord={item} />}
                        //keyExtractor={index => index}
                    />
                </View>
                <Footer />
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding,
    }
}

export default connect(mapStateToProps)(Main);