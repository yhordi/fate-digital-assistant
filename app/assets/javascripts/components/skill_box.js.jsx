var SkillBox = React.createClass({

  render: function() {
    return (
      <div>
        <SkillList data={this.props.data} />
      </div>
    );
  }
});
