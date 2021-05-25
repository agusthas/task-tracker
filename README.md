# Task Tracker

A simple task tracker with JavaScript frontend and PHP backend.

## Frontend

The frontend of this website was built using:

**Language** : Javascript

**Framework** : [React](https://reactjs.org/)

**Styling** : [TailwindCSS](https://tailwindcss.com/), [Material UI](https://material-ui.com/)

**Tooling** : [Vitejs](https://vitejs.dev/)

**Other** : [Sweet Alert](https://sweetalert.js.org/), [@iconify/react](https://github.com/iconify/iconify-react)

## Backend

The backend of this website was built using:

**Language** : PHP

## How to run

**Backend**

1. Make sure you already have xampp installed (also mysql).

   _For installation see [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html)_

2. Install [composer](https://getcomposer.org/download/)
3. `cd` to `backend` directory and run `composer install`
4. Wait until all dependecies finished donwloading then run:

```shell
> php -S localhost:8000 -t public
```

_we use `port: 8000` as our backend server_

**Frontend**

5. Make sure you already have [NodeJs](https://nodejs.org/en/) installed _(v14.16.1 or higher)_.
6. `cd` to `frontend` directory and run `npm install`
7. Wait until all dependencies finished downloading then run:

```shell
> npm run dev
```

_this will start a dev server in `port: 3000`_

8. Make sure you have two terminal open, one running the backend, and the other running the frontend.
9. Navigate to [`localhost:3000`](http://localhost:3000/).
10. Enjoy the **task tracker!**.

## Contributors

**Frontend**

- [SuzuMantan](https://github.com/agusthas)

**Backend**

- [dt](https://rickt25.github.io/)
