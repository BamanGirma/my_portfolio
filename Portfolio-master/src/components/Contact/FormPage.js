import React from 'react';
import styled from 'styled-components';
import DetailsBar from './DetailsBar';
import InputSide from './InputSide';



const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const FormContainer = styled.div`
  width: 65%;
  min-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: auto;
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 0px;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(255, 255, 255);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(255, 255, 255);
  font-size: 15px;
  text-align: center;
`;

const FormPage = () => {
  return (
    <PageWrapper>
      <PageHeadingWrapper>
        <TextOne>Contact ME</TextOne>
        <TextTwo>I’d love to hear from you! Whether you have a question about a project, want to discuss opportunities, or just want to connect, feel free to reach out.</TextTwo>
      </PageHeadingWrapper>
      <FormContainer>
        <DetailsBar />
        <InputSide />
      </FormContainer>
    </PageWrapper>
  );
};

export default FormPage;
