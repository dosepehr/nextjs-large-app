export type Notification = {
    id: string;
    duration?: number;
    message: string;
    type: NotificationType;
};

export type NotificationType = 'warning' | 'error' | 'success' | 'info';
