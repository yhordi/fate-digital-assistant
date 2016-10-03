var Scenario = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Scenario Name</h2>
        <div>
          <h4>Scenes</h4>
          <h4>
            <a onClick={this.handleNew} href="#">Create New</a>
          </h4>
        </div>
      </div>
    )
  }
})
