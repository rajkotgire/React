/**
 * Created by rajendrak on 7/10/2016.
 */
import React from 'react';
import TodosList from './TodosList.js';
import CreateTodo from './CreateTodo';
import FilterToDos from './FilterTodos'
const todos = [];

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todos
        }
    }
    render() {
        return (
        <div><h1> React App To Do </h1>
        <CreateTodo createTodo={this.createTodo.bind(this)}/>
        <TodosList todos={this.state.todos}
            toggleTaskComplete={this.toggleTaskComplete.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTodo={this.deleteTodo.bind(this)}/>
            </div>
        );
    };
    toggleTaskComplete(task){
        const findToDo=_.find(this.state.todos, todo => todo.task==task);
        findToDo.isComplete=!findToDo.isComplete;
        console.log("from App.js");
        this.setState({todos:this.state.todos});
    };
    createTodo(task){
        this.state.todos.push({
            task,
            isComplete:false
        });

        this.setState({todos:this.state.todos});
    };
    saveTask(oldTask,newTask){
        const findToDo=_.find(this.state.todos, todo => todo.task===oldTask);
        findToDo.task=newTask;
        this.setState({todos:this.state.todos});
    };
    deleteTodo(task){
       _.remove(this.state.todos, todo => todo.task===task);
        this.setState({todos:this.state.todos});
    };

}
