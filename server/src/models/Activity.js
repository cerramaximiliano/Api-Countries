const { DataTypes, Op } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false,
            // validate: {
            //     noBlanksValidation: function (value) {
            //         if (!/^(?!.*  )(?!\s*$).+/.test(value)) {
            //             throw new Error("Field 'Name': Not empty, no lone whitespace, max 2 consecutive spaces.");
            //         };
            //     },
            //     async isUnique(value) {
            //         let existingActivity = await Activity.findOne({ where: { name: value } });
            //         if (existingActivity) throw new Error("There is already an activity with that name.");
            //     }
            // }
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
              },
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        season: {
            type: DataTypes.ENUM("Spring", "Autumn", "Winter", "Summer"),
            allowNull: false,
            // validate: {
            //     isIn: {
            //         args: [["Spring", "Autumn", "Winter", "Summer"]],
            //         msg: "Season must be one of the following options: Spring, Autumn, Winter or Summer."
            //     },
            // }
        }
    }, {
        timestamps: false
    });
};