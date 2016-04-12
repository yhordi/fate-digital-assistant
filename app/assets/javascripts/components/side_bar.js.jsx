var SideBar = React.createClass({

  render: function() {
    return (
    <div className="nav">
      <ul className="navlist">
        <li className="navItem">
          <a>SYSTEMS</a>
        </li>
        <li className="navItem">
          <a>GAMES</a>
        </li>
        <li className="navItem">
          <a href={"/users/" + this.props.userId}>PROFILE</a>
        </li>
        <li id="notice"></li>
      </ul>
    </div>
  )}
});
