<script setup lang="ts">
import { AdminLayout, toastService } from '@admin'
import DataTable, { type Column, type PaginationMeta } from '@admin/components/ui/dataTable/DataTable.vue'
import { onMounted, ref } from 'vue'
import { customerProductApi } from '../services/customerProductApi'
import type { CustomerProduct } from '../services/types'

const customerProducts = ref<CustomerProduct[]>([])
const isLoading = ref(false)
const pagination = ref<PaginationMeta>({
  current_page: 1,
  last_page: 1,
  per_page: 10,
  total: 0,
})

const columns = ref<Column[]>([])

const fetchCustomerProducts = async (params: {
  search?: string
  sort?: string
  direction?: 'asc' | 'desc'
  page?: number
}) => {
  try {
    isLoading.value = true
    const response = await customerProductApi.list(params)
    customerProducts.value = response.data ?? []
    pagination.value = response.meta
    columns.value = (response.columns ?? []) as Column[]
  } catch (error) {
    console.error('Hiba az ügyfél termékek betöltésekor:', error)
    toastService.error('Hiba történt az ügyfél termékek betöltése során.')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCustomerProducts({ page: 1, sort: 'id', direction: 'desc' })
})
</script>

<template>
  <AdminLayout pageTitle="Ügyfél termékek">
    <DataTable
      :columns="columns"
      :data="customerProducts"
      :loading="isLoading"
      :pagination="pagination"
      :searchable="true"
      search-placeholder="Keresés SKU vagy név alapján..."
      default-sort="id"
      default-direction="desc"
      @fetch="fetchCustomerProducts"
    >
      <template #cell-customer="{ row }">
        {{ row.customer?.name || '-' }}
      </template>

      <template #cell-price="{ row }">
        {{ row.price ?? '-' }}
      </template>

      <template #cell-stock="{ row }">
        {{ row.stock ?? '-' }}
      </template>

      <template #empty>
        Nincs megjeleníthető ügyfél termék.
      </template>
    </DataTable>
  </AdminLayout>
</template>
