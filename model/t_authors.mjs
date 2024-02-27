const authorModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "t_auhtors",
      {
        id_auhtor: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName_auhtor: {
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
        lastName_auhtor: {
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
      }
    );
  };
  
  export { authorModel };
  