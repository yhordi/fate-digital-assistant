var SkillsChecklist = React.createClass({
  addSkillToNpc: function(e){
    e.preventDefault()
    var url = '/systems/'
  },
  render: function() {
    var checkboxes = this.props.data.map(function(skill, index) {
      return(
        <SkillsCheckBox name={skill.name} key={index}/>
      )
    });
    return(
      <div>
        <div>
          <form onSubmit={this.addSkillToNpc}>
            <select>
              {checkboxes}
            </select>
            <select name='level'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6+</option>
            </select>
            <input type='submit' />
          </form>
        </div>
      </div>
    )
  }
});
