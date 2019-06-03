import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

class App extends React.Component{
    state = {
        text: "",
        todo: []
    }

    addTodo = () => {
       var newTodo = this.state.text;
       var arr = this.state.todo;
       arr.push(newTodo);
       this.setState({
            todo: arr,
            text: ""
       })
    };

    deleteTodo = (t) => {
        var arr = this.state.todo;
        var position = arr.indexOf(t);
        arr.splice(position,1);
        this.setState({
            todo:arr
        });
    };

    renderTodos = () => {
        return this.state.todo.map(t => {
            return (
                <TouchableOpacity key={t}>
                    <Text
                        onPress={() =>{this.deleteTodo(t)}}
                        style={styles.list}
                    >
                    {t}
                    </Text>
                </TouchableOpacity>
            );
        })
    };

    render(){
        return(
            <View style={styles.genContainer}>
                <View style={styles.viewStyle}>
                    <Text style={styles.header}>Inspire yourself</Text>
                    <TextInput
                        style={styles.tiStyle}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}
                    />
                    <Button 
                        onPress={this.addTodo}
                        title="Add"
                        color="white"
                    />
                    <View style={{marginTop: 100}}/>
                    {this.renderTodos()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    genContainer: {
        flex: 1,
        backgroundColor: '#FFCCBC'
    },
    viewStyle: {
        marginTop: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 10
    },
    header:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    tiStyle: {
        height: 40,
        borderColor: '#aaa',
        borderWidth: 1,
        width: '90%',
        margin: 10,
        backgroundColor: '#FFAB91'
    },
    list: {
        fontSize: 24,
        color: '#FF3D00'
    }
});

export default App;