module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    id: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty : true,
      },
      primaryKey: true,
      autoIncrement: true,
    },

    productID: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },

    productSpecID: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty : true,
      }
    },

    amount: {
      type: DataTypes.STRING,
      validate: {
        notEmpty : true,
      },
      len: {
        args: [0, 99],
        msg: "Amount length should be in range 0 to 99.",
      },
    },

    addedAt: {
      type: DataTypes.DATE,
      validate: {
        notEmpty : true,
      }
    },

    updatedAt: {
      type: DataTypes.DATE,      
      validate: {
        notEmpty : true,
      }
    },

    removedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  });

  return product;
};
