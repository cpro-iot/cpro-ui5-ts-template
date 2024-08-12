import { MessageType } from 'sap/ui/core/library';
import Message from 'sap/ui/core/message/Message';
import BaseModel from './BaseModel';

interface AppMessage {
  message: string;
  description?: string;
  type?: MessageType;
}

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.model.Message
 */
export default class MessageModel extends BaseModel<Message> {
  addInfoMessage(options: AppMessage) {
    const messageItem = this.createMessage({
      type: MessageType.Information,
      ...options,
    });
    this.setCollection([messageItem, ...this.getCollection()]);
  }

  addSuccessMessage(options: AppMessage) {
    const messageItem = this.createMessage({
      type: MessageType.Success,
      ...options,
    });
    this.setCollection([messageItem, ...this.getCollection()]);
  }

  addWarningMessage(options: AppMessage) {
    const messageItem = this.createMessage({
      type: MessageType.Warning,
      ...options,
    });

    this.setCollection([messageItem, ...this.getCollection()]);
  }

  addErrorMessage(options: AppMessage) {
    const messageItem = this.createMessage({
      type: MessageType.Error,
      ...options,
    });
    this.setCollection([messageItem, ...this.getCollection()]);
  }

  private createMessage({ message, description, type }: AppMessage) {
    return new Message({
      message,
      type,
      description,
      additionalText: new Date().toLocaleTimeString(),
    });
  }

  resetMessages() {
    this.setCollection([]);
  }
}
