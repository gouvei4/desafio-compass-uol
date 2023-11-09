import { Request, Response } from "express";
import { Tutor } from "../models/tutor";
import { createTutorService, findAllTutors, updateTutorService  } from "../services/tutorServices";

export const getAllTutors = async (request: Request, response: Response) => {
  try {
    const tutors = await findAllTutors()
    response.status(200).json(tutors)
  } catch(error: any) {
    response.status(400).json((error as Error).message)
  }
};

export const createTutor = async (request: Request, response: Response) => {
  try {
    const tutorData: Tutor = request.body
    const newTutor = await createTutorService(tutorData)
    response.status(201).json(newTutor)
  } catch(error: any) {
    response.status(400).json((error as Error).message)
  }
};

export const updateTutor = async (request: Request, response: Response) => {
  try {
    const tutorId = Number(request.params.id)
    const updateTutorProps: Partial<Tutor> = request.body
    const update = await updateTutorService(tutorId, updateTutorProps)
    response.status(200).json(update)
  } catch(error: any) {
    response.status(200).json((error as Error).message)
  }
};

export const deleteTutor = (request: Request, response: Response) => {};
