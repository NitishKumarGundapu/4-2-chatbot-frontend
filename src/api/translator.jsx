import api from "./retriver"

const get_translation = async (message,language) => {
    const response = await api.get("/translater",{
      params : {
      msg: ''.concat(message),
      lang: language
    }})
    return response;
  };

export default get_translation