import React from "react";
import { actionTypes } from "./reducer";

type CreateCtx<T> = readonly [() => T, React.Provider<T>, React.Context<T>];

const createCtx = <T>(name: string, defaultValue?: T | undefined) => {
	const ctx = React.createContext<T | undefined>(defaultValue);

	ctx.displayName = name;

	const useCtx = (): T => {
		const c = React.useContext(ctx);

		if (c === undefined) throw new Error(`useCtx must be inside a ${name} Provider with a value`);

		return c;
	};

	return [useCtx, ctx.Provider, ctx] as CreateCtx<T>;
};

export default createCtx;



interface IAction {
	type: actionTypes;
	payload: any;
}

export interface IState {
	deletePostId: number | null;
	showDeleteModal: boolean;
	users: User[];
	posts: Post[];
	dispatch: React.Dispatch<IAction>;
}

export const initState = {
	deletePostId: null,
	showDeleteModal: false,
	users: [],
	posts: [],
	dispatch: () => null,
} as IState;

const [useCtx, Provider, ctx] = createCtx("AppContext", initState);

export { useCtx, Provider, ctx };
