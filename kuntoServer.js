const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('kunto.db');

app.listen(8080, function () {
    console.log('Node toimii localhost:8080');
});

app.get('/', function (req, res) {
    return res.send({ error: false, message: 'Toimii' })
});

app.get('/kunto/all', function (req, res) {
	db.all('select * from kunto', function (error, result) {
		if (error) {
			throw error;
		}
		return res.status(200).send(result);
	});
})

app.get('/kunto/one/:id', function (req, res) {
	let id = req.params.id;

    db.get("select * from kunto where id=?", [id], function (error, result) {
		if (error) {
			throw error;
		}

		// annetulla id:llä ei ole riviä
		if (typeof(result) == "undefined") {
			return res.status(200).send({});
		}

		return res.status(200).send(result);

	});
})

app.post('/kunto/add', function (req, res) {
	let matka = req.body;

    db.run("insert into kunto (otsikko,paiva,kesto,tyyppi,kuvaus) values (?,?,?,?,?)",
	[kunto.otsikko, kunto.paiva, kunto.kesto, kunto.tyypi, kunto.kuvaus],
	function (error, result) {
		if (error) {
			throw error;
		}
		return res.status(200).send();
	});
})

app.get('/kunto/delete/:id', function (req, res) {
	let id = req.params.id;

    db.run("delete from kunto where id=?", [id], function (error, result) {
		if (error) {
			throw error;
		}

		return res.status(200).send({count: this.changes});
	});
})

app.get('*', function (req, res) {
    return res.status(404).send({ error: true, message: 'Ei pyydettyä palvelua' })
})
