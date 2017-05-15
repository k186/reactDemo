import React, {Component} from 'react';
import './App.scss';
import PdTod from '@component/PdTodo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        {
          value: 'todo1',
          status: false,
          id: 1
        },
        {
          value: 'todo2',
          status: false,
          id: 2
        },
        {
          value: 'todo3',
          status: false,
          id: 3
        }
      ]
    };
    this.changeTodoData = this.changeTodoData.bind(this);
    this.insert = this.insert.bind(this);
  }

  insert(value) {
    value = value.replace(/(^\s*)|(\s*$)/g, '');
    if (value === '') {
      return false
    }
    let id = this.state.todoData[this.state.todoData.length - 1] ? this.state.todoData[this.state.todoData.length - 1].id : 0
    let data = {value: value, status: false, id: id + 1};
    let datas = this.state.todoData;
    datas.push(data)
    this.setState({todoData: datas})
  }

  changeTodoData(index, data, type) {
    console.log(`${index}____________${JSON.stringify(data)}__________________${JSON.stringify(type)}`)
    let finalData = this.state.todoData;
    if (type === 'delete') {
      finalData.splice(index, 1)
    }
    if (type === 'change') {
      finalData[index].status = !finalData[index].status
    }
    this.setState({todoData: finalData})
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <PdTod listData={this.state.todoData} handleToChange={this.changeTodoData} insert={this.insert}/>
      </div>
    )
  }
}

export default App;
