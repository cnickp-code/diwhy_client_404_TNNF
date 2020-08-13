# DIWHY API

![GitHub package.json version]()

Programmed by **Carlo Paredes, Magdalena Painter, Jon Oliver, Agatha North, and Victor Jarvis** for Thinkful's Software Engineering Immersion Program.

This program was created using HTML, CSS, Javascript, Node.js, Express, and PostgreSQL.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Live Client Project Link:

'/api/user', userRouter
'/api/auth', authRouter
'/api/interests', interestsRouter
'/api/categories', categoriesRouter
'/api/threads', threadsRouter
'/api/comments', commentsRouter
'/api/postings', postingsRouter
'/api/applicants', postingApplicantsRouter

## API Documentation

---

## POST User

Posts the users data to the database.

**URL**<br />
'/api/user'

**Method**<br />
'POST'

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

**URL**<br />
'/api/user'

**Method**<br />
'PATCH'

## GET Categories

Gets the categories from the database

**URL**<br />
'/api/categories'

**Method**<br />
'GET'

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

Posts a comment to the database

**Method**<br />
'POST'

**Success Response**<br />
_Code:_ 201<br />
_Content:_ Content, thread ID, and user ID

## GET Comments

**URL**<br />

**Method**<br />
'GET'

## GET Comment

**URL**<br />

**Method**<br />
'GET'

## PATCH Comment

Edits a comment

**URL**<br />

**Method**<br />
'PATCH'

**Success Response**<br />
_Code:_ 202<br />
_Content:_ Updated content (as updatedComments)

## DELETE Comment

Removes a comment from the database

**URL**<br />

**Method**<br />
'DELETE'

**Success Response**<br />
_Code:_ 204<br />

## GET Postings

Gets postings from the database

**URL**<br />

**Method**<br />
'GET'

**Success Response**<br />
_Code:_ 200<br />
_Content:_ Postings

## GET Posting By ID

**URL**<br />

**Method**<br />
'GET'

**Success Response**<br />
_Code:_ 200<br />
_Content:_ Posting

**Error Response** <br />
_Code:_ 404<br />
_Content:_ 'Posting does not exist.' <br />

## GET Postings By User

**URL**<br />

**Method**<br />
'GET'

**Success Response**<br />
_Code:_ 200<br />
_Content:_ Postings

## GET Postings By Category

**URL**<br />

**Method**<br />
'GET'

**Success Response**<br />
_Code:_ 200<br />
_Content:_ Postings

## POST Posting

**URL**<br />

**Method**<br />
'POST'

**Success Response**<br />
_Code:_ 201<br />
_Content:_ Title, content, user ID, category

## PATCH Posting

**URL**<br />

**Method**<br />
'PATCH'

**Success Response**<br />
_Code:_ 202<br />
_Content:_ updateData

## DELETE Posting

Removes a posting from the database

**URL**<br />

**Method**<br />
'DELETE'

**Success Response**<br />
_Code:_ 204<br />

## GET Threads

Gets threads from the database

**URL**<br />

**Method**<br />
'GET'

**Success Response**<br />
_Code:_ 200<br />
_Content:_ threads

## GET Threads By ID

Gets filtered threads from the database by ID

**URL**<br />

**Method**<br />
'GET'

**Success Response**<br />
_Code:_ 200<br />
_Content:_ newThreads

## POST Thread

Posts a thread to the database

**URL**<br />

**Method**<br />
'POST'

**Success Response**<br />
_Code:_ 201<br />
_Content:_ Title, category, date created, content, user ID

**Error Response** <br />
_Code:_ 404<br />
_Content:_ 'Missing key in request body' <br />

## PATCH Thread

Edits a thread

**URL**<br />

**Method**<br />
'PATCH'

**Success Response**<br />
_Code:_ 202<br />
_Content:_ Title, category, date created, content, user ID

## DELETE Thread

Removes a thread from the database

**Method**<br />
'DELETE'

**Success Response**<br />
_Code:_ 204<br />

## URLs (this is probably just for us to lay out each url to put in each method section, unless it's better to lay them out here?)

**Users:** '/api/user'
**Interests:** '/api/interests'
**Categories:** '/api/categories', '/api/categories/:id'
**Threads:** '/api/threads', '/api/threads/:id'
**Comments:** '/api/comments'
**Postings:** '/api/postings', '/api/postings/:id'
**Applicants:** '/api/applicants'
