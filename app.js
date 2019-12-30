// TODO
var produce = ['Cucumber', 'Kale', 'Soup', 'Dog Food'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return <li style={style} 
      onMouseEnter={this.onHover.bind(this)} 
      onMouseLeave={this.onHover.bind(this)}>
        {this.props.item}
      </li>
  }
}

var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={produce} />
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.items.map((item, key) => (
      <GroceryListItem item={item} key={key} />
    ))}
  </ul>
);

setInterval(() => {
  ReactDOM.render(<App />, document.getElementById("app"))
}, 100);