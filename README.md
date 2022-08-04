# CRUD Operation in Javascript Backend

I have demonstrated CRUD operations using Nodejs, Expressjs and MongoDB.
Also I had wrote the Dockerfile using which you can make the docker image and then using docker-compose you can run the app.

### Steps to run the code:- (Docker should be installed before moving forward)
> docker build crudapp:1.0 .
> docker-compose up -d

The app will be running at 127.0.0.1:3000

The endpoints are :- 
> /add - To add a particular user to the app(GET request)
> /find/{email} - To read data(POST request)
> /update - To update data(PATCH request)
> /delete - To delete data(DELETE request)

The db schema used is :-
{
"name":<name of the user>,
"email"<email of the user>,
"password":<password of the user>
}
