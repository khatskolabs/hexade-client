import axios from "axios"
import { API_URL } from "../config"

class ToolsApi {
  async getRandomNumbers(num: number): Promise<Array<number>> {
    return (await axios.get(`${API_URL}/api/v1/tools/random/numbers/${num}`)).data.data
  }

  async getRandomWords(num: number): Promise<Array<string>> {
    return (await axios.get(`${API_URL}/api/v1/tools/random/words/${num}`)).data.data
  }
}

export default new ToolsApi
