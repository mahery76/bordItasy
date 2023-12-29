const {sq} = require("../config/db.js");

const create_sequence_db = async () => {
    sq.query("CREATE SEQUENCE role_id_seq START 1");
    sq.query("CREATE SEQUENCE user_id_seq START 1");
    sq.query("CREATE SEQUENCE produit_id_seq START 1");
    sq.query("CREATE SEQUENCE table_id_seq START 1");
    sq.query("CREATE SEQUENCE prix_produit_id_seq START 1");
    sq.query("CREATE SEQUENCE stock_id_seq START 1");
    sq.query("CREATE SEQUENCE facture_id_seq START 1");
    sq.query("CREATE SEQUENCE commande_id_seq START 1");
}
module.exports = create_sequence_db