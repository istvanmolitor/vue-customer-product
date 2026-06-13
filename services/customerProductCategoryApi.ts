import { createApiClient } from '@user'
import type {
  CustomerProductCategory,
  CustomerProductCategoryFormData,
  PaginatedResponse,
  SingleResponse,
} from './types'

const api = createApiClient({ baseURL: '/api/admin/customer-product' })

interface ListParams {
  page?: number
  per_page?: number
  search?: string
  sort?: string
  direction?: string
}

export const customerProductCategoryApi = {
  async list(params: ListParams = {}): Promise<PaginatedResponse<CustomerProductCategory>> {
    const response = await api.get('/customer-product-categories', { params })
    return response.data
  },

  async create(): Promise<Record<string, unknown>> {
    const response = await api.get('/customer-product-categories/create')
    return response.data
  },

  async store(data: CustomerProductCategoryFormData): Promise<SingleResponse<CustomerProductCategory>> {
    const response = await api.post('/customer-product-categories', data)
    return response.data
  },

  async show(id: number): Promise<SingleResponse<CustomerProductCategory>> {
    const response = await api.get(`/customer-product-categories/${id}`)
    return response.data
  },

  async edit(id: number): Promise<Record<string, unknown>> {
    const response = await api.get(`/customer-product-categories/${id}/edit`)
    return response.data
  },

  async update(id: number, data: CustomerProductCategoryFormData): Promise<SingleResponse<CustomerProductCategory>> {
    const response = await api.put(`/customer-product-categories/${id}`, data)
    return response.data
  },

  async delete(id: number): Promise<SingleResponse<null>> {
    const response = await api.delete(`/customer-product-categories/${id}`)
    return response.data
  },
}