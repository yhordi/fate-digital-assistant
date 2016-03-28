var SkillBox = React.createClass({
  render: function() {
    return (
      <div>
        <h2 className="no-margin">
          {this.props.systemName}
        </h2>
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
              Skills List
            </li>
          </ul>
        </div>
        <SkillList data={this.props.data} />
      </div>
    );
  }
});
