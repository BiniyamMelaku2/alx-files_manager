# alx-files_manager

# 0x04. Files manager

a simple platform to upload and view files:

* User authentication via a token
* List all files
* Upload a new file
* Change permission of a file
* View a file
* Generate thumbnails for images

## Resources
Read or watch:

* [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
* [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
* [Express getting started](https://expressjs.com/en/starter/installing.html)
* [Mocha documentation](https://mochajs.org/)
* [Nodemon documentation](https://github.com/remy/nodemon#nodemon)
* [MongoDB](https://github.com/mongodb/node-mongodb-native)
* [Bull](https://github.com/OptimalBits/bull)
* [Image thumbnail](https://www.npmjs.com/package/image-thumbnail)
* [Mime-Types](https://www.npmjs.com/package/mime-types)
* [Redis](https://github.com/redis/node-redis)

## Provided files
[package.json](./package.json)

[.eslintrc.js](./.eslintrc.js)

[babel.config.js](./babel.config.js)

##### and…
Don’t forget to run `$ npm install` when you have the `package.json`

# Tasks

## [0. Redis utils](./utils/redis.js)
Inside the folder `utils`, create a file `redis.js` that contains the class `RedisClient`.

`RedisClient` should have:
* the constructor that creates a client to Redis:
  `any error of the redis client must be displayed in the console (you should use on('error') of the redis client)`
* a function `isAlive` that returns `true` when the connection to Redis is a success otherwise, `false`
* an asynchronous function `get` that takes a string key as argument and returns the Redis value stored for this key
* an asynchronous function `set` that takes a string key, a value and a duration in second as arguments to store it in Redis (with an expiration set by the duration argument)
* an asynchronous function `del` that takes a string key as argument and remove the value in Redis for this key

After the class definition, create and export an instance of `RedisClient` called `redisClient`
```
bob@dylan:~$ npm run dev main.js
true
null
12
null
```
