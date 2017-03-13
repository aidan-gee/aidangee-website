import React from 'react';
import './SocialButton.css';

const SocialButton = ({href, faClass}) => (
    <a href={href} className={`social-button ${faClass}`}><i className={`fa fa-${faClass}`}/></a>
)

export default SocialButton;
