export interface UserInterface {
    id: number,
    username: string,
    last_name: string,
    first_name: string,
    email: string,
    is_active: boolean,
    is_superuser: boolean,
    last_login: string,
    date_joined: string,
    groups?: number
}