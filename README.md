Eventz - A platform for managing user events.
=======

## Vision
Create a community of people subscribing for various events.

---

## API Spec
The preferred JSON object to be returned by the API should be structured as follows:

### Users (for authentication)

```source-json
{
  "user": {
    "name": "Mark John"
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
    "password": "hg44hkh33jhj33"
  }
}
```
### Event
```source-json
{
  "profile": {
    "name": "jake",
    "description": "I work at statefarm",
    "event_date": "2016-02-18",
    "following": false
  }
}
```
### Other status codes:
401 for Unauthorized requests, when a request requires authentication but it isn't provided

403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

404 for Not found requests, when a resource can't be found to fulfill the request


Endpoints:
----------

### Authentication:

`POST /api/v1/user/create`

Example request body:

```source-json
{
  "user":{
    "name": "Kola Adeti"
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a User

Required fields: `email`, `password`

### Registration:

`POST /api/users`

Example request body:

```source-json
{
  "user":{
    "username": "Jacob",
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a User

Required fields: `email`, `username`, `password`
