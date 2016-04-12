var SideBar = React.createClass({
  container: function(){
   return document.getElementById('container')
  },
  getSystems: function(e){
    e.preventDefault
    ReactDOM.unmountComponentAtNode(this.container())
  },
  render: function() {
    return (
    <div className="nav">
      <ul className="navlist">
        <li className="navItem">
          <a onClick={this.getSystems} href='/systems/'>SYSTEMS</a>
        </li>
        <li className="navItem">
          <p>GAMES</p>
        </li>
        <li className="navItem">
          <a href={"/users/" + this.props.userId}>PROFILE</a>
        </li>
        <li id="notice"></li>
      </ul>
    </div>
  )}
});
