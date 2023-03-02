import { IState } from './context';
export type actionTypes = "SET_USERS" | "SET_POSTS" | "SET_SELECTED_USER_ID";
export const reducer = (state: IState, action: { type: actionTypes; payload: any }) => {
	switch (action.type) {
		case "SET_USERS":
			return { ...state, users: action.payload };
		case "SET_POSTS":
			return { ...state, posts: action.payload };
		case "SET_SELECTED_USER_ID":
			return { ...state, selectedUserId: action.payload };
		default:
			return state;
	}
};

export const actionSetUsers = (users: User[]) => {
	return {
		type: "SET_USERS" as actionTypes,
		payload: users,
	};
};

export const actionSetPosts = (posts: Post[]) => {
    return {
        type: "SET_POSTS" as actionTypes,
        payload: posts,
    };
};

export const actionSetActiveUser = (id: string) => {
	return {
		type: "SET_SELECTED_USER_ID" as actionTypes,
		payload: id,
	};
};