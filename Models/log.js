module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('log', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //data needs to be changed to date -- when dropping tables is covered
    definition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
    },
  });
  return Log;
};
