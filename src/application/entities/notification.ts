import { randomUUID } from 'node:crypto';
import { Replace } from '@helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  category: string;
  content: Content;
  createdAt: Date;
  readAt?: Date | null;
  canceledAt?: Date | null;
  recipientId: string;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | undefined | null {
    return this.props.canceledAt;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get id() {
    return this._id;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public get readAt(): Date | undefined | null {
    return this.props.readAt;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }
}
