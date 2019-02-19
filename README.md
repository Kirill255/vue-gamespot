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

### Firebase database rules

Читать могут все, а записывать только если "auth != null", в нашем случае это только админ.

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

## Cloudinary

https://cloudinary.com/documentation/upload_images#uploading_with_a_direct_call_to_the_api

Так как мы загружаем картинки с клиента просто через POST-запрос по прямой ссылке, а не с сервера (для сервера есть специальные библиотеки под каждый язык), то сначала нам нужно включить 'Enable unsigned uploading', после чего будет сгенерирован новый пресет, нам нужно его название 'Name'.

![account-details](https://user-images.githubusercontent.com/24504648/53042044-74c02900-3496-11e9-8217-fd90e9fd3c91.png)

![cloudinary-settings](https://user-images.githubusercontent.com/24504648/53042057-7ab60a00-3496-11e9-9a0c-05bef15c551b.png)

![enable-unsigned-uploading](https://user-images.githubusercontent.com/24504648/53042068-7ee22780-3496-11e9-9007-a68ef86240ac.png)
