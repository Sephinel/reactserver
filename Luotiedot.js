var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('kunto.db');

db.serialize(function() {

	let sql = "CREATE TABLE kunto (" +
			  "id integer PRIMARY KEY NOT NULL, " +
			  "otsikko text NOT NULL, " +
			  "paiva date NOT NULL, " +
			  "kesto text NOT NULL, " +
			  "tyyppi text NOT NULL, " +
			  "kuvaus text )";

	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Taulu tehtiin");
	});

	sql = "INSERT INTO `kunto` (`id`, `otsikko`, `paiva`, `kesto`, `tyyppi`, `kuvaus`) "+
	" VALUES (1, 'Maanantain kuntoilut', '2018-09-10', 'Pilates', '20 min', 'Lankutusta')";
	db.run(sql, function(err) {
		if (err) {
		  return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `kunto` (`id`, `otsikko`, `paiva`, `kesto`, `tyyppi`, `kuvaus`) "+
	" VALUES (2, 'Tiistain kuntoilut', '2018-09-11', 'SpineGym', '10 min', 'Molemmat puolet')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	sql = "INSERT INTO `kunto` (`id`, `otsikko`, `paiva`, `kesto`, `tyyppi`, `kuvaus`) "+
	" VALUES (3, 'Keskiviikon kuntoilut', '2018-09-12', 'Pilates', '25 min', 'Lankutusta')";
	db.run(sql, function(err) {
		if (err) {
			return console.log(err.message);
		}
		console.log("Rivi lisättiin");
	});

	db.each("SELECT id, otsikko FROM kunto", function(err, row) {
		if (err) {
		  return console.log(err.message);
		}
		console.log(row.id + ", " + row.otsikko);
	});

	db.close();
});
