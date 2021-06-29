export enum V2ModeUpdateResult {
	ERROR = -1,
	SUCCESS_NEW_MODE = 0,
	SUCCESS_SAME_MODE = 1
}

export interface V2ModeUpdateResponse {
	result: V2ModeUpdateResult
}