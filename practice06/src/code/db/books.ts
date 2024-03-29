import { IUserModel } from './users'

export interface IRatingModel {
  id: string
  user: IUserModel
  rate: number
  description: string
  created_at: string
}

export interface IBookModel {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
  categories: {
    categoryId: string
  }[]
  ratings: IRatingModel[]
}

export interface ICategoryModel {
  id: string
  name: string
}
