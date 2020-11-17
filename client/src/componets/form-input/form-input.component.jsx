import React from 'react';

import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';









//acesta va fi o componenta functionala pentru ca nu vrem nici un state

const FormInput = ({ handleChange, lable, ...props }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...props}/>

        {
            lable ? (
            <FormInputLabel className={props.value.length ? 'shrink': ''} >
                {lable}
            </FormInputLabel>) : null
        }

    </GroupContainer>
)




export default FormInput;