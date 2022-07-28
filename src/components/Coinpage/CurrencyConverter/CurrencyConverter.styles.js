import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 30px;
  margin-top: 47px;
  margin-bottom: 21px;
`;

export const Name = styled.div`
  background: ${(props) => props.theme.money.green};
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 47px;
  margin-bottom: 21px;
`;
