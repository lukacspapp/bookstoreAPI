import { Book } from '../models/book';

interface NotificationEvent {
  type: 'lowStock';
  details: Book;
}

export const sendNotification = async (event: NotificationEvent) => {
  try {
    console.log('Notification sent successfully:', event);
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
