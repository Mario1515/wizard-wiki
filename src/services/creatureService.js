const Creature = require("../models/Creature");

exports.create = ( createData ) => Creature.create(createData);

exports.getAll = () => Creature.find();

exports.singleCreature = (creatureId) => Creature.findById(creatureId);

exports.update = (creatureId, createData) => Creature.findByIdAndUpdate(creatureId, createData);

exports.delete = (creatureId) => Creature.findByIdAndDelete(creatureId);