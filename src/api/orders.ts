import axios from "axios"
import { API_URL } from "../config"

class OrdersApi {
  get(id: number) {}

  create(blockchain: string, address: string, keywords: string, email: string) {
    axios.post(`${API_URL}/api/orders/create`, {
      blockchain: blockchain,
      address: address,
      keywords: keywords,
      email: email
    }).then((res) => {
      console.log(res.data)
    })
  }

  delete(id: string) {}
}

export default new OrdersApi
