import { Content } from './content';
import { Notification } from './notification';

describe('Notification ', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'social',
      content: new Content('You have a new friend request!'),
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
