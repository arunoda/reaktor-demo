

  Reaktor.init(
    <Router>
      <Route path="/" layout={Layout} content={BlogList} triggersEnter={homePageLogger} />
      <Route name="blogPage" path="/blog/:page" layout={Layout} content={BlogPost} />
      <Route path="/about" layout={About} />
        <Route path="/about/company" layout={Layout} content={Company}  />
    </Router>
  );

  function homePageLogger() {
    console.log("we are on the home route");
  }

