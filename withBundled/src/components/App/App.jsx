import React, {Component} from 'react';
import './App.scss';
import PdTod from '@component/PdTodo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        {
          value: '大家阿里三闾大夫奥斯卡',
          status: false
        },
        {
          value: '范德萨',
          status: false
        },
        {
          value: '范德萨333',
          status: false
        }
      ]
    };
    this.changeTodoData = this.changeTodoData.bind(this);
    this.insert = this.insert.bind(this);
  }

  insert(value) {
    let data = {value: value, status: false};
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
