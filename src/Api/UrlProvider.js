
import { API_URL,Live_API_URL ,isProduction} from "../apiConfge";
export const BASE_URL = isProduction ? Live_API_URL: API_URL ;
//export const BASE_URL ="http://localhost:9000/api"
export const END_POINT = {
  // Faq: "/v1/faq",
  Allploicy: "/v1/policy/all",
 Supportuser:"/v1/support/withoutAuth",
 affiliationSupportuser:"/v1/affiliation/support"
}
