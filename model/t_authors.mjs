const authorModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "t_authors",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstName: {
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
        lastName: {
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
  