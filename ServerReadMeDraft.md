# DIWHY API

![GitHub package.json version]()

Programmed by **Carlo Paredes, Magdalena Painter, Jon Oliver, Agatha North, and Victor Jarvis** for Thinkful's Software Engineering Immersion Program.

This program was created using HTML, CSS, Javascript, Node.js, Express, and PostgreSQL.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live Client Project Link:

## API Documentation

---

## POST User

Posts the users data to the database.

**URL**<br />
'/api/user'

**Method**<br />
'GET'

**Data Params (Required)**<br />
Username, email, password

**Success Response**<br />
_Code:_ 201<br />
_Content:_ Username, email, password

**Error Response** <br />
_Code:_ 400<br />
_Content:_ 'Missing field in request body' <br />
_Code:_ 400<br />
_Content:_ 'Password must be longer than 8 characters'<br />
OR 'Password must be less than 72 characters' <br />
OR 'Password must not start or end with empty spaces'<br />
OR 'Password must contain one upper case, lower case, number and special character'<br />
_Code:_ 400<br />
_Content:_ 'Username already taken'
_Code:_ 400<br />
_Content:_ 'Email already taken'

## PATCH User

## GET Categories

Gets the categories from the database

**Success Response**<br />
_Code:_ 200<br />
_Content:_ categories

## GET Category

Gets a category from the database for filter/sort purposes

**Success Response**<br />
_Code:_ 200<br />
_Content:_ Category ID and name

**Error Response** <br />
_Code:_ 400<br />
_Content:_ 'Item does not exist.' <br />

## POST Comment

## GET Comments

## GET Comment

## PATCH Comment

## DELETE Comment

## GET Postings

## GET Posting

## POST Posting

## PATCH Posting

## DELETE Posting

## GET Threads

## GET Thread

## POST Thread

## PATCH Thread

## DELETE Thread
