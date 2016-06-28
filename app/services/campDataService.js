var Camp = require('../models/camp');

var CampDataService = function() {
  return {
    getAll: getAll,
    getCount: getCount,
    getById: getById,
    getByLegacyId: getByLegacyId,
    getBySlug: getBySlug,
    add: add,
    update: update
  };

  function getAll(filter, page, pageSize) {
    return Camp.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Camp.count(filter)
      .exec();
  }

  function getById(id) {
    return Camp.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Camp.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Camp.findOne({ slug: slug })
      .exec();
  }

  function add(campToAdd) {
    var camp = new Camp(campToAdd);

    return camp.save();
  }

  function update(id, camp) {
    return Camp.findByIdAndUpdate(id, camp)
      .exec();
  }
};

module.exports = CampDataService;
