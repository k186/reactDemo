for development 
```html
<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
```
for production
```html
<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
```
babel
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```

更新UI
```javascript
/*通过*/ 
this.setState({key:value})
/*异步更新*/
this.setState(function(prevState,props) {
  /*your code*/
})
/* 这里跟vue 有差别 vue里面是每个组件的data 会自动更新到UI,react 需要使用setState方法,异步VUE里面还没有接触过*/
```
