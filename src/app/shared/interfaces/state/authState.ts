import { IDefaultStateProps } from ".";
import { GitHubUser } from "../responseBody";

export interface IGitHubUserState extends IDefaultStateProps {
    data: GitHubUser | null
}

export interface AuthState {
    githubUser: IGitHubUserState
}