Layout = React.createClass({
  render() {
    return <div>
      <h1>My Blog </h1>
      {this.props.content}
    </div>;
  }
});

BlogList = React.createClass({
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