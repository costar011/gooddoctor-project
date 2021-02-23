import React, { useState } from "react";
import MM07Presenter from "./MM07Presenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { TRY_LOGIN, CHECK_SECRET_CODE } from "./MM07Queries";

const MM07Container = ({ history }) => {
  ////////   VARIABLE     ////////

  ////////   USE STATE    ////////
  const inputEmail = useInput(``);
  const assignment = useInput(``);

  const [tab, setTab] = useState(0);

  ////////   USE REF      ////////

  ////////   USE CONTEXT  ////////

  ////////   USE QUREY    ////////

  ////////   USE MUTATION ////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHECK_SECRET_CODE);

  ////////   USE EFFECT   ////////
  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      setTab(1);
      alert("전송된 인증번호를 입력해주세요");
    } else {
      alert("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    console.log(assignment.value);

    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode) {
      alert("로그인 성공");
      history.push("/");
    }
  };

  return (
    <MM07Presenter
      inputEmail={inputEmail}
      assignment={assignment}
      loginClickHandler={loginClickHandler}
      assignmentCheckHandler={assignmentCheckHandler}
      tab={tab}
    />
  );
};
export default MM07Container;
