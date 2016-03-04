class System extends React.Component {
  render () {
    return (
      <div>
        <a href={this.props.id}>{this.props.name}</a>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

System.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.node
};
