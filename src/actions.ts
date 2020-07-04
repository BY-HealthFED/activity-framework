/* eslint-disable import/prefer-default-export */
import runtime from '~/core/runtime'
interface setRuntimeVariable {
	type: string;
	payload: runtime;
}

export function setRuntimeVariable(data):setRuntimeVariable {
	return {
		type: 'SET_RUNTIME_VARIABLE',
		payload: data
	};
}
