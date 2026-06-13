// Router
export { customerProductRoutes } from './router.ts'

// Services
export { customerProductApi } from './services/customerProductApi'
export { customerProductCategoryApi } from './services/customerProductCategoryApi'

// Menu configuration
export { CustomerProductMenuBuilder, customerProductMenuBuilder } from './config/menuBuilder'

// Types
export type {
  CustomerProduct,
  CustomerProductCategory,
  CustomerProductFormData,
  CustomerProductCategoryFormData,
  CustomerProductTranslations,
  CustomerProductCategoryTranslations,
  PaginatedResponse,
  SingleResponse,
} from './services/index'