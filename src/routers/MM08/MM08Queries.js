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
