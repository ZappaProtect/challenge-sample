import * as React from 'react';
import { ChallengeProps } from '../../types';
import './index.css';

const Challenge: ChallengeProps = ({ markComplete, onBlur, onMouseEnter }) => {
  return (
    <div className="container">
      <span className="button" onClick={() => markComplete()}>
        Press me!
      </span>
      <div className="confettis">
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
        <div className="confetti"></div>
      </div>
    </div>
  );
};

Challenge.helpContentProps = {
  componentName: 'Challenge',
  componentVersion: process.env.REACT_APP_npm_package_version || '0.1.0',
  helpMessage: 'This is a sample challenge template',
};

Challenge.startButtonProps = {
  logo: 'https://zappa-assets.s3.us-east-2.amazonaws.com/logo-zappa-protect-white-color-line-sm.png',
  bgcolor: '#22206A',
};

export default Challenge;
