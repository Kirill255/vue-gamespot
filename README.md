# vue-gamespot

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Firebase

У нас в проекте нет формы для регистрации, только форма входа, т.к. нам не нужно чтобы пользователи могли создавать свои учётные записи. У нас есть только одна учётная запись (грубо говоря учётка админа) с помощью которой мы можем входить в dashboard и редактировать, добавлять/удалять контент. Её мы можем создать через firebase console в разделе Authentication.
В общем создаём одного пользователя через firebase console и с помощью него получаем доступ к dashboard.

### Firebase Auth REST API

https://firebase.google.com/docs/reference/rest/auth/
