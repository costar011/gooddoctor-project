import React, { useState } from "react";
import MM07Presenter from "./MM07Presenter";
import { LOGIN, CHECK_SECRET_CODE } from "./MM07Queries";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";

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
  const [LoginMutation] = useMutation(LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHECK_SECRET_CODE);

  ////////   USE EFFECT   ////////

  const loginClickHandler = async () => {
    const { data } = await LoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      setTab(1);
    } else {
      alert("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode.result) {
      alert("login");
      sessionStorage.setItem("KDUWSU@SUF", data.checkSecretCode.objectId);
      history.push("/");

      window.location.reload();
    } else {
      alert("인증코드가 잘못되었습니다.");
    }
    console.log(data);
  };

  return (
    <MM07Presenter
      inputEmail={inputEmail}
      loginClickHandler={loginClickHandler}
      tab={tab}
      assignment={assignment}
      assignmentCheckHandler={assignmentCheckHandler}
    />
  );
};
export default MM07Container;
