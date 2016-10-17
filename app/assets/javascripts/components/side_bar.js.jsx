var SideBar = React.createClass({
  container: function(){
   return document.getElementById('container')
  },
  deactivate: function(){
    var active = document.getElementsByClassName('active')
    for(i in active) {
      active[i].className = "";
    }
  },
  getSystems: function(e){
    e.preventDefault()
    var url = '/systems/'
    window.history.pushState("object or string", "Title", url);
    ReactDOM.unmountComponentAtNode(this.container())
    ReactDOM.unmountComponentAtNode(document.getElementById('nav-container'))
    $.ajax({
      url: url,
      success: function(response){
        ReactDOM.render(<SystemBox data={response}/>, this.container())
      }.bind(this)
    })
  },
  render: function() {
    return (
      <ul className="nav nav-pills nav-stacked">
        <li role="presentation">
          <a onClick={this.getSystems}>
            <i title="View your systems." className="fa fa-list fa-2x fa-stack"></i>
            SYSTEMS
          </a>
        </li>
        <li className="disabled" role="presentation">
          <a>
            <i title="View your games." className="fa fa-play-circle-o fa-2x fa-stack"></i>
            GAMES
          </a>
        </li>
        <li role="presentation">
          <a href={"/users/" + this.props.userId}>
            <i title="View your profile." className="user fa fa-user fa-2x fa-stack"></i>
              PROFILE
          </a>
        </li>
        <li id="notice"></li>
      </ul>
  )}
});
