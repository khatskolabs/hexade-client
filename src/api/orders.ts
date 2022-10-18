import axios from "axios"
import { API_URL } from "../config"

class OrdersApi {
  async create(blockchain: string, address: string, keywords: string, email: string) {
    // await axios.post(`${API_URL}/api/v1/orders/create`, {
    //   blockchain: blockchain,
    //   address: address,
    //   keywords: keywords,
    //   email: email
    // })
  }

  async find(id: string) {}

  async delete(id: string) {}
}

export default new OrdersApi
