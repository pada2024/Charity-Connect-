# Charity-Connect-

Charity connect is an application that will allow you to search for a charity that meets your needs and get relevant details regarding said charity and give donations.

## Table of Contents

[Introduction](#introduction) <br/>
[Future Development](#future-development) <br/>
[Setup](#setup) <br/>
[Usage](#usage)<br/>
[Links](#Links)


## Introduction

The project introduces an MERN interface similar to Yelp where a user may create an account, thenm based on their location, find the closest charities (in this case, food banks) in order to help out and make donations.


## Future Development
- include mutation to include other genre's of charities/add new charities 
- include mutation to leave comments under charities
- future development ideas include volunteer signup forms, monetary  donations, etc.
- CSS styling in order to customize pages


## Setup
- **npm run build** (creates dist file)
- **node server/seeders/seeds** (seeds data from database)
- **npm run develop** (launches in local PORT 3000, then GraphQL launches in PORT 3001)


## Usage
- Front End (client folder): <br/>
    - `components`: different html files for users to see and interact with
    - `utils`: mutations & queries for numerous details for certain schema's
    - `main.jsx`: file which uses *components* folder to navigate users to different performing functionalities

- Back End (server folder): <br/>
    - `config`: *connection.js* file to database in Mongoose 
    - `controllers`: interacts with front-end pages to enable functionality
    - `models`: layout for database foundation and for certain parts of the app for better view and information gathering
    - `routes`: for handling and carrying out various CRUD operations in application
    - `schemas`: *typeDefs* & *resolvers* which talk to the front end's mutations & queries for front-end/back-end interaction and data changing
    - `seeders`: default data to plant into existing database
    - `utils`: contains *auth.js* for using JWT token for handling login sessions


## Links

- Github: https://github.com/pada2024/Charity-Connect-
- Render: https://charity-connect-6zhm.onrender.com/




