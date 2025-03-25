import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { devtools } from "zustand/middleware"
import { IEmpolyeeStore } from "../Interface/IEmpolyeeStore"
import { IEmployee } from "../Interface/IEmployee"

export const EmployeeStore = create<IEmpolyeeStore>()(
    devtools(
        immer((set,get) => ({

            Employees : [],

            setEmployees: (Employees: IEmployee[]) => {
                set((state) => {
                    state.Employees = Employees;
                })
            },

            getEmployee: () => get().Employees,

            
        }))
    )
)

export default EmployeeStore
