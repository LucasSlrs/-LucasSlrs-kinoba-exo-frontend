export interface UserCredential {
  first_name: string;
  last_name: string;
  phone_number: string;
  password: string;
}

export interface LoginCredential {
  phone_number: string;
  password: string;
}
export interface Chat {
  _id?: string;
  participants?: number[];
  lastMessage?: Message;
}
export interface Message {
  _id?: string;
  chatId?: string;
  createAt?: Date;
  senderId?: number;
  read?: boolean;
}
