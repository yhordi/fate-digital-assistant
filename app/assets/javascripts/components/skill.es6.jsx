class Skill extends React.Component {
  render () {
    return (
      <div>
        <a>{this.props.data.name}</a>
        <p>{this.props.data.description}</p>
      </div>
    );
  }
}

Skill.propTypes = {
  id: React.PropTypes.number,
  name: React.PropTypes.string,
  description: React.PropTypes.node
};
