import React from "react";
import { auth } from '../firebase';

const SignOutButton = () => (
  <span onClick={auth.doSignOut} title="Sign Out"><i class="fas fa-sign-out-alt"></i></span>
)

export default SignOutButton;
