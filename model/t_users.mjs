const userModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "Users",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        pseudo: {
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
        subscribeDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nbOuvrages: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nbAppreciation: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nbComments: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
      },
      {
        timestamps: true,
        createdAt: "created",
        updateAt: false,
      }
    );
  };
  
  export { userModel };