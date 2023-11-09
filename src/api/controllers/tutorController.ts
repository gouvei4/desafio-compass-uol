import { Request, Response } from "express";
import { Tutor } from "../models/tutor";
import { findAllTutors } from "../services/tutorServices";

export const getAllTutors = (request: Request, response: Response) => {
        response.statusCode = 200
        findAllTutors().then(tutors => {
            response.set('Content-Type', 'application/json')
            response.send(JSON.stringify(tutors))
        })
}

export const createTutor = (request: Request, response: Response) => {
    
}


export const updateTutor = (request: Request, response: Response) => {
    
}


export const deleteTutor = (request: Request, response: Response) => {
    
}

