const pool = require('./config');

const queryFavoriteBook = `
  CREATE TABLE favorite (
      id integer,
      name varchar,
      editorial varchar,
      username varchar 
  );
`;

module.exports = {
    createFavorite() {
        return pool.query(queryFavoriteBook, (err, res) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log("Table is successfully created");
            pool.end();
          });

    }
}