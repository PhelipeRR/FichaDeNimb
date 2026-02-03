/* eslint-disable */
import { Notification, NotificationsResponse, UnreadCountResponse } from '../types/notification.types';

class NotificationService {
  async getNotifications(
    page: number = 1,
    limit: number = 20,
    onlyUnread: boolean = false
  ): Promise<NotificationsResponse> {
    return {
      notifications: [],
      total: 0,
      page,
      limit,
      hasMore: false,
    };
  }

  async getUnreadCount(): Promise<UnreadCountResponse> {
    return { count: 0 };
  }

  async markAsRead(notificationId: string): Promise<Notification> {
    throw new Error('Notification not found');
  }

  async markAllAsRead(): Promise<void> {
    // no-op
  }

  async deleteNotification(notificationId: string): Promise<void> {
    // no-op
  }
}

const service = new NotificationService();

export const getNotifications = service.getNotifications.bind(service);
export const getUnreadCount = service.getUnreadCount.bind(service);
export const markAsRead = service.markAsRead.bind(service);
export const markAllAsRead = service.markAllAsRead.bind(service);
export const deleteNotification = service.deleteNotification.bind(service);

export default service;
