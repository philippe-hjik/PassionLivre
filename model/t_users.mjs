const userModel = (sequelize, DataTypes) => {
  return sequelize.define("t_users", {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username_user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le nom ne peut pas être vide.",
        },
        notNull: {
          msg: "Le nom est une propriété obligatoire.",
        },
      },
    },
    password_user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Le nom ne peut pas être vide.",
        },
        notNull: {
          msg: "Le nom est une propriété obligatoire.",
        },
      },
    },

  },{
      timestamps: true,
      createdAt: "created",
  });
};

export { userModel };
