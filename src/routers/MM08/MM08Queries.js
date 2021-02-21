import { gql } from "apollo-boost";

export const REGIST_USER = gql`
  mutation registUser(
    $name: String!
    $email: String!
    $nickName: String!
    $mobile: String!
    $zoneCode: String!
    $address: String!
    $detailAddress: String!
  ) {
    registUser(
      name: $name
      email: $email
      nickName: $nickName
      mobile: $mobile
      zoneCode: $zoneCode
      address: $address
      detailAddress: $detailAddress
    )
  }
`;
// gql안에서의 $표시는 :뒤의 타입의 데이터를 받을 수 있는 준비상태를 뜻함
