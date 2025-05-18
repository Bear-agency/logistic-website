import React from 'react';
import * as styles from './styles';

const StepProgress = ({ steps = 4, activeStep = 1 }) => {
  const stepElements = [];

  for (let i = 1; i <= steps; i++) {
    const isActive = i <= activeStep;
    const circleStyle = isActive ? styles.activeCircle : styles.inactiveCircle;
    const lineStyle = i < steps ? (i < activeStep ? styles.activeLine : styles.inactiveLine) : null;

    stepElements.push(
      React.createElement('div', { key: `step-${i}`, style: styles.stepWrapper }, [
        React.createElement('div', { key: `circle-${i}`, style: circleStyle }, i.toString()),
        i < steps &&
          React.createElement('div', { key: `line-${i}`, style: lineStyle }),
      ])
    );
  }

  return React.createElement('div', { style: styles.container }, stepElements);
};

export default StepProgress;
