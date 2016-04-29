var SkillsChecklist = React.createClass({
  render: function() {
    var checkboxes = this.props.data.map(function(skill, index) {
      return(
        <SkillsCheckBox name={skill.name} key={index}/>
      )
    });
    return(
      <div>
        <h2>
          Skills for NPC: {this.props.npcName}
        </h2>
        <div>
          <table>
            <tr>
              <th>Skill Name</th>
              <th>Skill Level</th>
            </tr>
            {checkboxes}
          </table>
        </div>
      </div>
    )
  }
});
