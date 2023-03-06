require("dotenv").config();

const db = require("../models");
const Test = db.test;

const { payload } = require("../templates/payloadContructor");

module.exports = {
	postData: async (req, res) => {
		const body = req.body;

		const test = await Test.create({ data: JSON.stringify(body.data) });

		return res.status(201).send(payload(201, "data uploaded", body.data));
	},
	getData: async (req, res) => {
		const data = await Test.findAll();

		return res.status(200).send(payload(200, "data succesfully grabbed", data));
	},
	updateData: async (req, res) => {
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
	},
	deleteData: async (req, res) => {
		const body = req.body;

		const test = await Test.destroy({ where: { id: body.id } });

		return res.status(200).send(payload(200, "data succesfully deleted", null));
	},
};
