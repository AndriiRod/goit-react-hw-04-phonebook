import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 1.16;
  font-weight: 500;

  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;

  color: #000000;
`;

export const Input = styled.input`
  width: 330px;
  height: 35px;
  padding: 5px 10px;

  background: #fafafa;
  border: 1px solid #454545;
  border-radius: 2px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.18;

  margin-bottom: 20px;
`;

export const FormBtn = styled.button`
  font-family: inherit;
  width: 100px;
  margin: 0 auto;

  background-color: #00b2ff;
  color: #ffffff;
  box-shadow: 0px 14px 50px rgba(0, 25, 36, 0.2);
  border: none;
  border-radius: 2px;
`;

export const ErrorMessage = styled.div`
  font-size: 12px;
  padding: 10px;
  border: 1px solid #dc143c;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #f08080;
  color: #e0ffff;
`;
