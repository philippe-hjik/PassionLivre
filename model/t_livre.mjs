const livreModel = (sequelize, DataTypes) => {
    return sequelize.define(
      "Livres",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
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
        categorie: {
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
        nbPages: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                is: {
                    args: /^[0-9]\d+$/,
                    msg: "Seules les lettres et les espaces sont autorisées.",
                },
                notEmpty: {
                  msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                  msg: "Le nom est une propriété obligatoire.",
                },
            },
        },
        extrait: {
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
        resume: {
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
        authorFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                  args: /^[A-Za-z\s]*$/,
                  msg: "Seules les lettres et les espaces sont autorisées.",
                },
                notEmpty: {
                  msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                  msg: "Le nom est une propriété obligatoire.",
                },
            },
        },
        authorLastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                  args: /^[A-Za-z\s]*$/,
                  msg: "Seules les lettres et les espaces sont autorisées.",
                },
                notEmpty: {
                  msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                  msg: "Le nom est une propriété obligatoire.",
                },
            },
        },
        editorFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                  args: /^[A-Za-z\s]*$/,
                  msg: "Seules les lettres et les espaces sont autorisées.",
                },
                notEmpty: {
                  msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                  msg: "Le nom est une propriété obligatoire.",
                },
            },
        },
        editorLastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                  args: /^[A-Za-z\s]*$/,
                  msg: "Seules les lettres et les espaces sont autorisées.",
                },
                notEmpty: {
                  msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                  msg: "Le nom est une propriété obligatoire.",
                },
            },
        },
        editionYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                is: {
                    args: /^[0-9]\d+$/,
                    msg: "Seules les chiffre et les espaces sont autorisées.",
                },
                notEmpty: {
                  msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                  msg: "Le nom est une propriété obligatoire.",
                },
            }
        },
        avgAppreciation: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: {
                    msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                    msg: "Le nom est une propriété obligatoire.",
                },
            }
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: {
                    msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                    msg: "Le nom est une propriété obligatoire.",
                },
            }
        },
      },
      {
        timestamps: true,
        createdAt: "created",
        updateAt: false,
      }
    );
  };
  
  export { livreModel };
  