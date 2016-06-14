var Nav = React.createClass({
  render: function() {
    return(
      <div>
        <h3 className={this.props.headerClass}>
          {this.props.name}
        </h3>
        <SystemNavigation id={this.props.id}/>
      </div>
    );
  }
});
