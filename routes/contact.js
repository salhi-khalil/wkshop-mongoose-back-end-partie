const express = require("express");
const Contact = require("../config/models/Contact")
const route = express.Router()

// method post method
//req.body

route.post('/', async(req, res) => {
  const {name,email,age}=req.body
try {
      const found =  await Contact.findOne({email})
     if (found) { return res.status(400).send({ message: "user already exist"})}
    const AddedContact = new Contact(req.body)
    await  AddedContact.save()

    res.status(200).send({msg: 'Success', AddedContact})

} catch (error) {
    res.status(500).send({msg: 'Error', error})
}


})

module.exports= route