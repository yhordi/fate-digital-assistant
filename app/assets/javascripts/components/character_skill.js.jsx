var CharacterSkill = React.createClass({
  handleDelete: function(e) {
    e.preventDefault()
    var data = this.props.data
    this.props.delete(data)
  },
  handleEdit: function(e){
    e.preventDefault()
    this.renderLevelSelect()
  },
  onChildChanged: function(newState){
    this.setState(newState)
    this.props.changeParent(newState)
  },
  update: function(level){
    var url = '/character_skills/' + this.props.data.id
    var id = this.props.data.id
    this.props.update(level, url, id)
  },
  renderLevelSelect: function(){
    $('.fa-arrows-v').attr('disabled', 'disabled')
    $('.fa-arrows-v').addClass('disabled')
    var container = document.getElementById("levelSelectTarget" + this.props.data.id)
    ReactDOM.render(<LevelSelect level={this.props.level} npcId={this.props.npcId} id={this.props.data.id} skill={this.props.data.name} update={this.update} />, container)
  },
  render: function() {
    return(
      <li className="list-group-item">
        <div>
          <div>
            <h4 className="list-group-item-heading">{this.props.name + " "}
              <a onClick={this.handleDelete} className='delete fa fa-trash'></a>
            </h4>
            <div>
            <button onClick={this.handleEdit} className='edit fa fa-arrows-v'></button>
              Level <span id={"levelSelectTarget" + this.props.data.id }>{this.props.level}</span>
            </div>
          </div>
      </div>
      </li>
    );
  }
});
