/** @format */

import { Picture } from './shared';

export interface Project {
	data: ProjectData;
}

export interface ProjectData {
	id: number;
	title: string;
	subtitle: string;
	text: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface Projects {
	data: ProjectsData[];
}

export interface ProjectsData {
    id:number;
	title: string;
	place: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	images: Picture[];
}
