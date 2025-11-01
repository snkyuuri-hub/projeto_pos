import { Request, Response } from 'express';
import Actor from '../models/actor.model';
export const createActor = async (req, res) => {
    const actor = await Actor.create(req.body);
    res.status(201).json(actor);
};
export const getAllActors = async (_req, res) => {
    const actors = await Actor.findAll();
    res.json(actors);
};
export const getActorById = async (req, res) => {
    const actor = await Actor.findByPk(req.params.id);
    if (actor)
        res.json(actor);
    else
        res.status(404).json({ message: 'Ator não encontrado' });
};
export const updateActor = async (req, res) => {
    const actor = await Actor.findByPk(req.params.id);
    if (actor) {
        await actor.update(req.body);
        res.json(actor);
    }
    else
        res.status(404).json({ message: 'Ator não encontrado' });
};
export const deleteActor = async (req, res) => {
    const actor = await Actor.findByPk(req.params.id);
    if (actor) {
        await actor.destroy();
        res.status(204).end();
    }
    else
        res.status(404).json({ message: 'Ator não encontrado' });
};
//# sourceMappingURL=actor.controller.js.map