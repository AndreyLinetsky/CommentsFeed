import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import React from 'react';
import { containerPadding, inputStyle, buttonStyle, StyledErrorField } from '../../styles/commonStyles';

const StyledForm = styled(Form)`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  ${containerPadding};
`;

const StyledField = styled(Field)`
  ${inputStyle};
`;

const StyledTextArea = styled(StyledField)`
  resize: none;
`;

const StyledButton = styled.button`
  ${buttonStyle};
  width: 70px;
  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  align-self: flex-end;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  color: white;
  background-color: #57a0d3;
  padding: 9px;
`;

export default function SubmitCommentForm({
  submitComment,
  submitCommentErrorMessage
}) {
  const formikProps = {
    initialValues: {
      email: '',
      message: ''
    },
    onSubmit: (values, { resetForm }) => {
      submitComment(values);
      resetForm();
    }
  };

  const fieldCommonProps = {
    spellCheck: 'false',
    required: true
  };
  const emailFieldProps = {
    ...fieldCommonProps,
    name: 'email',
    placeholder: 'Email',
    autoComplete: 'off',
    type: 'email'
  };

  const messageFieldProps = {
    ...fieldCommonProps,
    name: 'message',
    component: 'textarea',
    placeholder: 'Message',
    rows: 3
  };

  return (
    <Formik {...formikProps}>
      {() => {
        return (
          <StyledForm>
            {submitCommentErrorMessage && (
              <StyledErrorField>{submitCommentErrorMessage}</StyledErrorField>
            )}
            <StyledField {...emailFieldProps} />
            <StyledTextArea {...messageFieldProps} />
            <StyledButton type="submit">SUBMIT</StyledButton>
          </StyledForm>
        );
      }}
    </Formik>
  );
}

SubmitCommentForm.propTypes = {
  submitComment: PropTypes.func,
  submitCommentErrorMessage: PropTypes.string
};
