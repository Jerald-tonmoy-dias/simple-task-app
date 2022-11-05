
import React, { Component } from 'react';
import './App.css';
import Column from './component/Column';
import initialData from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends Component {
  state = initialData;


  // onDragEnd function
  onDragEnd = result => {

  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

          return <Column
            key={column.id}
            column={column}
            tasks={tasks}
          />;
        })}
      </DragDropContext>
    )
  }
}

export default App;
