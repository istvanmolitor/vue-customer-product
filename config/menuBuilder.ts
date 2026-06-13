import { MenuBuilder, type MenuItemConfig } from '@menu/index'
import { BriefcaseBusiness, PackageSearch, FolderTree } from 'lucide-vue-next'

/**
 * Customer Product Menu Builder
 * Adds customer product management links to the admin menu.
 */
export class CustomerProductMenuBuilder extends MenuBuilder {
  build(menu: MenuItemConfig, menuName: string): MenuItemConfig {
    if (menuName === 'admin') {
      return this.buildMainMenu(menu)
    }

    return menu
  }

  private buildMainMenu(menu: MenuItemConfig): MenuItemConfig {
    const customerProductSection: MenuItemConfig = {
      id: 'customer-product-management',
      title: 'Ügyfél termékek',
      icon: BriefcaseBusiness,
      order: 36,
      permission: 'customer_product',
      children: [
        {
          id: 'customer-products',
          title: 'Ügyfél termékek',
          icon: PackageSearch,
          path: '/admin/customer-products',
          order: 10,
          permission: 'customer_product',
        },
        {
          id: 'customer-product-categories',
          title: 'Ügyfél termék kategóriák',
          icon: FolderTree,
          path: '/admin/customer-product-categories',
          order: 20,
          permission: 'customer_product',
        },
      ],
    }

    this.addMenuItem(menu, customerProductSection)

    return menu
  }
}

export const customerProductMenuBuilder = new CustomerProductMenuBuilder()
