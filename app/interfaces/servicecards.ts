import { Picture } from "./shared";

export interface ServiceCards {
    data: ServiceCardData[];
}

export interface ServiceCardData {
    id:          number;
    title:       string;
    createdAt:   string;
    updatedAt:   string;
    publishedAt: string;
    img_small:   Picture;
    img_large:   Picture;
}


