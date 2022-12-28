import { type } from "@testing-library/user-event/dist/type"

export const addToDo = (data) => {
    return {
        type: 'capnhat',
        payload: data
    }

}