const bookModel = (sequelize, DataTypes) => {
    const Book = sequelize.define(
      "t_books",
      {
        id_book: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title_book: {
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
        pages_book: {
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
        extract_book: {
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
        summary_book: {
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
        cover: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                    msg: "Le nom est une propriété obligatoire.",
                },
            }
        },
        year_book: {
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
        average_book: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        upload_book: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Le nom ne peut pas être vide.",
                },
                notNull: {
                    msg: "Le nom est une propriété obligatoire.",
                },
            }
        },
        fk_publishers: { // Champ pour la clé étrangère
            type: DataTypes.INTEGER, // Le type doit correspondre à celui de la clé primaire dans la table des auteurs
            allowNull: false,
            references: {
              model: 'Users', // Nom de la table que vous référencez
              key: 'id' // Nom de la colonne que vous référencez dans la table des auteurs
            },
            onUpdate: 'CASCADE', // Options pour le comportement de mise à jour et de suppression
            onDelete: 'RESTRICT'
        },
        fk_autor: { // Champ pour la clé étrangère
            type: DataTypes.INTEGER, // Le type doit correspondre à celui de la clé primaire dans la table des auteurs
            allowNull: false,
            references: {
              model: 'Users', // Nom de la table que vous référencez
              key: 'id' // Nom de la colonne que vous référencez dans la table des auteurs
            },
            onUpdate: 'CASCADE', // Options pour le comportement de mise à jour et de suppression
            onDelete: 'RESTRICT'
        },
        fk_autor: { // Champ pour la clé étrangère
            type: DataTypes.INTEGER, // Le type doit correspondre à celui de la clé primaire dans la table des auteurs
            allowNull: false,
            references: {
              model: 'Users', // Nom de la table que vous référencez
              key: 'id' // Nom de la colonne que vous référencez dans la table des auteurs
            },
            onUpdate: 'CASCADE', // Options pour le comportement de mise à jour et de suppression
            onDelete: 'RESTRICT'
        },
        fk_category: { // Champ pour la clé étrangère
            type: DataTypes.INTEGER, // Le type doit correspondre à celui de la clé primaire dans la table des auteurs
            allowNull: false,
            references: {
              model: 'Users', // Nom de la table que vous référencez
              key: 'id' // Nom de la colonne que vous référencez dans la table des auteurs
            },
            onUpdate: 'CASCADE', // Options pour le comportement de mise à jour et de suppression
            onDelete: 'RESTRICT'
        },
        fk_user: { // Champ pour la clé étrangère
            type: DataTypes.INTEGER, // Le type doit correspondre à celui de la clé primaire dans la table des auteurs
            allowNull: false,
            references: {
              model: 'Users', // Nom de la table que vous référencez
              key: 'id' // Nom de la colonne que vous référencez dans la table des auteurs
            },
            onUpdate: 'CASCADE', // Options pour le comportement de mise à jour et de suppression
            onDelete: 'RESTRICT'
        },
      },
      {
        timestamps: true,
        createdAt: "created",
        updateAt: false,
      }
    );
    return Book;
  };
  
  export { bookModel };
  