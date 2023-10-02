export type Root = Root2[]

export interface Root2 {
  created_at: string
  titulo: string
  description: string
  idPortfolio: string
  Captures: Capture[]
  Links: Link[]
}

export interface Capture {
  id: number
  created_at: string
  idPortfolio: string
  url: string
}

export interface Link {
  id: number
  created_at: string
  url: string
  idPortfolio: string
  idTypeURL: number
  TypeURLs: TypeUrls
}

export interface TypeUrls {
  id: number
  created_at: string
  description: string
  icon: string
}