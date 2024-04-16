const publisherModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "t_publishers",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
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
  
  export { publisherModel };
  