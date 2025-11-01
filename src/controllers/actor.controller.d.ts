import { Request, Response } from 'express';
export declare const createActor: (req: Request, res: Response) => Promise<void>;
export declare const getAllActors: (_req: Request, res: Response) => Promise<void>;
export declare const getActorById: (req: Request, res: Response) => Promise<void>;
export declare const updateActor: (req: Request, res: Response) => Promise<void>;
export declare const deleteActor: (req: Request, res: Response) => Promise<void>;
