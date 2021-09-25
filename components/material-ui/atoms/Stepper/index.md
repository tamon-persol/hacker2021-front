# Stepper

## Usage
```jsx
import { Stepper } from 'components/atoms/Stepper';
import { Step } from 'components/atoms/Step';
import { StepLabel } from 'components/atoms/StepLabel';
import { StepContent } from 'components/atoms/StepContent';

<Stepper activeStep={activeStep} orientation="vertical">
  <Step>
    <StepLabel>label</StepLabel>
    <StepContent>
      <Typography>{getStepContent(index)}</Typography>
      <div className={classes.actionsContainer}>
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </StepContent>
  </Step>
</Stepper>
{activeStep === steps.length && (
  <Paper square elevation={0} className={classes.resetContainer}>
    <Typography>All steps completed - you&apos;re finished</Typography>
    <Button onClick={handleReset} className={classes.button}>
      Reset
    </Button>
  </Paper>
)}
```

## Props

Basically, Material UI props are available.

- Stepper: https://material-ui.com/api/stepper/#props
- Step: https://material-ui.com/api/step/#props
- StepLabel: https://material-ui.com/api/step-label/#props
- StepContent: https://material-ui.com/api/step-content/#props

## Note


`Stepper` is useing Material UI.

[FYI]

Material UI Stepper: https://material-ui.com/components/steppers