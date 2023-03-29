export interface IDaioFieldMessage {
    type: IDaioFieldMessageType;
    message: IDaioFieldMessageValue;
}

type IDaioFieldMessageType = 'error' | 'success' | 'info' | null;
type IDaioFieldMessageValue = string | null;