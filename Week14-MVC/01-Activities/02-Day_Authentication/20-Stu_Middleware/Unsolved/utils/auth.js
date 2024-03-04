const withAuth = (req, res, next) => { // constant created as function
  // TODO: If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');

    // TODO: If the user is logged in, allow them to view the paintings
  } else { // middleware needs to res/ respond or call the next function
    next(); // continue with the code 
  }
};

module.exports = withAuth; // must do module exports to use withAuth elsewhere

// req= request
// res= response
