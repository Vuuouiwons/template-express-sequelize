require("dotenv").config();

const db = require("../models");
const Test = db.test;

const { payload } = require("../templates/payloadContructor");

module.exports = {
	postData: async (req, res) => {
		try {
			const body = req.body;

			const test = await Test.create({ data: JSON.stringify(body.data) });

			return res.status(201).send(payload(201, "data uploaded", body.data));
		} catch (err) {
			return res.status(500).send(payload(500, err, null));
		}
	},
	getData: async (req, res) => {
		try {
			const data = await Test.findAll();

			return res
				.status(200)
				.send(payload(200, "data succesfully grabbed", data));
		} catch (err) {
			return res.status(500).send(payload(500, "internal server error", null));
		}
	},
	updateData: async (req, res) => {
		try {
			const body = req.body;

			const test = await Test.update(
				{ data: body.data },
				{
					where: {
						id: body.id,
					},
				}
			);
			return res
				.status(201)
				.send(payload(201, "data successfully updated", body.data));
		} catch (err) {
			return res.status(500).send(payload(500, "internal server error", null));
		}
	},
	deleteData: async (req, res) => {
		try {
			const body = req.body;

			const test = await Test.destroy({ where: { id: body.id } });

			return res
				.status(200)
				.send(payload(200, "data succesfully deleted", null));
		} catch (err) {
			return res.status(500).send(payload(500, "internal server error", null));
		}
	},
};
