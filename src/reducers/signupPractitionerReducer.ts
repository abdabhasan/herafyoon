type State = {
    loading: boolean;
    emailSent: boolean;
    currentStep: "emailSent" | "emailVerified" | "completed";
    userCredential: any | null;
    submittedData: any | null;
};

type Action =
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_STATE"; payload: Partial<State> }
    | { type: "RESET" };

export const initialState: State = {
    loading: false,
    emailSent: false,
    currentStep: "emailVerified",
    userCredential: null,
    submittedData: null,
};

export function signupReducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        case "SET_STATE":
            return { ...state, ...action.payload };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}
