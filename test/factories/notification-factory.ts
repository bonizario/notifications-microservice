import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social-1',
    content: new Content('You have a new friend request!'),
    recipientId: 'recipient-id-1',
    ...override,
  });
}
