Layout = React.createClass({
  render() {
    return <div>
      <h1>My Blog </h1>
      {this.props.content}
    </div>;
  }
});

BlogList = React.createClass({
  componentWillMount() {
    var routeContext = FlowRouter.current();
    // props is alos the routeContext
    console.log(EJSON.equals(_.keys(routeContext), _.keys(this.props)));
    var postId = this.props.params.postId;
    console.log("This is the PostId: ", postId);
  },
  render() {
    return <div>
      This is the blog list:
      <ul>
        <li><a href="/blog/hello-post">Hello Post</a></li>
      </ul>
    </div>;
  }
});

BlogPost = React.createClass({
  render() {
    var postId = this.props.params.page;
    console.log("This is the PostId: ", postId);
    return <div>
      <p><a href="/">Back</a></p>
      This is the blog post
    </div>;
  }
});

About = React.createClass({
  render() {
    return <div>
      <p>About Page</p>
    </div>;
  }
});

Company = React.createClass({
  render() {
    return <div>
      <p>We are Kadira Inc.</p>
    </div>;
  }
});