import config from "../config"
import { LoginClient } from "../generated/LoginServiceClientPb"

const NewLoginClient=()=>{
    const url = `http://${config.ADDRESS}:${config.PORT}`
    const client = new LoginClient(url)
    return client;
}

export default NewLoginClient