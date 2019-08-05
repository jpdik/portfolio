import React from 'react';

const Language = (props) => (
    <>
   { React.Children.map(props.children, child => React.cloneElement(child, {...props}))}
    </>
)
export default Language;