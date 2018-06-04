module.exports = function(sequelize, DataTypes) {
    var Kustom = sequelize.define("Kustom", {
        traveler: DataTypes.STRING,
        journey: DataTypes.STRING,
        reason: DataTypes.STRING,
        vehicle: DataTypes.STRING
    });

    Kustom.associate = function(models) {
        // ASSOCIATE CHECKLIST TABLE WITH KUSTOM TABLE
        // CASCADE WILL DELETE ANY ASSOCIATED CHECKLISTS IF A TRAVELER IS DELETED
        Kustom.hasMany(models.Checklists, {
            onDelete: "cascade"
        });
    };

    return Kustom;

}