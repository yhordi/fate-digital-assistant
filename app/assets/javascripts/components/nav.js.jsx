var Nav = React.createClass({
  render: function() {
    return(
      <h3 className={this.props.headerClass + ' no-margin'}>
        {this.props.name}
      </h3>
    );
  }
});
