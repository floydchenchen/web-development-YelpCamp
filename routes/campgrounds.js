var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

// 相当于require("../middleware/index.js"); index.js是default requirement
var middleware = require("../middleware");

// INDEX ROUTE - show all campgrounds
router.get("/", function(req, res) {
    // get all campgrounds from db
    Campground.find({}, function(error, allCampgrounds) {
        if (error) {
            console.log(error);
        } else {
            res.render("campgrounds/index", {campgrounds : allCampgrounds, currentUser : req.user}); 
        }
    });
})

// NEW ROUTE - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new"); 
});

/*------post methods-------*/
// CREATE ROUTE - add new campground to db
router.post("/", middleware.isLoggedIn, function(req, res) {
   // 1. get data from form and add to campground array 
   var name = req.body.name;
   var price = req.body.price;
   var image = req.body.image;
   var description = req.body.description;
   var author = {
       id: req.user._id,
       username: req.user.username
   };
   var newCampground = {name : name, price : price, image : image, description : description, author: author};
   // create a new camground and save to db
   Campground.create(newCampground, function(error, newlyCreated) {
       if (error) {
           console.log(error);
       } else {
           res.redirect("/campgrounds");
       }
   });
});

// SHOW ROUTE (declare this method after NEW ROUTE) - show more info about one campground
router.get("/:id", function(req, res) {
    // find the campground with the provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(error, foundCampground) {
        if (error) {
            console.log(error);
        } else {
            // render show template with that campground
            res.render("campgrounds/show", {campground : foundCampground});
        }
    });
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    // find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           req.flash("error", err.message);
           res.redirect("/campgrounds");
       } else {
           //redirect somewhere(show page)
           req.flash("success","Successfully Updated!");
           res.redirect("/campgrounds/" + req.params.id);
       }
    });
});


// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    })    
});

module.exports = router;