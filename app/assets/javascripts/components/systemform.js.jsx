var Systemform = React.createClass({
  render: function() {
    return (
      <form>
        <div>
          <label>System Name</label>
        </div>
          <input type='text'/>
        <div>
        <div>
          <label>Description</label>
        </div>
          <textarea rows='5' cols='18'></textarea>
        </div>
        <input type='submit' />
      </form>
    );
  }
});
