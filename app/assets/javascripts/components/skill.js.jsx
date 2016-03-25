var Skill = React.createClass({
  render: function() {
    return(
      <div>
        <h3>
          {this.props.data.name}
        </h3>

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
