
const create_seq = (sq, seq_name, Model, id_model, letter ) => {    
    Model.addHook('beforeValidate', (relation, options) => {
        return sq.query(`SELECT nextval('${seq_name}')`).then(([results]) => {
            const nextId = results[0].nextval;
            relation[id_model] = `${letter}` + nextId.toString().padStart(5, '0');
        });
    })
}

module.exports = create_seq