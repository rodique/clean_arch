export enum PropertyKeyEnum {
  "email",
  "password",
  "username",
  "firstName",
  "lastName",
  "birthday",
  "mobilePhone",
  "postcode",
  "city",
  "street",
  "house",
  "policy",
  "promo",
  "captcha"
}

export type PropertyKey = keyof typeof PropertyKeyEnum;

export type ErrorsType = { [key in PropertyKey]?: string };

export interface ISignUpViewModel {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  birthday: string;
  mobilePhone: string;
  postcode: string;
  city: string;
  street: string;
  house: string;
  policy: boolean;
  promo: boolean;
  captcha: string;

  errors: ErrorsType;

  isCaptchaVisible: boolean;
  isSignUpButtonDisabled: boolean;

  //   authStatus: string;
  //   isAuthStatusPositive: boolean;

  onEmailChanged(email: string): void;
  onPasswordChanged(password: string): void;
  onUsernameChanged(username: string): void;
  onFirstNameChanged(firstName: string): void;
  onLastNameChanged(lastName: string): void;
  onBirthdayChanged(birthday: string): void;
  onMobilePhoneChanged(mobilePhone: string): void;
  onPostcodeChanged(postcode: string): void;
  onCityChanged(city: string): void;
  onStreetChanged(street: string): void;
  onHouseChanged(house: string): void;
  onPolicyChanged(policy: boolean): void;
  onPromoChanged(promo: boolean): void;
  onCaptchaChanged(captcha: string): void;
  onClickSignUp(): void;
}
