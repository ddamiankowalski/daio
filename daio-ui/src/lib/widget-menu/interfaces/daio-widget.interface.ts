import { IDaioIconColor } from "../../icons/interfaces/icon-color";

export interface IDaioWidget {
    title: string;
    description: string;
    image: string;
    yImagePos?: string;
}

export interface IDaioWidgetAction {
    icon: string;
    title: string;
    color: IDaioIconColor;
}