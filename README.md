# FriendFinder

> Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

Friend Finder application is meant to simulate a simple dating app. The application is implemented using a Node.js and Express server on the back end and the Twitter Bootstrap framework on the front end.

## Bamazon for customers
### Purchase product
![](img/purchase.gif)
![](img/purchasefail.gif)

## Bamazon for managers
List a set of menu options:

### View Products for Sale
![](img/view.gif)
### View Low Inventory
![](img/low.gif)
### Add to Inventory
![](img/add.gif)
### Add New Product
![](img/new.gif)


# How to Run
For the first time only: in MySQL Workbench, connect to `localhost`, port: `3306` and run `init.sql` and `dataInsert.sql` to initialize the database.

Then, in Bash, type:
```
node bamazonCustomer.js
node bamazonManager.js
```
