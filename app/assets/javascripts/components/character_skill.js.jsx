var CharacterSkill = React.createClass({
  render: function() {
    return(
      <li className="skillCard">
          <h3 className="no-margin card-header">{this.props.data.name}</h3>
        <div>
          Level {this.props.data.level}
          </div>
        <div>
          <button onClick={this.handleEdit} className='edit fa fa-pencil-square-o'></button>
          <button onClick={this.handleDelete} className='delete fa fa-trash'></button>
        </div>
      </li>
    );
  }
});
