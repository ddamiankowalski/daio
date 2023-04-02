export interface IDaioBadgePosition {
    horizontal: IDaioBadgePositionHorizontal;
    vertical: IDaioBadgePositionVertical;
}

type IDaioBadgePositionHorizontal = 'left' | 'right';
type IDaioBadgePositionVertical = 'top' | 'bottom';
