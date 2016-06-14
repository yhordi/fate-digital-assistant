var SystemNavigation = React.createClass({
  container: function(){
    return document.getElementById('container')
  },
  deactivate: function(){
    var active = document.getElementsByClassName('active')
    for(i in active) {
      active[i].className = "";
    }
  },
  getNpcs: function(e){
    e.preventDefault()
    this.deactivate()
    tab = e.target.parentElement
    tab.setAttribute("class", "active")
    var container = this.container()
    var url = e.target.href
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(
          <NpcBox data={response} systemName={this.props.name} systemId={this.props.id} />, container
        );
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  },
  getSkills: function(e) {
    e.preventDefault();
    this.deactivate()
    skillTab = e.target.parentElement
    skillTab.setAttribute("class", "active")
    var container = this.container()
    var url = e.target.href
    var systemName = this.props.name
    var systemId = this.props.id
    $.ajax({
      url: url,
    }).done(function(data){
      ReactDOM.render(
        <SkillBox data={data} systemName={systemName} systemId={systemId} />, container
      );
    })
  },
  render: function(){
    return(
      <div>
        <h3 className={this.props.headerClass + ' no-margin'}>
          {this.props.name}
        </h3>
        <ul className="nav nav-tabs">
          <li>
            <a id="skillsIndex" onClick={this.getSkills} href={"/systems/" + this.props.id + "/skills/"}>Skills</a>
          </li>
          <li>
            <a>Games</a>
          </li>
          <li>
            <a id="npcIndex" onClick={this.getNpcs} href={"/systems/" + this.props.id + "/npcs/"}>NPCs</a>
          </li>
          <li>
            <a>Locations</a>
          </li>
        </ul>
      </div>
    )
  }
})
