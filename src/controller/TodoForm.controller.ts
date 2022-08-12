import BaseController from './BaseController';
import { todoModel, messageModel } from '../model/provider';
import MessageToast from 'sap/m/MessageToast';
import Core from 'sap/ui/core/Core';

import InputBase from 'sap/m/InputBase';

interface AppFormError {
  errorFieldPlaceholder: string;
  errorFieldDescription: string;
  errorFieldGroupIds: string[];
  errorFieldId: string;
}

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.TodoForm
 */
export default class TodoFormController extends BaseController {
  onInit() {
    todoModel.register(this);
    messageModel.register(this);
  }

  onPressAcceptButton() {
    const formErrors = this.handleContactFormValidation();
    if (formErrors.length === 0) {
      todoModel.addFormToCollection();
      MessageToast.show('Todo added!');
      messageModel.addSuccessMessage({ message: 'Todo added successfully' });
      return this.navToHome();
    }

    formErrors.forEach((error) => {
      messageModel.addErrorMessage({
        message: `Form errors at ${error.errorFieldGroupIds}`,
        description: `Field ID: \n ${error.errorFieldId} \n \n Error description: \n ▹ ${error.errorFieldPlaceholder} \n ▹ ${error.errorFieldDescription}`,
      });
    });
    MessageToast.show('Could not create Todo!');
  }

  handleContactFormValidation() {
    const contactFormFields = Core.byFieldGroupId(
      'todoFormInput',
    ) as InputBase[];
    const contactFormErrors: AppFormError[] = [];

    const checkFieldForValidity = (formField: InputBase) => {
      const isRequiredField = formField.getProperty('required');
      const isInvalidField = formField.getProperty('valueState') === 'Error';
      const isEmptyField = formField.getProperty('value').length === 0;
      return isRequiredField && (isInvalidField || isEmptyField);
    };

    const addEntryToFormErrors = (formField: InputBase) => {
      contactFormErrors.push({
        errorFieldPlaceholder: formField.getProperty('placeholder'),
        errorFieldDescription: formField.getProperty('valueStateText'),
        errorFieldGroupIds: formField.getProperty('fieldGroupIds'),
        errorFieldId: formField.getId(),
      });
    };

    contactFormFields
      .filter((formField: InputBase) => {
        return !formField.getId().includes('popup');
      })
      .forEach((formField: InputBase) => {
        const isInvalidFormInput = checkFieldForValidity(formField);

        if (isInvalidFormInput) {
          addEntryToFormErrors(formField);
        }
      });

    return contactFormErrors;
  }
}
