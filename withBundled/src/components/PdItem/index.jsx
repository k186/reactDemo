import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PdItem extends Component {
  constructor(props) {
    super(props);
    this.triggerChange = this.triggerChange.bind(this);
  }

  /* custom methods */
  triggerChange(type) {
    this.props.itemChange(this.props.index, this.props.data, type);
  }

  /* custom methods end */
  render() {
    return (
      <li className="pd-todo-item">
        <span className={`pd-todo-check ${this.props.data.status ? `active` : ``}`} onClick={() => this.triggerChange('change')}/>
        <span>{this.props.data.value}</span>
        <span className="pd-todo-delete" onClick={() => this.triggerChange('delete')}/>
      </li>
    )
  }
}
export default PdItem
