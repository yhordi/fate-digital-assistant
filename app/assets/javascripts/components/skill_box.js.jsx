var SkillBox = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li>
            <a href="#">
            </a>
          </li>
          <li>
            <a href="#">
            </a>
          </li>
        </ul>
        <h2>{this.props.systemName}</h2>
        <SkillList data={this.props.data} />
      </div>
    );
  }
});
