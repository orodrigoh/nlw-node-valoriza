module.exports = {
   "type": "postgres",
    "url": process.env.DATABASE_URL,
   "logging": true,
   "synchronize": true,
   "ssl": true,
   "extra": {
     "ssl": {
       "rejectUnauthorized": false
     }
   },
   "entities": [
       "dist/entities/*.js"
   ],
   "subscribers": [
       "src/subscriber/*.ts"
   ],
   "migrations": [
       "dist/migrations/*.js"
   ],
   "cli": {
       "entitiesDir": "src/entities",
       "migrationsDir": "src/migrations",
       "subscribersDir": "src/subscriber"
   }
}