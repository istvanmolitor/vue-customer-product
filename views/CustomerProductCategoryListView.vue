<script setup lang="ts">
import { AdminLayout, toastService } from '@admin'
import DataTable, { type Column, type PaginationMeta } from '@admin/components/ui/dataTable/DataTable.vue'
import { onMounted, ref } from 'vue'
import { customerProductCategoryApi } from '../services/customerProductCategoryApi'
import type { CustomerProductCategory } from '../services/types'

const customerProductCategories = ref<CustomerProductCategory[]>([])
const isLoading = ref(false)
const pagination = ref<PaginationMeta>({
  current_page: 1,
  last_page: 1,
  per_page: 10,
  total: 0,
})

const columns: Column<CustomerProductCategory>[] = [
  { key: 'name', label: 'Név', sortable: true },
  { key: 'customer', label: 'Ügyfél', sortable: false },
  { key: 'parent', label: 'Szülő kategória', sortable: false },
]

const fetchCustomerProductCategories = async (params: {
  search?: string
  sort?: string
  direction?: 'asc' | 'desc'
  page?: number
}) => {
  try {
    isLoading.value = true
    const response = await customerProductCategoryApi.list(params)
    customerProductCategories.value = response.data ?? []
    pagination.value = response.meta
  } catch (error) {
    console.error('Hiba az ügyfél termék kategóriák betöltésekor:', error)
    toastService.error('Hiba történt az ügyfél termék kategóriák betöltése során.')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCustomerProductCategories({ page: 1, sort: 'id', direction: 'desc' })
})
</script>

<template>
  <AdminLayout pageTitle="Ügyfél termék kategóriák">
    <DataTable
      :columns="columns"
      :data="customerProductCategories"
      :loading="isLoading"
      :pagination="pagination"
      :searchable="true"
      search-placeholder="Keresés név vagy leírás alapján..."
      default-sort="id"
      default-direction="desc"
      @fetch="fetchCustomerProductCategories"
    >
      <template #cell-customer="{ row }">
        {{ row.customer?.name || '-' }}
      </template>

      <template #cell-parent="{ row }">
        {{ row.parent?.name || '-' }}
      </template>

      <template #empty>
        Nincs megjeleníthető ügyfél termék kategória.
      </template>
    </DataTable>
  </AdminLayout>
</template>
