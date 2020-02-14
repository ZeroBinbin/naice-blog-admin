export const IS_DEV:boolean = process.env.NODE_ENV !== 'production'

export const API_ROOT:string = IS_DEV ? 'http://localhost:3009/api/' : 'https://106.13.150.151/api/'
