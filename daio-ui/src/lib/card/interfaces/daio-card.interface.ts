import { IDaioImagePosition } from "./daio-card-image.interface";

export interface IDaioCard {
    type: IDaioCardTypeName;
    position?: IDaioImagePosition;
}

export type IDaioCardTypeName = 'normal' | 'image';