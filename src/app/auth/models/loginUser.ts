export class LoginUser {
  constructor( public identifier: string,
               public password: string ) {}
}

export interface LoginResponse {
    jwt:  string;
    user: User;
}

export interface User {
    id:         number;
    username:   string;
    email:      string;
    provider?:   string;
    confirmed:  boolean;
    blocked?:    null;
    role?:       Role;
    created_at?: Date;
    updated_at?: Date;
}

export interface Role {
    id:          number;
    name:        string;
    description: string;
    type:        string;
}
export interface ErrorLoginResponse {
    statusCode: number;
    error:      string;
    message:    DataErrorLogin[];
    data:       DataErrorLogin[];
}

export interface DataErrorLogin {
    messages: Message[];
}

export interface Message {
    id:      string;
    message: string;
}
