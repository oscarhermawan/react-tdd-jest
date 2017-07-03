import React from 'react';

export default class HelloSection extends React.Component {
  constructor(){
    super()
    this.state = {
      kanbans:[
        { id:1, task:'learn javascript', value:'doing' },
        { id:2, task:'learn java', value:'backlog' },
        { id:3, task:'learn php', value:'done' }
      ]
    }
  }

  addTask(newTask){
    this.setState({
      kanbans:[...this.state.kanbans, newTask]
    })
  }

  deleteTask(taskId){
    this.setState({
      kanbans:this.state.kanbans.filter(kanban => kanban.id !== taskId),
    })
  }

  render() {
    return (
      <section>
        <h1>Kanban App</h1>
        <ul>
          {
            this.state.kanbans.map(kanban =>
            <li key={kanban.id}>
              {kanban.task} 
              <button className="delete-btn" onClick={() => this.deleteTask(kanban.id)}>DELETE</button>
            </li>
          )}
        </ul>
      </section>
    );
  }
}
