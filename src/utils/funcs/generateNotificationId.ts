export const generateNotificationId = (): string =>
    Math.random().toString(36).substring(2, 9) + '' + new Date().getTime();
