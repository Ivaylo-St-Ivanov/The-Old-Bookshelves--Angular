# The-Old-Bookshelves--Angular
This is a repository for a project defense to Software University Angular course.

The application is deployed in GitHub Pages and can be found here: https://the-old-bookshelves.github.io

### About "The Old Bookshelves" web app

"The Old Bookshelves" is a web application representing an online bookstore. Visitor are able to find here both new and second-hand books, from recent editions to hard-to-find world literature. After successful registration any user can purchase a book from the site or put their books up for sale.

    ------------------------------

The client side of the app is a single page app, built with Angular and it is following the Angular development concepts. The application have responsive design and аll components use separately CSS modules. Client-side routing, error handling and data validation are implemented.

    ------------------------------

Back4App is one of the popular BaaS (Back-end as a Service) providers, which is used here for the backend purposes and for the storage. More information about Back4App can be found here: (https://www.back4app.com/).

    ------------------------------

The application consists of a public part (accessible without authentication) and a private part (available to registered users).

### Functionality and Pages

Home page

    - Dynamically slides view on the top of the page.
    - Loads five random books dynamically from the back-end.
    - By clicking on a book opens a details page of the current book.

About page

    - Shows information about the site.

Catalog page

    - Loads all books dynamically from the back-end.
    - By clicking on a book opens a details page of the current book.
    - You can search by author or by book title in search bar on the top of the page.

Details pages

    - Loads dynamically from the back-end details about the specific book and (if logged) a purchase can be done.
    - Also the owners of book can edit and delete their own books.
    - Authenticated user, but not owner of the current book, can buy this book.
    - Authenticated user are able to rate the books.

User Registration (on Registering page)

    - Registering a new user is possible by providing username, email and password.

User Login (on the Login page)

    - Login is possible with email and password.

User Logout (in Header right to the shown username)

    - Logout from the application.

Sell-book page

    - A new book for sale entry can be created and saved into the database (only for authenticated users).

Edit page

    - Existing books can be edited and saved into the database (only for owner users).

Delete book

    - Removing an existing book entry from the database (only for owner users).

User profile page

    - Loads dynamically from the back-end details about the current user.
    - Loads dynamically from back-end all books that current user created for sale.
    - Loads dynamically from back-end all purchases of the current user.
    - By clicking on a book opens a details page of the current book.

Guard page

    - This page is displayed when an unauthenticated user tries to access a page that requires authentication.

Page 404

    - This page is displayed when the path we are trying to access is not valid.

### Getting started

    1.Install all dependencies – 'npm i'

    2.Start the application with 'ng s' in the client directory.

### Copyright and Author

    Ivaylo Ivanov