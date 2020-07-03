/**
 * BY-Health Front-end Team (https://www.by-health.com/)
 *
 * Copyright © 2016-2017 By-Health Co Ltd. All rights reserved.
 */

import { stringify } from 'qs';
import TimeoutError from './timeoutError';

export function postForm(ctx, next) {
	if (ctx.method === 'POST') {
		switch (ctx.type) {
			case 'form':
				ctx.body = stringify(ctx.body);
				ctx.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
				break;
			case 'json':
				ctx.body = JSON.stringify(ctx.body);
				ctx.headers['Content-Type'] = 'application/json;charset=utf-8';
				break;
			default:
				break;
		}
	}

	return next();
}

export async function httpResult(ctx, next) {
	const response = await next();
	if (response.status >= 200 && response.status <= 299) {
		return response;
	}
	throw response;
}


export async function jsonResult(ctx, next) {
	try {
		const result = await next();
		if (ctx.json) {
			const json = await result.json();
			if (json.code === 500) {
				return Promise.reject(json);
			}

			return json;
		}
		return result.text();
	} catch (error) {
		if (error instanceof Response) {
			const responseText = await error.text();
			try {
				return Promise.reject(JSON.parse(responseText));
			} catch (_) {
				return Promise.reject(responseText);
			}
		}
		return Promise.reject(error);
	}

}


export async function timeout(ctx, next) {
	if (typeof ctx.timeout === 'number') {
		if (ctx.timeout > 0 && ctx.timeout !== Infinity) {
			const waitTime = ctx.timeout;
			return Promise.race([
				next(),
				new Promise((resolve, reject) =>
					setTimeout(() => reject(new TimeoutError()), waitTime)
				)
			]);
		}
		delete ctx.timeout;
	}

	return next();
}

export async function response(ctx, next) {
	const res = await next();
	if (ctx.json) {
		if (res.status === '0') {
			return res.body;
		}

		if (res.status === undefined) {
			return res;
		}

		return Promise.reject(res);
	}
	return res;
}