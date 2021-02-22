import { gql } from "apollo-boost";

// gql안에서의 $표시는 :뒤의 타입의 데이터를 받을 수 있는 준비상태를 뜻함
export const LOGIN = gql`
  mutation Login($email: String!) {
    Login(email: $email)
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
