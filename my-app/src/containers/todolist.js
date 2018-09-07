import React,{Component} from 'react';
import classes from './todolist.css';
import AddTask from '../components/addTask'

class todolist extends Component{
    render(){

        return(
            <div>
            <h1 class="background">Todo List container</h1>
            <AddTask/>
            </div>
        );
    }

}
export default todolist;