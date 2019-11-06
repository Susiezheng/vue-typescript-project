import {ElementUIComponent, ElementUIComponentSize} from 'element-ui/types/component';

export type FormItemLabelPosition = 'left' | 'right' | 'top';

export type ValidateCallback = (isValid: boolean, invalidFields: object) => void;

export type ValidateFieldCallback = (errorMessage: string) => void;

/** Form Component */
export declare class ElForm extends ElementUIComponent {
  /** Data of form component */
  public model: object;

  /** Validation rules of form */
  public rules: object;

  /** Whether the form is inline */
  public inline: boolean;

  /** Whether the form is disabled */
  public disabled: boolean;

  /** Position of label */
  public labelPosition: FormItemLabelPosition;

  /** Width of label, and all form items will inherit from Form */
  public labelWidth: string;

  /** Suffix of the label */
  public labelSuffix: string;

  /** Whether to show the error message */
  public showMessage: boolean;

  /** Whether to display the error message inline with the form item */
  public inlineMessage: boolean;

  /** Whether to display an icon indicating the validation result */
  public statusIcon: boolean;

  /** Whether to trigger validation when the `rules` prop is changed */
  public validateOnRuleChange: boolean;

  /** Controls the size of components in this form */
  public size: ElementUIComponentSize;

  /**
   * Validate the whole form
   *
   * @param callback A callback to tell the validation result
   */
  public validate(callback: ValidateCallback): void;
  public validate(): Promise<boolean>;

  /**
   * Validate certain form items
   *
   * @param props The property of `model` or array of prop which is going to validate
   * @param callback A callback to tell the field validation result
   */
  public validateField(props: string | string[], callback: ValidateFieldCallback): void;
  public validateField(errMessage: string): void;


  /** reset all the fields and remove validation result */
  public resetFields(): void;

  public submit(): void;

  /** clear validation message for certain fields */
  public clearValidate(props?: string | string[]): void;
}
