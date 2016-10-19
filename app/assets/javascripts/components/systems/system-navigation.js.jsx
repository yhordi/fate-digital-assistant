var SystemNavigation = React.createClass({
  container: function(){
    return document.getElementById('container')
  },
  setUrl: function(url){
    window.history.pushState(null, null, url);
  },
  deactivate: function(){
    var active = document.getElementsByClassName('active')
    for(i in active) {
      active[i].className = "";
    }
  },
  getNpcs: function(e){
    e.preventDefault()
    this.setUrl('/systems/' + this.props.id + '/npcs/')
    this.deactivate()
    var tab = e.target.parentElement
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
    this.setUrl('/systems/' + this.props.id + '/skills/')
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
  getScenarios: function(e){
    e.preventDefault()
    this.setUrl('/systems/' + this.props.id + '/scenarios/')
    this.deactivate()
    skillTab = e.target.parentElement
    skillTab.setAttribute("class", "active")
    var container = this.container()
    var url = e.target.href
    var systemName = this.props.name
    var systemId = this.props.id
    $.ajax({
      url: url,
    }).done(function(response){
      ReactDOM.render(
        <ScenarioBox data={response} systemName={systemName} systemId={systemId} />, container
      );
    })
  },
  render: function(){
    return(
      <div>
        <a className={this.props.headerClass + ' no-margin'}>
          {this.props.name}
        </a>
        <ul className="nav nav-tabs">
          <li>
            <a id="skillIndex" onClick={this.getSkills} href={"/systems/" + this.props.id + "/skills/"}>Skills</a>
          </li>
          <li>
            <a id="scenarioIndex" onClick={this.getScenarios} href={"/systems/" + this.props.id + "/scenarios/"}>Scenarios</a>
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
