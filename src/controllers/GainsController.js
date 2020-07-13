const mongoose = require("mongoose");
const requireDir = require("require-dir");
const moment = require("moment-timezone");

requireDir("../models");

const Gains = mongoose.model("Gains");

module.exports = {
  async listGains(req, res) {
    const { page = 1 } = req.query;
    try {
      const gains = await Gains.paginate({}, { page, limit: 10000 });
      return res.json(gains);
    } catch (error) {
      return res.status(400).json(`THERE'S NO GAINS WHITH THIS ID -- ${error}`);
    }
  },
  async createGains(req, res) {
    const {
      name,
      category,
      value,
      partials,
      startDate,
      gainsType,
      limitDate
    } = req.body;
    let gains = "";
    let limitDateInit = limitDate;
    let totalGet = partials.total;
    if (totalGet === "") {
      totalGet = 1;
    }
    try {
      for (let index = 1; index <= totalGet; index++) {
        const newDate = moment(limitDateInit)
          .add(1, "M")
          .format("YYYY-MM-DD");

        const data = {
          name,
          category,
          value,
          partials: {
            total: totalGet,
            current: index
          },
          startDate,
          gainsType,
          limitDate: limitDateInit,
          status: false
        };
        gains = await Gains.create(data);
        limitDateInit = newDate;
      }
      return res.json(gains);
    } catch (error) {
      return res.json(`ERROR TO CREATE GAINS -- ${error}`);
    }
  },

  async updateGains(req, res) {
    try {
      const gains = await Gains.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true
        }
      );
      return res.json(gains);
    } catch (error) {
      return res.json(`ERROR TO UPDATE STATUS GAINS -- ${error}`);
    }
  },
  async deleteGains(req, res) {
    try {
      await Gains.findByIdAndDelete(req.body._id);
      return res.json("delete");
    } catch (error) {
      return res.json(`ERROR -- ${error}`);
    }
  }
};
