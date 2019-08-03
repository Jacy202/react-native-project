//Todo.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import uuid from "uuid";
const makeid = length => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default class Todo extends React.Component {
  state = {
    newTodo: "",
    todos: ["Study", "code", "eat"]
  };

  addTodo = () => {
    if (!this.state.newTodo) {
      return;
    }
    this.setState(prevState => {
      return {
        todos: prevState.todos.concat(this.state.newTodo),
        newTodo: (prevState.newTodo = "")
      };
    });
  };

  handleChangeText = newTodo => {
    this.setState({ newTodo });
  };

  handleDeleteAll = () => {
    this.setState({
      todos: []
    });
  };

  handleDeleteOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todoItem => todoItem !== itemToBeRemoved)
    }));
  };
  render() {
    return (
      //container View
      <View style={styles.container}>
        {/* Header View */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Menu </Text>
          <Text style={styles.headerText}> Todo App </Text>
          <Text style={styles.headerText}> Settings </Text>
        </View>

        {/* Body View */}
        <View style={styles.body}>
          {/* Input and Button View */}
          {/* TextInput */}
          <View style={styles.textAndButtonView}>
            <TextInput
              style={styles.textInput}
              value={this.state.newTodo}
              underlineColorAndroid="transparent"
              placeholder="New Todo"
              placeholderTextColor="gray"
              autoCapitalize="none"
              onChangeText={this.handleChangeText}
            />

            {/* Button */}
            <TouchableOpacity onPress={this.addTodo} style={styles.addButton}>
              <Text style={styles.buttonText}>add todo</Text>
            </TouchableOpacity>
          </View>

          {/* Todo Items View */}
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => (
              <View style={styles.renderItemView}>
                <Text style={styles.todoItemText}>{item}</Text>
                <TouchableOpacity
                  onPress={e => {
                    this.handleDeleteOneItem(item);
                  }}
                >
                  <Text style={styles.deleteItemText}>X</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => makeid(5)}
          />

          {/* Remove all button */}
          <TouchableHighlight
            style={styles.removeButton}
            onPress={this.handleDeleteAll}
          >
            <Text style={styles.buttonText}> Remove all</Text>
          </TouchableHighlight>
        </View>

        {/* Footer View */}
        <View style={{ flex: 1, backgroundColor: "#222e50" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    color: "white",
    fontSize: 20
  },
  headerContainer: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#222e50",
    alignItems: "flex-end",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 0.5
  },
  todoText: {
    color: "#222e50",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 14,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222e50"
  },
  textInput: {
    marginBottom: 10,
    width: "73%",
    height: 40,
    borderColor: "#222e50",
    borderWidth: 0.1,
    padding: 10,
    borderRadius: 5
  },
  body: {
    flex: 5,
    padding: 10,
    backgroundColor: "white"
  },
  buttonText: {
    color: "white",
    fontSize: 15
  },
  addButton: {
    padding: 8,
    backgroundColor: "#222e50",
    borderRadius: 5,
    marginBottom: 30,
    width: "25%",
    alignItems: "center"
  },
  textAndButtonView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  removeButton: {
    backgroundColor: "#222e50",
    width: "100%",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: "center"
  },
  renderItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#222e50",
    padding: 10,
    marginTop: 10
  },
  todoItemText: {
    color: "#222e50",
    fontSize: 16,
    backgroundColor: "transparent"
  },
  deleteItemText: {
    fontWeight: "900",
    color: "red",
    fontSize: 19
  }
});
