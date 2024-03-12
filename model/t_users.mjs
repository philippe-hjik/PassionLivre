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
        }
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
    nbBooksOffer_user: {
      type: DataTypes.INTEGER,
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
    nbNote_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: {
          args: 1,
          msg: "La note minimale est 0.",
        },
        max: {
            args: 5,
            msg: "La note maximale est 5.",
        },
        notEmpty: {
          msg: "Le nom ne peut pas être vide.",
        },
        isInt: {
            msg: "La note doit être un entier.",
        }
      },
    },
    nbComment_user: {
      type: DataTypes.INTEGER,
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
