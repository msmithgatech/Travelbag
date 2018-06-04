module.exports = function(sequelize, DataTypes) {
    var Checklist = sequelize.define("Checklist", {
        journey: {
           type: DataTypes.STRING,
           allowNull: false,
           defaultValue: " ",
           validate: {
              len: [1]
           }
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: " ",
            validate: {
                len: [1]
            }
        },
        vehicle: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: " ",
            validate: {
                len: [1]
            }
        },
        leaveFrom: DataTypes.STRING,
        goingTo: DataTypes.STRING,
        tickets: DataTypes.STRING,
        seating: DataTypes.STRING,
        mileage: DataTypes.STRING,
        awayTransport: DataTypes.STRING,
        directions: DataTypes.STRING,
        gascard: DataTypes.STRING,
        expenses: DataTypes.STRING,
        sleepRoom: DataTypes.STRING,
        sleepDisc: DataTypes.STRING,
        meals: DataTypes.STRING,
        childCare: DataTypes.STRING,
        petCare: DataTypes.STRING,
        plantCare: DataTypes.STRING,
        anypackgs: DataTypes.STRING,
        anyComments: DataTypes.TEXT
    });

    Checklist.associate = function(models) {
             // ASSOCIATE THE KUSTOM TABLE WITH ITS CHECKLIST(S)
             // CASCADE WILL DELETE ANY ASSOCIATED CHECKLISTS IF A TRAVELER IS DELETED
        Checklist.belongsTo(models.Kustom, {
             foreignKey: {
                 allowNull: false}
        });
    };

    return Checklist;
};


