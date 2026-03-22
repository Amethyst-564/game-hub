import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5d13d16663934cc888b6d34e91b25df8'
  }
})