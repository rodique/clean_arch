import { observable, computed } from "mobx";
import { IsEmail, validateSync, ValidationError, IsNotEmpty, IsBoolean, Equals, MinLength, MaxLength } from "class-validator";
import { ISignUpViewModel, ErrorsType, PropertyKey } from "./SignUp.viewModel.d";

export default class SignUpViewModel implements ISignUpViewModel {
  @observable
  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @observable
  @MinLength(6)
  @IsNotEmpty()
  public password: string;

  @observable
  @MinLength(5)
  @MaxLength(11)
  @IsNotEmpty()
  public username: string;

  @observable
  @MaxLength(50)
  @IsNotEmpty()
  public firstName: string;

  @observable
  @MaxLength(50)
  @IsNotEmpty()
  public lastName: string;

  @observable
  @IsNotEmpty()
  public birthday: string;

  @observable
  @IsNotEmpty()
  public mobilePhone: string;

  @observable
  @IsNotEmpty()
  public postcode: string;

  @observable
  @IsNotEmpty()
  public city: string;

  @observable
  @IsNotEmpty()
  public street: string;

  @observable
  @IsNotEmpty()
  public house: string;

  @observable
  @IsBoolean()
  @Equals(true)
  @IsNotEmpty()
  public policy: boolean;

  @observable
  @IsBoolean()
  @IsNotEmpty()
  public promo: boolean;

  @observable
  public captcha: string;

  @observable
  public isCaptchaVisible: boolean;

  @computed
  public get isSignUpButtonDisabled(): boolean {
    return Object.keys(this.errors).length > 0;
  };

  @observable
  public errors: ErrorsType;

  public constructor() {
    this.email = "";
    this.password = "";
    this.username = "";
    this.firstName = "";
    this.lastName = "";
    this.birthday = "";
    this.mobilePhone = "";
    this.postcode = "";
    this.city = "";
    this.street = "";
    this.house = "";
    this.policy = false;
    this.promo = true;
    this.captcha = "";

    this.isCaptchaVisible = false;

    this.errors = {};
  }

  public onFieldBlur = (fieldName: PropertyKey, value: string | boolean): void => {
    if (!this[fieldName]) {
      return;
    }

    const oldValue = this[fieldName];

    (this as any)[fieldName] = value;

    if (this.isValidField(fieldName) && oldValue !== value) {
      switch (fieldName) {
        case "email":
        case "username":
          // request validation from back
          // if request with error TOO_MUTCH_ATTEMPS require captcha then return
          //  if field valid on backend do nothing
          // else set error    
          break;
      
        default:
          break;
      }
    }
  }

  public onEmailChanged = (email: string): void => {
    this.email = email;

    if (this.isValidField("email")) {
      // request validation from back
      // if request with error TOO_MUTCH_ATTEMPS require captcha then return
      //  if field valid on back do nothing
      // else set error
    }
  };

  public onPasswordChanged = (password: string): void => {
    this.password = password;
    this.isValidField("password")
  };

  public onUsernameChanged = (username: string): void => {
    this.username = username;
    this.isValidField("username")
  };

  public onFirstNameChanged = (firstName: string): void => {
    this.firstName = firstName;
    this.isValidField("firstName")
  };

  public onLastNameChanged = (lastName: string): void => {
    this.lastName = lastName;
    this.isValidField("lastName")
  };

  public onBirthdayChanged = (birthday: string): void => {
    this.birthday = birthday;
    this.isValidField("birthday")
  };

  public onMobilePhoneChanged = (mobilePhone: string): void => {
    this.mobilePhone = mobilePhone;
    this.isValidField("mobilePhone")
  };

  public onPostcodeChanged = (postcode: string): void => {
    this.postcode = postcode;
    this.isValidField("postcode")
  };

  public onCityChanged = (city: string): void => {
    this.city = city;
    this.isValidField("city")
  };

  public onStreetChanged = (street: string): void => {
    this.street = street;
    this.isValidField("street")
  };

  public onHouseChanged = (house: string): void => {
    this.house = house;
    this.isValidField("house")
  };
  public onPolicyChanged = (policy: boolean): void => {
    this.policy = policy;
    this.isValidField("policy")
  };

  public onPromoChanged = (promo: boolean): void => {
    this.promo = promo;
    this.isValidField("promo")
  };

  public onCaptchaChanged = (captcha: string): void => {}

  public onClickSignUp = (): void => {};

  private isValidField(property: PropertyKey) {
    const errorMsg = Object.values(validateSync(this).find(
      (validationError: ValidationError) =>
        validationError.property === property
    )?.constraints || {})[0]

    if (errorMsg) {
      this.errors[property] = errorMsg;

      return false;
    }

    if (this.errors[property]) {
      delete this.errors[property];
    }

    return true;
  }
}
