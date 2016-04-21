var Npc = React.createClass({

  render: function() {
    return(
      <div>
        <h2>
          {this.props.systemName}
        </h2>
        <h3>
          NPC Profile
        </h3>
        <div>
          Name: {this.props.data.name}
        </div>
        <div>
          NPC Type: {this.props.data.npc_type}
        </div>
        <div>
          <h4>
            Background:
          </h4>
          <p>
            {this.props.data.background}
          </p>
        </div>
      </div>
    );
  }
});
