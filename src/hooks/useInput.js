import { useReducer } from "react";

const ACTIONS = {
  change: "CHANGE",
  focus: "FOCUS",
  blur: "BLUR",
  reset: "RESET",
};

const inputInitialState = {
  enteredInput: "",
  enteredInputValidity: false,
  inputTouched: false,
  inputIsFocus: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.change:
      return {
        ...state,
        enteredInput: action.value,
      };

    case ACTIONS.focus:
      return {
        ...state,
        inputIsFocus: true,
        inputTouched: false,
      };

    case ACTIONS.blur:
      return {
        ...state,
        enteredInputValidity: action.authentication(state.enteredInput),
        inputIsFocus: false,
        inputTouched: true,
      };

    case ACTIONS.reset:
      return inputInitialState;

    default:
      return inputInitialState;
  }
};

const useInput = (inputAuthentication) => {
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    inputInitialState
  );

  const handleInputChange = (e) => {
    inputDispatch({
      type: ACTIONS.change,
      value: e.target.value,
    });
  };

  const handleInputFocus = () => {
    inputDispatch({ type: ACTIONS.focus });
  };

  const handleInputBlur = () => {
    inputDispatch({ type: ACTIONS.blur, authentication: inputAuthentication });
  };

  const handleInputReset = () => {
    inputDispatch({ type: ACTIONS.reset });
  };

  return {
    inputState: inputState.enteredInput,
    inputValidity: inputState.enteredInputValidity,
    inputTouched: inputState.inputTouched,
    inputFocused: inputState.inputIsFocus,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onReset: handleInputReset,
  };
};

export default useInput;
