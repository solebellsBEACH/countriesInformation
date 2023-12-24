import { AuthState, IGitHubUserState } from "../../interfaces/state/authState";
import { DefaultStateInitialValue } from ".";

export const GitHubUserStateInitialValue: IGitHubUserState = {
    ...DefaultStateInitialValue,
    data: null
}
export const AuthStateInitialValue: AuthState = {
    githubUser: GitHubUserStateInitialValue
};

