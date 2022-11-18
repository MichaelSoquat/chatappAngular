import { UserInterface } from "../interfaces/user";

export class User implements UserInterface {
    public id: number = 0;
    public username: string = '';
    public last_name: string = '';
    public first_name: string = '';
    public email: string = '';
    public is_active: boolean = false;
    public is_superuser: boolean = false;
    public last_login: string = '';
    public date_joined: string = '';
    public groups: number = 0;


    constructor(args: Partial<UserInterface> = {}) {
        this.setProps(args);
    }


    get serialized(): Partial<UserInterface> {
        return {
            id: this.id,
            username: this.username,
            last_name: this.last_name,
            first_name: this.first_name,
            email: this.email,
            is_active: this.is_active,
            is_superuser: this.is_superuser,
            last_login: this.last_login,
            date_joined: this.date_joined,
            groups: this.groups
        };
    }


    protected setProps(args: Partial<UserInterface>): void {
        Object.assign(this, args);
    }
}




