/**
 * Created by rajendrak on 7/11/2016.
 */
import React from 'react';

export default class CreateTodo extends React.Component{
    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="What do you want to do ?" ref="createTodo"/>
                <button>Ok</button>
            </form>
        );
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.createTodo(this.refs.createTodo.value);
        this.refs.createTodo.value='';
    }
}
