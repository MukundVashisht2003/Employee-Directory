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

            Id : undefined,

            setId: (Id: string | undefined) => {
                set((state) => {
                    state.Id = Id;
                })
            },

            getId: (id: string | undefined) => get().Employees.find((employee) => employee.id === id),

            isOpen: false,

            setIsOpen: (isOpen: boolean) => {
                set((state) => {
                    state.isOpen = isOpen;
                })
            }
        }))
    )
)

export default EmployeeStore
