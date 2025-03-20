import { generateNotificationId } from '../funcs/generateNotificationId';
import { Notification } from './../types/components/notification.type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
type NotificationStore = {
    notifications: Notification[];
    showNotification: (notification: Omit<Notification, 'id'>) => void;
    dismissNotification: (id: string) => void;
};

export const useNotificationStore = create<NotificationStore>()(
    devtools((set, get) => ({
        notifications: [],
        showNotification(notification) {
            const id = generateNotificationId();
            set((state) => ({
                notifications: [
                    ...state.notifications,
                    { id, ...notification },
                ],
            }));
            setTimeout(() => {
                get().dismissNotification(id);
            }, 5000);
        },
        dismissNotification(id) {
            set((state) => ({
                notifications: state.notifications.filter(
                    (notif) => notif.id != id
                ),
            }));
        },
    }))
);

export const getNotificatons = () =>
    useNotificationStore.getState().notifications;
