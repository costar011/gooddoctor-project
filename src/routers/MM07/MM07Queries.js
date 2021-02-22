import { gql } from "apollo-boost";

export const TRY_LOGIN = gql`
  mutation tryLogin($email: String!) {
    tryLogin(email: $email)
  }
`;

export const CHECK_SECRET_CODE = gql`
  mutation checkSecretCode($email: String!, $code: String!) {
    checkSecretCode(email: $email, code: $code) {
      result
      objectId
    }
  }
`;
