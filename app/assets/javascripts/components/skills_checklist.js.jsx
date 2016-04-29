var SkillsChecklist = React.createClass({

  render: function() {
    var checkboxes = this.props.data.map(function(skill, index) {
      return(
        <SkillsCheckBox name={skill.name} key={index}/>
      );
    });
    return(
      <div>
        <ul>
          {checkboxes}
        </ul>
      </div>
    )
  }
});
