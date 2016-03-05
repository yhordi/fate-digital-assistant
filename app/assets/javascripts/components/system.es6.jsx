class System extends React.Component {
  render () {
    return (
      <div>
        <a href={'/systems/' + this.props.data.id}> {this.props.data.name}</a>
        <div>{this.props.data.description}</div>
      </div>
    );
  }
}

System.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.node
};
