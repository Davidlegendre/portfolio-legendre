export interface Mail {
    toUser: ToUser[]
    subject: string
    isHTMLBody: boolean
    body: string
  }
  
  export interface ToUser {
    nombre: string
    email: string
  }