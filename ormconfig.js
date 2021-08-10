module.exports = {
   "type": "postgres",
    "url": process.env.DATABASE_URL,
   "logging": true,
   "synchronize": true,
   "ssl": true,
   "entities": [
       "dist/entities/*.ts"
   ],
   "subscribers": [
       "src/subscriber/*.ts"
   ],
   "migrations": [
       "dist/migrations/*.ts"
   ],
   "cli": {
       "entitiesDir": "src/entities",
       "migrationsDir": "src/migrations",
       "subscribersDir": "src/subscriber"
   }
}