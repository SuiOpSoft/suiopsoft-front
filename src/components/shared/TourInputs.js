import React, { useReducer, useEffect } from "react";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";

// Define the steps
const TOUR_STEPS = [
  {
    content: <h4>Inputs tutorial!</h4>,
    locale: {
      skip: <strong aria-label="skip">Skip</strong>},
    placement: "center",
    target: "body",
  },
  {
    content:"Click on New to add a new separator.",
      locale: {
        skip: <strong aria-label="skip">Skip</strong>},
        placement: "bottom",   
      target: ".tutorial-inputs",
  },
  {
    content:"Check what separator/s you want to remove and click on Delete.",
      locale: {
        skip: <strong aria-label="skip">Skip</strong>},
        placement: "bottom",   
      target: ".tutorial-inputs-delete",
  },
  {
    content:
      "Click here to start the operations.",
      locale: {
        skip: <strong aria-label="skip">Skip</strong>},
    target: ".calculate-button",
  },
  {
    content:
      "Click here to save this table on .csv file",
      locale: {
        skip: <strong aria-label="skip">Skip</strong>},
    target: ".tutorial-inputs-export",
  },
  {
    target: ".p-row-editor-init",
    content: "Here you can edit the params and them click on the check to save the changes.",
  },
];

// Define our state
const INITIAL_STATE = {
  key: new Date(),
  run: false,
  continuous: true,
  loading: false,
  stepIndex: 0,
  steps: TOUR_STEPS,
};

// Set up the reducer function
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "START":
      return { ...state, run: true };
    case "RESET":
      return { ...state, stepIndex: 0 };
    case "STOP":
      return { ...state, run: false };
    case "NEXT_OR_PREV":
      return { ...state, ...action.payload };
    case "RESTART":
      return {
        ...state,
        stepIndex: 0,
        run: true,
        loading: false,
        key: new Date(),
      };
    default:
      return state;
  }
};

// Define the Tour component
const TourInputs = (props) => {
  const [tourStateInputs, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    if (props.runTutorialInputs) {
      dispatch({ type: "RESTART" });
    }
  }, [props.runTutorialInputs]);

  const callback = (data) => {
    const { action, index, type, status } = data;
    if (
      action === ACTIONS.CLOSE ||
      (status === STATUS.SKIPPED && tourStateInputs.run) ||
      status === STATUS.FINISHED
    ) {
      props.changeRunTutorialInputs();
      dispatch({ type: "STOP" });
    } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
      dispatch({
        type: "NEXT_OR_PREV",
        payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) },
      });
    }
  };

  return (
    <>
      <JoyRide
        {...tourStateInputs}
        callback={callback}
        showSkipButton={true}
        styles={{
          tooltipContainer: {
          background: "#333742",
          textAlign: "left",
          },
          buttonBack: {
          marginRight: 10,
          color: "rgb(67, 211, 158)",
          border: "none"
          },
          options: {
          zIndex: 10000,
          },
        }}
        locale={{
          last: "End",
        }}
      />
    </>
  );
};
export default TourInputs;