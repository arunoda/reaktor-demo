Reaktor = {
  init: function(el) {
    React.renderToString(el);
  }
};

Router = React.createClass({
  render() {
    return <div>
      {this.props.children}
    </div>;
  }
});

Route = React.createClass({
  componentWillMount() {
    var props = this.props;
    var layoutContent = {};
    _.each(props, function(value, key) {
      if(value.prototype && value.prototype.render) {
        layoutContent[key] = value;
      }
    });

    var routeOptions = {
      action: function() {
        var context = FlowRouter.current();
        var regions = {};
        _.each(layoutContent, function(value, key) {
          regions[key] = React.createElement(value, context);
        });

        ReactLayout.render(props.layout, regions);
      }
    };

    ["triggersEnter", "triggersExit"].forEach((type) => {
      var triggers = props[type];
      if(triggers) {
        if(typeof triggers === "function") {
          triggers = [triggers];
        }
        routeOptions[type] = triggers;
      }
    });

    FlowRouter.route(props.path, routeOptions);
  },
  render() {
    return false;
  }
});