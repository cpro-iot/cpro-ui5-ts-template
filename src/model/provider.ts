import TodoModel from './Todo.model';
import ConfigModel from './Config.model';
import MessageModel from './Message.model';

const todoModel = new TodoModel('todo');
const configModel = new ConfigModel('config');
const messageModel = new MessageModel('messages');

export { todoModel, configModel, messageModel };
