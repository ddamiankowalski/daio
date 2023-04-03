export interface IDaioMenuItem {
    title: string;
    icon: string;
    items?: IDaioMenuSubItem[];
}

interface IDaioMenuSubItem {
    title: string;
}