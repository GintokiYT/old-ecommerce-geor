import { AddCouponsComponent } from "../add-coupons/add-coupons.component";
import { ConfirmOrderComponent } from "../confirm-order/confirm-order.component";
import { InternalInboxComponent } from "../inbox/internal-inbox/internal-inbox.component";
import { ProductComponent } from "../product-detail/product/product.component";
import { VariantsComponent } from "../product-detail/variants/variants.component";
import { SearchFilterComponent } from "../search-general/search-filter/search-filter.component";
import { SearchGeneralComponent } from "../search-general/search-general/search-general.component";
import { SearchProductComponent } from "../search-general/search-product/search-product.component";
import { ReturnsExchangesSettingsComponent } from "../settings/returns-exchanges-settings/returns-exchanges-settings.component";

export const searchGeneralRoutes = [
  {
    path: 'search-general',
    component: SearchGeneralComponent
  },
  {
    path: 'search-general/filter',
    component: SearchFilterComponent
  },
  {
    path: 'search-general/product',
    component: SearchProductComponent
  },
  {
    path: 'search-general/product-detail',
    component: ProductComponent
  },
  {
    path: 'search-general/product-detail/variants',
    component: VariantsComponent
  },
  {
    path: 'search-general/product-detail/returns-exchanges',
    component: ReturnsExchangesSettingsComponent
  },
  {
    path: 'search-general/product-detail/confirm-order',
    component: ConfirmOrderComponent
  },
  {
    path: 'search-general/product-detail/internal-inbox/:id',
    component: InternalInboxComponent
  },
  {
    path: 'search-general/product-detail/add-coupons',
    component: AddCouponsComponent
  }
]
