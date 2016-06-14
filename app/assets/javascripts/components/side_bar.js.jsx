var SideBar = React.createClass({
  container: function(){
   return document.getElementById('container')
  },
  getSystems: function(e){
    e.preventDefault()
    ReactDOM.unmountComponentAtNode(this.container())
    ReactDOM.unmountComponentAtNode(document.getElementById('nav-container'))
    $.ajax({
      url: 'systems/',
      success: function(response){
        ReactDOM.render(<SystemBox data={response}/>, this.container())
      }.bind(this)
    })
  },
  render: function() {
    return (
      <ul className="nav">
        <li>
          <div>
            <a onClick={this.getSystems} href='/systems/'>
              <i title="View your systems." className="fa fa-list fa-2x fa-stack"></i>
              SYSTEMS
            </a>
          </div>
        </li>
        <li>
          <div>
            <a>
              <i title="View your games." className="fa fa-play-circle-o fa-2x fa-stack"></i>
              GAMES
            </a>
          </div>
        </li>
        <li className="navItem">
         <div>
            <a href={"/users/" + this.props.userId}>
              <i title="View your profile." className="user fa fa-user fa-2x fa-stack"></i>
                PROFILE
              </a>
           </div>
        </li>
        <li id="notice"></li>
      </ul>
  )}
});
