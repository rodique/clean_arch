import React from "react";
import { observer } from "mobx-react";
import { ISignUpViewModel } from "../../view-model/signup/SignUp.viewModel.d";

interface SignUpViewProps {
  signUpViewModel: ISignUpViewModel;
}

@observer
export default class SignUpView extends React.Component<SignUpViewProps> {
  public render(): JSX.Element {
    const {
      email,
      password,
      username,
      firstName,
      lastName,
      birthday,
      mobilePhone,
      postcode,
      city,
      street,
      house,
      onEmailChanged,
      onPasswordChanged,
      onUsernameChanged,
      onFirstNameChanged,
      onLastNameChanged,
      onBirthdayChanged,
      onMobilePhoneChanged,
      onPostcodeChanged,
      onCityChanged,
      onStreetChanged,
      onHouseChanged,
      isSignUpButtonDisabled,
      errors
    } = this.props.signUpViewModel;

    console.log("RENDER", email);

    return (
      <div>
        <h4>email</h4>
        <input
          type="email"
          name="email"
          defaultValue={email}
          autoComplete="username"
          onBlur={e => onEmailChanged(e.target.value)}
        />
        {errors.email ? <div>{errors.email}</div> : null}
        <h4>pasword</h4>
        <input
          type="password"
          name="password"
          defaultValue={password}
          onBlur={e => onPasswordChanged(e.target.value)}
        />
        {errors.password ? <div>{errors.password}</div> : null}
        <h4>username</h4>
        <input
          type="text"
          name="username"
          defaultValue={username}
          onBlur={e => onUsernameChanged(e.target.value)}
        />
        {errors.username ? <div>{errors.username}</div> : null}
        <h4>first name</h4>
        <input
          type="text"
          name="firstName"
          defaultValue={firstName}
          onBlur={e => onFirstNameChanged(e.target.value)}
        />
        {errors.firstName ? <div>{errors.firstName}</div> : null}
        <h4>last name</h4>
        <input
          type="text"
          name="lastName"
          defaultValue={lastName}
          onBlur={e => onLastNameChanged(e.target.value)}
        />
        {errors.lastName ? <div>{errors.lastName}</div> : null}
        <h4>birthday</h4>
        <input
          type="text"
          name="birthday"
          defaultValue={birthday}
          onBlur={e => onBirthdayChanged(e.target.value)}
        />
        {errors.birthday ? <div>{errors.birthday}</div> : null}
        <h4>mobile phone</h4>
        <input
          type="text"
          name="mobilePhone"
          defaultValue={mobilePhone}
          onBlur={e => onMobilePhoneChanged(e.target.value)}
        />
        {errors.mobilePhone ? <div>{errors.mobilePhone}</div> : null}
        <h4>post code</h4>
        <input
          type="text"
          name="postcode"
          defaultValue={postcode}
          onBlur={e => onPostcodeChanged(e.target.value)}
        />
        {errors.postcode ? <div>{errors.postcode}</div> : null}
        <h4>city</h4>
        <input
          type="text"
          name="city"
          defaultValue={city}
          onBlur={e => onCityChanged(e.target.value)}
        />
        {errors.city ? <div>{errors.city}</div> : null}
        <h4>street</h4>
        <input
          type="text"
          name="street"
          defaultValue={street}
          onBlur={e => onStreetChanged(e.target.value)}
        />
        {errors.street ? <div>{errors.street}</div> : null}
        <h4>house</h4>
        <input
          type="text"
          name="house"
          defaultValue={house}
          onBlur={e => onHouseChanged(e.target.value)}
        />
        {errors.house ? <div>{errors.house}</div> : null}
        <div>
          <button type="submit" disabled={isSignUpButtonDisabled}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}
