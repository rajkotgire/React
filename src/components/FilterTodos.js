/**
 * Created by rajendrak on 7/12/2016.
 */

import React from 'react';

export default class FilterToDos extends  React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            selectedFilter:'All'
        }
    }
    render(){
        return (
           <div>
                <button onClick={this.handleClick.bind(this,'All')}> All </button>
                <button onClick={this.handleClick.bind(this,'Completed')}> Completed </button>
                <button onClick={this.handleClick.bind(this,'Active')}> Active </button>
            </div>
        );
    }


}
