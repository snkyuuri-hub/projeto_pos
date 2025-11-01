import { Request, Response } from 'express';
export declare const createMovie: (req: Request, res: Response) => Promise<void>;
export declare const getAllMovies: (_req: Request, res: Response) => Promise<void>;
export declare const getMovieById: (req: Request, res: Response) => Promise<void>;
export declare const updateMovie: (req: Request, res: Response) => Promise<void>;
export declare const deleteMovie: (req: Request, res: Response) => Promise<void>;
