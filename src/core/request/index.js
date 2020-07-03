/**
 * BY-Health Front-end Team (https://www.by-health.com/)
 *
 * Copyright © 2016-2017 By-Health Co Ltd. All rights reserved.
 */

import { baseUrl } from '~/config';
import Request from './request';
import * as middleware from './middleware';


export { Request };
export { middleware };
export default new Request({
	baseUrl,
	type: 'json',
	mode: 'cors',
	json: true
}, [
	middleware.timeout,
	middleware.postForm,
	// 根据具体的接口结构来定制中间件
	middleware.httpResult,
	middleware.jsonResult
]);
