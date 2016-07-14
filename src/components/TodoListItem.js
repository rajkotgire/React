/**
 * Created by rajendrak on 7/11/2016.
 */
import React from 'react';

export default class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditing:false
        }
    }


    render(){
        return(
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }
    renderTaskSection(){
        const {task,isComplete} = this.props;
        const taskStyle={
            color:isComplete?'green':'red',
            cursor:'pointer'
        }
        if(this.state.isEditing){
            return(
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editingInput"/>
                    </form>
                </td>
            )
        }
        return(
            <td style={taskStyle} onClick={this.props.toggleTaskComplete.bind(this,task)}>{this.props.task}</td>
        )
    }

    renderActionSection(){
        if(this.state.isEditing){
            return (<td>
                <button onClick={this.onSaveClick.bind(this)}>Save</button>
                <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
            </td>);
        }
        return (<td>
            <button onClick={this.onEditClick.bind(this)}>Edit</button>
            <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
        </td>);
    };

    onEditClick(){
        this.setState({isEditing:true});
    };
    onCancelClick(){
        this.setState({isEditing:false});
    };
    onSaveClick(event){
        event.preventDefault();
        this.props.saveTask(this.props.task,this.refs.editingInput.value);
        this.setState({isEditing:false});
    };
    onDeleteClick(){
        this.props.deleteTodo(this.props.task);
    }
}