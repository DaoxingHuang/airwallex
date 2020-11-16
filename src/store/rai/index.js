
import HTTP from "../../utils/http";
import { SERVER } from "../../config";

export const SEND_REQUEST_A_INVITE = 'send_a_reqeust_invite';
export const UPDATE_REQUEST_STATE = 'update_Req_State';

export default class RequestInvite{

    initizeState = {
        name:'',
        email:'',
        confirmEmail:''
    }

    state = () => (Object.assign({},this.initizeState));

    mutations = {
        [UPDATE_REQUEST_STATE]:(state)=>{
            // eslint-disable-next-line no-debugger
            debugger;
            state.name = this.initizeState.name;
            state.email = this.initizeState.email;
            state.confirmEmail = this.initizeState.confirmEmail;
        }
    }

    actions = {
        [SEND_REQUEST_A_INVITE]:async ({commit},payload)=>{
            const ret =await HTTP.post(SERVER.FakeAuth, payload);
            // eslint-disable-next-line no-debugger
            debugger;
            commit(UPDATE_REQUEST_STATE);
            return ret;
        }
    }
}