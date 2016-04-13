var SideBar = React.createClass({
  container: function(){
   return document.getElementById('container')
  },
  getSystems: function(){
    ReactDOM.unmountComponentAtNode(this.container())
  },
  render: function() {
    return (
    <div className="nav fl-left">
      <ul className="navlist">
        <li className="navItem">
        <div>
          <a onClick={this.getSystems} href='/systems/'>SYSTEMS
            <div className='fl-right system-sidebar'>
              <i className="fa fa-list fa-2x"></i>
            </div>
          </a>
        </div>
        </li>
        <li className="navItem">
          <a>GAMES
            <div className='fl-right games-sidebar'>
              <i className="fa fa-play-circle fa-2x"></i>
            </div>
          </a>
        </li>
        <li className="navItem">
          <a href={"/users/" + this.props.userId}>PROFILE
           <div className='fl-right profile-sidebar'>
             <i className="fa fa-user fa-2x"></i>
           </div>
           </a>
        </li>
        <li id="notice"></li>
      </ul>
    </div>
  )}
});
