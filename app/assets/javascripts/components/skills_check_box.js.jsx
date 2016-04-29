var SkillsCheckBox = React.createClass({
  render: function() {
    return(
      <tr className='no-bullet'>
        <td>
          {this.props.name}
        </td>
        <td>
        <select name='level'>
          <option value='0'>Untrained</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6+</option>
        </select>
        </td>
      </tr>
    );
  }
});
