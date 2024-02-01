export interface UserPagination {
  current_page: number;
  data: User[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

export interface User {
  name: string;
  email: null | string;
  phone: null | string;
  status_send: StatusSend;
}

export enum StatusSend {
  AguardandoEnvio = 'Aguardando envio',
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
