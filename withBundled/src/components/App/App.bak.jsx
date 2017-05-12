import React, {Component} from 'react';
import './App.scss';

class App extends Component {
  /* 初始化 state ,当前组件实例化 */
  constructor(props) {
    super(props);
    this.state = {test: ''};
    console.log('constructor');
    this.renderd = this.renderd.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  renderd() {
    console.log('render');
    return 1
  }

  /* render 方法 vue 里面自动帮你把template 给输送进render */
  /* 一个component 必须要有render method */
  render() {
    return (
      <div>{this.renderd()}</div>
    );
  }

  /*
   * 组件实例 还在虚拟dom？
   *
   * // todo  跟vue mounted 对比？？
   *
   * */
  componentDidMount() {
    console.log('componentDidMount')
  }

  /* only called if parent updated */
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  /*  */
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  /* The instance is now blank, released by React and ready for GC. */
  // destoryed() {}
}

export default App;
