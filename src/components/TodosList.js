/**
 * Created by rajendrak on 7/11/2016.
 */
import _ from 'lodash';
import React from 'react';
import TableHead from './TableHeader';
import TodoListItem from './TodoListItem'

export default class TodosList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedFilter:'All'
        }
}
    renderTaskItem(){
        const props = _.omit(this.props,'todos');
        return _.map(this.getFilteredToDos(),(todo,index) => <TodoListItem key={index}{...todo}{...props}/>);
    }
    render(){
        return(

            <div>
                <div>
                    <button onClick={this.handleClick.bind(this,'All')}> All </button>
                    <button onClick={this.handleClick.bind(this,'Completed')}> Completed </button>
                    <button onClick={this.handleClick.bind(this,'Active')}> Active </button>
                </div>
                <table>

                    <TableHead/>
                    <tbody>{this.renderTaskItem()}</tbody>
                </table>
                </div>
        );
    }
    handleClick(type){
        this.setState({selectedFilter:type});
    }
    getFilteredToDos(){
        switch (this.state.selectedFilter){
            case "All":
                return this.props.todos;
                break;
            case "Completed":
                var items=_.filter(this.props.todos,todo => todo.isComplete===true);
                return items;
                break;
            case "Active":
                var items=_.filter(this.props.todos,todo => todo.isComplete===false);
                return items;

        }
    };
}
