var CharacterSkillsList = React.createClass({

  render: function() {
    var characterSkills = this.props.data.map(function(characterSkill, index){
      return (
        <CharacterSkill data={characterSkill} key={index} />
      )
    })
    return(
    <ul className='no-bullet'>
      {characterSkills}
    </ul>
    );
  }
});
