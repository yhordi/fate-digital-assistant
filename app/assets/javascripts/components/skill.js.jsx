var Skill = React.createClass({
  render: function() {
    return(
      <div>
        <h3 className="no-margin">
          {this.props.data.name}
        </h3>
        <div className="m-btm-m">
          <ul className="list-hz">
            <li>
              <a href="#">
                My Systems
              </a>/
            </li>
            <li>
              <a href="#">
                {this.props.systemName}
              </a>/
            </li>
            <li>
              <a href="#">Skills List</a>
            </li>
            <li>
              {this.props.name}
            </li>
          </ul>
        </div>

        <h4>Overcome</h4>
        <p>
          {this.props.data.overcome}
        </p>
        <h4>Create an advantage</h4>
        <p>
          {this.props.data.advantage}
        </p>
        <h4>Attack</h4>
          <p>
            {this.props.data.attack}
          </p>
        <h4>Defend</h4>
          <p>
            {this.props.data.defend}
          </p>
      </div>
    )
  }
});
