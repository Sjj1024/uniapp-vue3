import "@dcloudio/types/uni-app";

import { $u } from "./uview.u";

declare global {
  interface Uni {
    $u: $u;
  }
}
