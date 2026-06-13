import type { RouteRecordRaw } from 'vue-router'
import CustomerProductListView from './views/CustomerProductListView.vue'
import CustomerProductCategoryListView from './views/CustomerProductCategoryListView.vue'

export const customerProductRoutes: RouteRecordRaw[] = [
  {
    path: '/admin/customer-products',
    name: 'customer-product.products',
    component: CustomerProductListView,
  },
  {
    path: '/admin/customer-product-categories',
    name: 'customer-product.categories',
    component: CustomerProductCategoryListView,
  },
]
