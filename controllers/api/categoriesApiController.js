const { Category, Mujer, Subcategory } = require("../../database/models");

const controller = {
    //Listado de todos los productos por GET
    showCategories: async (req, res) => {
        let categories = await Category.findAll()
        res.send(categories)
    },

    showWomanCategories: async(req,res) =>{
        let womanCategories = await Mujer.findAll()
        res.send(womanCategories)
    },

    showManCategories: async(req,res) =>{
        let manCategories = await Subcategory.findAll({
            where: {
                categoryId:2
            }
        })
        res.send(manCategories)
    },

    showInviernoCategories: async(req,res) =>{
        let winterCategories = await Subcategory.findAll({
            where: {
                mujerId:1
            }
        })
        res.send(winterCategories)
    },
    showVeranoCategories: async(req,res) =>{
        let winterCategories = await Subcategory.findAll({
            where: {
                mujerId:3
            }
        })
        res.send(winterCategories)
    }
}

module.exports = controller;