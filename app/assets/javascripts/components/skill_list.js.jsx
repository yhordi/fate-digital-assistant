var SkillList = React.createClass({

  render: function() {
    // debugger
    var skillLinks = this.props.data.map(function(system, index) {
      return (
        <Systemlink data={system} index={index} />
      )
    }.bind(this));
    return (
      <div className='skillList'>
        {skillLinks}
      </div>
    );
  }
});
