var Npc = React.createClass({
  getInitialState: function(){
    return {data: this.props.data, systemName: this.props.systemName, characterSkills: this.props.characterSkills}
  },
  backToNpcs: function(e){
    e.preventDefault()
    var systemAttributes = this.systemAttributes()
    var container = this.container()
    ReactDOM.unmountComponentAtNode(container)
    var url = '/systems/' + this.props.systemId + '/npcs'
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(
          <NpcBox data={response} npcId={this.props.id} systemName={systemAttributes.systemName} systemId={systemAttributes.systemId}/>, container
        )
      }.bind(this)
    })
  },
  container: function(){
    return document.getElementById('container')
  },
  handleDelete: function(e){
    e.preventDefault()
    var url = '/systems/' + this.props.systemId + '/npcs/' + this.props.data.id
    var systemAttributes = this.systemAttributes()
    var container = this.container()
    $.ajax({
      url: url,
      method: 'DELETE',
      success: function(response) {
        ReactDOM.unmountComponentAtNode(container)
        ReactDOM.render(
          <NpcBox data={response} systemName={systemAttributes.systemName} systemId={systemAttributes.systemId} />, container
        )
      }
    })
  },
  handleEdit: function(e){
    e.preventDefault();
    var container = this.container()
    ReactDOM.unmountComponentAtNode(container)
    ReactDOM.render(
      <NpcForm data={this.props.data} button="Update NPC" systemName={this.props.systemName} systemId={this.props.systemId} />, container
    )
  },
  onChildChanged: function(newState){
    this.setState(newState)
  },
  systemAttributes: function(){
    return {systemName: this.props.systemName,
            systemId: this.props.data.system_id}
  },
  render: function() {
    return(
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <h3>
          <a onClick={this.backToNpcs}><span className="fa fa-arrow-left"></span></a>
            NPC Profile: {this.state.data.name}
            <a id="edit-npc" title="edit npc" onClick={this.handleEdit} className='edit fa fa-pencil-square'></a>
            <a id="delete-npc" title="delete npc" onClick={this.handleDelete} className='delete fa fa-trash'></a>
          </h3>
          <div>
            NPC Type: {this.state.data.npc_type}
          </div>
          <div>
            <h4>
              Background:
            </h4>
            <p>
              {this.state.data.background}
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" id="aspects-container">
          <AspectList data={this.props.data.aspects} npcId={this.props.data.id} npc={this.props} />
        </div>
        <div className="col-md-6" id='characterSkillsListTarget'>
          <CharacterSkillsList changeParent={this.onChildChanged} systemId={this.state.data.system_id} data={this.state.data} characterSkills={this.state.characterSkills} />
        </div>
      </div>
        <div className="row">
          <div className="col-md-6" id="extras-container">
            <h3>Extras</h3>
            <div className="well well-lg">
              This feature is coming soon!
            </div>
          </div>
          <div id='stunts'>
            <div className="col-md-6" id="stunts-container">
              <StuntList data={this.props.data.stunts} npcId={this.props.data.id} npc={this.props} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 " id='stress-container'>
            <StressBox changeParent={this.onChildChanged} maxPhysicalStress={this.state.data.max_physical_stress} maxMentalStress={this.state.data.max_mental_stress} mentalStress={this.state.data.mental_stress} physicalStress={this.state.data.physical_stress} npcId={this.state.data.id}/>
          </div>
          <div className="col-md-6" id="consequences-container">
          </div>
        </div>
    </div>
    );
  }
});
