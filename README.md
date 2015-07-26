# Reaktor DEMO
A new router for React using FlowRouter and ReactLayout.

~~~jsx

  Reaktor.init(
    <Router>
      <Route path="/" layout={Layout} content={BlogList} />
      <Route path="/blog/:page" layout={Layout} content={BlogPost} />
      <Route path="/about" layout={About} />
        <Route path="/about/company" layout={Layout} content={Company}  />
    </Router>
  );
~~~

And it got all the features of FlowRouter like triggers:

~~~jsx
  Reaktor.init(
    <Router>
      <Route 
        path="/" 
        layout={Layout} 
        content={BlogList} 
        triggersEnter={homePageLogger}/>
    </Router>
  );

  function homePageLogger(context, redirect) {
    if(context.queryParams.forwardToBlog) {
      redirect("/blog");
    }
  }
~~~

