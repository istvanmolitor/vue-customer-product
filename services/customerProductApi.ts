import { createApiClient } from '@user'
import type { CustomerProduct, CustomerProductFormData, PaginatedResponse, SingleResponse } from './types'

const api = createApiClient({ baseURL: '/api/admin/customer-product' })

interface ListParams {
  page?: number
  per_page?: number
  search?: string
  sort?: string
  direction?: string
}

export const customerProductApi = {
  async list(params: ListParams = {}): Promise<PaginatedResponse<CustomerProduct>> {
    const response = await api.get('/customer-products', { params })
    return response.data
  },

  async create(): Promise<Record<string, unknown>> {
    const response = await api.get('/customer-products/create')
    return response.data
  },

  async store(data: CustomerProductFormData): Promise<SingleResponse<CustomerProduct>> {
    const response = await api.post('/customer-products', data)
    return response.data
  },

  async show(id: number): Promise<SingleResponse<CustomerProduct>> {
    const response = await api.get(`/customer-products/${id}`)
    return response.data
  },

  async edit(id: number): Promise<Record<string, unknown>> {
    const response = await api.get(`/customer-products/${id}/edit`)
    return response.data
  },

  async update(id: number, data: CustomerProductFormData): Promise<SingleResponse<CustomerProduct>> {
    const response = await api.put(`/customer-products/${id}`, data)
    return response.data
  },

  async delete(id: number): Promise<SingleResponse<null>> {
    const response = await api.delete(`/customer-products/${id}`)
    return response.data
  },
}