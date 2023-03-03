import { IState } from './context';
export type actionTypes = "SET_USERS" | "SET_POSTS" | "SET_SELECTED_USER_ID" | "SET_SHOW_DELETE_MODAL" | "SET_DELETE_POST_ID" |"SET_SELECTED_USER_ID";
export const reducer = (state: IState, action: { type: actionTypes; payload: any }) => {
	switch (action.type) {
		case "SET_USERS":
			return { ...state, users: action.payload };
		case "SET_POSTS":
			return { ...state, posts: action.payload };
		case "SET_SELECTED_USER_ID":
			return { ...state, selectedUserId: action.payload };
		case "SET_SHOW_DELETE_MODAL":
			return { ...state, showDeleteModal: action.payload };
		case "SET_DELETE_POST_ID":
			return { ...state, deletePostId: action.payload };
		default:
			return state;
	}
};

export const actionSetDeletePostId = (id: number | null) => {
	return {
		type: "SET_DELETE_POST_ID" as actionTypes,
		payload: id,
	};
};

export const actionSetShowDeleteModal = (show: boolean) => {
	return {
		type: "SET_SHOW_DELETE_MODAL" as actionTypes,
		payload: show,
	};
};

export const actionSetUsers = (users: User[]) => {
	return {
		type: "SET_USERS" as actionTypes,
		payload: users,
	};
};

export const actionSetSelectedUserId = (id: number | null) => {
	return {
		type: "SET_SELECTED_USER_ID" as actionTypes,
		payload: id,
	};
};

export const actionSetPosts = (posts: Post[]) => {
    return {
        type: "SET_POSTS" as actionTypes,
        payload: posts,
    };
};

export const actionSetActiveUser = (id: number) => {
	return {
		type: "SET_SELECTED_USER_ID" as actionTypes,
		payload: id,
	};
};