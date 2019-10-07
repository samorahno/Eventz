'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent', {
    userId: DataTypes.STRING,
    eventId: DataTypes.STRING
  }, {});
  UserEvent.associate = function(models) {
    // associations can be defined here
  };
  return UserEvent;
};