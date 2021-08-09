export default {
   "type": "postgres",
    "url": process.env.DATABASE_URL,
   "logging": true,
   "synchronize": true,
   "entities": [
       "dist/src/entities/*.ts"
   ],
   "subscribers": [
       "src/subscriber/*.ts"
   ],
   "migrations": [
       "dist/src/migrations/*.ts"
   ],
   "cli": {
       "entitiesDir": "src/entities",
       "migrationsDir": "src/migrations",
       "subscribersDir": "src/subscriber"
   }
}