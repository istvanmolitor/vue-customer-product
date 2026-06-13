export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
  filters?: Record<string, unknown>
}

export interface SingleResponse<T> {
  data: T
  message?: string
}

export interface CustomerProductTranslations {
  [languageId: string]: {
    name: string
    description?: string | null
    keywords?: string | null
  }
}

export interface CustomerProduct {
  id: number
  customer_id: number
  product_id: number | null
  same_customer_product: number | null
  sku: string
  name?: string | null
  description?: string | null
  keywords?: string | null
  url?: string | null
  price?: string | number | null
  currency_id: number | null
  stock: number | null
  product_unit_id: number | null
  translations?: Array<Record<string, unknown>>
  customer_product_category_ids?: number[]
  customer_product_categories?: Array<{ id: number; name: string }>
  customer?: { id: number; name: string } | null
  currency?: { id: number; name: string } | null
  product_unit?: { id: number; name: string } | null
  created_at?: string | null
  updated_at?: string | null
}

export interface CustomerProductFormData {
  customer_id: number
  product_id?: number | null
  same_customer_product?: number | null
  sku: string
  url?: string | null
  price?: number | string | null
  currency_id?: number | null
  stock?: number | null
  product_unit_id?: number | null
  customer_product_category_ids?: number[]
  translations: CustomerProductTranslations
}

export interface CustomerProductCategoryTranslations {
  [languageId: string]: {
    name: string
    description?: string | null
    keywords?: string | null
  }
}

export interface CustomerProductCategory {
  id: number
  customer_id: number
  parent_id: number
  left_value: number | null
  right_value: number | null
  name?: string | null
  description?: string | null
  keywords?: string | null
  url?: string | null
  image_url?: string | null
  translations?: Array<Record<string, unknown>>
  customer?: { id: number; name: string } | null
  parent?: { id: number; name: string } | null
  created_at?: string | null
  updated_at?: string | null
}

export interface CustomerProductCategoryFormData {
  customer_id: number
  parent_id: number
  url?: string | null
  image_url?: string | null
  translations: CustomerProductCategoryTranslations
}