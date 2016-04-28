var NpcForm = React.createClass({

  render: function() {
    return(
      <div className='row center'>
        <form className='form npc-form'>
        <h3 className='form-header npc-header'>
          {this.props.button}
          <a className="close-form" onClick={this.handleBack}>
            <span className="fa fa-close">
            </span>
          </a>
        </h3>
          <div>
            <input className="form-field"type='text' placeholder='name'/>
          </div>
          <div>
            <select className="form-field select" name='npc-type'>
              <option value="Main">Main</option>
              <option value="Supporting">Supporting</option>
              <option value="Nameless">Nameless</option>
            </select>
          </div>
          <div>
            <textarea className="form-field" placeholder='background'></textarea>
          </div>
          <input type="hidden" name="systemId" value={this.props.systemId}/>
          <input className='submit' type="submit" value={this.props.button} />
        </form>
      </div>
    );
  }
});
