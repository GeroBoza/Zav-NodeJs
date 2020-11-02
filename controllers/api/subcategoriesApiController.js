const { Subcategory } = require("../../database/models");

const controller = {
    //Listado de todos los productos por GET
    showSubategory: async (req, res) => {
        let id = req.params.id
        let subcategory = await Subcategory.findByPk(id)
        res.send(subcategory)
    },

    
}

module.exports = controller;