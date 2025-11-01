import { Request, Response } from 'express';
import Movie from '../models/movie.model';
export const createMovie = async (req, res) => {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
};
export const getAllMovies = async (_req, res) => {
    const movies = await Movie.findAll();
    res.json(movies);
};
export const getMovieById = async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (movie)
        res.json(movie);
    else
        res.status(404).json({ message: 'Filme não encontrado' });
};
export const updateMovie = async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
        await movie.update(req.body);
        res.json(movie);
    }
    else
        res.status(404).json({ message: 'Filme não encontrado' });
};
export const deleteMovie = async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    if (movie) {
        await movie.destroy();
        res.status(204).end();
    }
    else
        res.status(404).json({ message: 'Filme não encontrado' });
};
//# sourceMappingURL=movie.controller.js.map