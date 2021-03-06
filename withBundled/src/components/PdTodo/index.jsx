import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PdItem from '@component/PdItem'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './pdtodo.scss'

class PdTodo extends Component {
  constructor(props) {
    super(props);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleItemChange(index, data, type) {
    this.props.handleToChange(index, data, type)
  }

  handleInput(e) {
    if (e.keyCode === 13) {
      this.props.insert(this.refs.todoInput.value);
      this.refs.todoInput.value = '';
    }
  }

  render() {
    return (
      <div className="pd-todo">
        <input type="text" className="pd-todo-input" ref="todoInput" onKeyDown={this.handleInput}/>
        <ul className="pd-todo-list">
          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionAppear={true}
          transitionAppearTimeout={2000}>
            {this.props.listData.map((el, index) => <PdItem itemChange={this.handleItemChange} key={el.id} data={el} index={index}/>)}
          </CSSTransitionGroup>
        </ul>
      </div>
    )
  }
}
PdTodo.propTypes = {
  listData: PropTypes.array
}
export default PdTodo
