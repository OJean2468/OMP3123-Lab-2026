/* 
Purpose: 
Set up all the routes/paths from out server 

*/

const express = require("express")

const router = express.Router()
const NotesModels = require("../models/NotesModel.js")

//Fill in the routes and methods below from the lab instructions 


//In URL you wil see localhost:8081/api/notes
router.post("/notes", async (request, response) => {
    //Validation of the POST body
    if(!request.body.content){
        return response.status(400).send({
            message: "Note content in the POST body cannot be left empty"
        })
    }
    //If the content of the body existed 
    try{ 
        const note = new NotesModels({
            noteTitle: request.body.content.noteTitle,
            noteDescription: request.body.content.noteDescription,
            priority: request.body.content.priority,
            dateAdded: request.body.content.dateAdded,
            dateUpdated: request.body.content.dateUpdated
        })

        const savedNote = await note.save()
        response.status(201).send(savedNote)
    }
    catch(error){
        response.status(500).send({
            message: error.message || "Some error occured while creating the note from the database."
        })

    }

})


//In URL you will see localhost:8081/api/notes
router.get("/notes", async (request, response) => {
    try{
        const notes = await NotesModels.find()
        response.send(notes)
    }
    catch(error){
        response.status(500).send({
            message: error.message || "Some error occured while retrieving notes."
        })
    }
})

//In URL you will see localhost:8081/api/notes/:noteId
router.get("/notes/:noteId", async (request, response) => {
    try{
        const note = await NotesModels.findById(request.params.noteId)
        if(!note){
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.send(note)
    }
    catch(error){
        if(error.kind === "ObjectId"){
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.status(500).send({
            message: error.message || "Error retrieving note with id " + request.params.noteId
        })
    }
})

router.put("/notes/:noteId", async (request, response) => {
    //Validation of the PUT body
    if(!request.body.content){
        return response.status(400).send({
            message: "Note content in the PUT body cannot be left empty"
        })
    }
    try{
        const updatedNote = await NotesModels.findByIdAndUpdate(
            request.params.noteId,
            {
                noteTitle: request.body.content.noteTitle,
                noteDescription: request.body.content.noteDescription,
                priority: request.body.content.priority,
                dateAdded: request.body.content.dateAdded,
                dateUpdated: request.body.content.dateUpdated
            },
            { new: true, runValidators: true }
        )
        if(!updatedNote){
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.send(updatedNote)
    }
    catch(error){
        if(error.kind === "ObjectId"){
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.status(500).send({
            message: error.message || "Error updating note with id " + request.params.noteId
        })
    }
})

router.delete("/notes/:noteId", async (request, response) => {
    try{
        const deletedNote = await NotesModels.findByIdAndDelete(request.params.noteId)
        if(!deletedNote){
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.send({
            message: "Note deleted successfully!"
        })
    }
    catch(error){
        if(error.kind === "ObjectId"){
            return response.status(404).send({
                message: "Note not found with id " + request.params.noteId
            })
        }
        response.status(500).send({
            message: error.message || "Could not delete note with id " + request.params.noteId
        })
    }
})

module.exports = router