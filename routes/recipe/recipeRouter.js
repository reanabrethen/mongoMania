const express = require('express')
const router = express.Router()
const recipeController = require('./controller/recipeController')

router.get('/get-all-recipes', (req, res)=>{
    recipeController.getAllRecipe((error, payload)=>{
       if(error){
        res.status(500).json({message: "Error", error})
       }else{
        res.json({message: "Successfully grabbed all recipes", data: payload})
       }
    })
})

router.post('/create-recipe', (req, res)=>{
    recipeController.createRecipe(req.body, (error, payload)=>{
        if(error){
            res.status(500).json({message: "Error", error})
        }else{
            res.json({message: "Successfully created recipe.", data: payload})
        }
    })
})

module.exports = router