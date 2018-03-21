/*------setup express-------*/
var express = require("express");
var app             = express(),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    User            = require("./models/user"),
    flash           = require("connect-flash");

var commentRoutes       = require("./routes/comments"),
    campgroundRoutes    = require("./routes/campgrounds"),
    indexRoutes         = require("./routes/index"),
    methodOverride      = require("method-override");
    
app.set("view engine", "ejs");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
app.use(express.static(__dirname + "/public"));

/*------setup seeds-------*/
// var seedDB = require("./seeds");

/*------seed the database-------*/
// seedDB();

/*------setup ejs-------*/
var ejs = require("ejs");

/*------setup body-parser-------*/
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

/*------setup mongoose-------*/
var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/yelp_camp");
var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp"
mongoose.connect(url);


/*------setup connect-flash-------*/
app.use(flash());

// ==============================
// PASSPORT configurations
// ==============================
app.use(require("express-session")({
    secret: "a secret message",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// pass currentUser into every page
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("succes");
    next();
});

// use method-override
app.use(methodOverride("_method"));

// requiring ROUTES
app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

/*------create a socket and listen for connections-------*/
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp has started!");
});
