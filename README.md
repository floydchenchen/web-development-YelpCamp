# YelpCamp Project

## Visiting the page
This page could be visited at:
https://floydyelpcamp.herokuapp.com/


## Initial Routes
* add landing page
* add campgrounds page that lists all campgrounds:
    * name
    * image

## Layout and Basic Styling
* create header and footer partials
* add in bootstrap

## Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic un-styled form

## Styling the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Styling the Navbar and Form
* Add a navbar to all templates
* Style the campground form

## Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

## Show page
* Review the RESTful route
* Add descriptions to our campground model
* Show db.\<collection>\.drop(): delete everything in the \<collection\>
* Add a show route/template

### RESTFUL routes example

| name | url | verb | description |
| --- | --- | --- | --- |
| INDEX | /dogs | GET | display a list of all dogs |
| NEW | /dogs/new | GET | display form to make a new dog |
| CREATE | /dogs | POST | add new dog to db |
| SHOW | /dogs/:id | GET | show info about one dog |
| EDIT | /dogs/:id/edit | GET | show edit form for one dog |
| UPDATE | /dogs/:id | PUT | update a particular dog, then redirect somewhere |
| DESTROY | /dogs/:id | DELETE | delete a particular dog, then redirect somewhere|

## Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

## Seeding the Database
* Add a seeds.js file
* Run the seeds file every time the server starts

## Add the Comment model
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

### Nested routes
INDEX /campgrounds
NEW /campgrounds/new
CREATE /campgrounds
SHOW /campgrounds/:id

NEW /campgrounds/:id/comments/new GET
CREATE /campgrounds/:id/comments  POST

## Style Show Page
* Add sidebar to show page
* Display comments nicely

## Auth Pt.1 - Add User Model
* Install all packages needed for auth
* Define User model

## Auth Pt.2 - Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt.3 - Login
* Add login routes
* Add login template

## Auth Pt.4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

## Refactor the routes
* Use express router to reorganize all routes

## Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

## User + Campgrounds
* Prevent an unauthenticated user from creating a campground
* save username and id to newly created campground

## Editing Campgrounds
* Adding method-override
* Add edit route for campgrounds
* Add link to edit page
* Add update route

## Deleting Campgrounds
* Add destroy route
* Add delete button

## Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

### Authentication vs Authorization
* authentication: find if someone is who he says he is
* authorization: permissions/what can a person do after you know who he is

## Editing Comments
* Add edit route for comments
* Add edit button
* Add update route

## Deleting Comments
* Add destroy route
* Add delete route

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor middleware

## Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header

