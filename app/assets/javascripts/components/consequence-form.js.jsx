var ConsequenceForm = React.createClass({
  render: function(){
    return(
    <div>
      <form>
        <input type='text' name='name' placeholder='consequence text' />
        <input type='hidden' value={this.props.severity} />
        <input type='submit' />
      </form>
    </div>
    )
  }
})
