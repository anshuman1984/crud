
import axios from "axios";
import { getAllRequestFail, getAllRequestSuccess, makeRequest, AddRequest } from "./Action"
import { toast } from 'react-toastify';


//fetch data
export const GetAllCompany = () => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.get("http://localhost:8000/company").then(res => {
            const _list = res.data;
            dispatch(getAllRequestSuccess(_list))
        }).catch(err => {
            getAllRequestFail(err.message)
        });
    }
}
//send form data
export const CreateCompany = (data) => {
    return (dispatch) => {
        axios.post("http://localhost:8000/company", data).then(res => {
            dispatch(AddRequest(data))
            toast.success('enter successfully')

        }).catch(err => {
            toast.error('Invalid entry' + err.message)
        });
    }
}