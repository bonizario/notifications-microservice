import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

    await notificationsRepository.create(
      new Notification({
        category: 'social-1',
        content: new Content('You have a new friend request!'),
        recipientId: 'example-recipient-id-1',
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social-2',
        content: new Content('You have a new friend request!'),
        recipientId: 'example-recipient-id-1',
      })
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social-3',
        content: new Content('You have a new friend request!'),
        recipientId: 'example-recipient-id-2',
      })
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example-recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
