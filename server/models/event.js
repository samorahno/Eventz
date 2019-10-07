'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    owner: DataTypes.STRING,
    event_date: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};