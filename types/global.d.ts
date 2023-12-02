export {}

declare global {
    interface Fn<T = any> {
        (...arg: T[]): T 
    }

    type AxiosHeaders =
    | 'application/json'
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'

}