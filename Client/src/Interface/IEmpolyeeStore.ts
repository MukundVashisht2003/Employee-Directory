import type { IEmployee } from "./IEmployee";

export interface IEmpolyeeStore {
    

    Employees: IEmployee[]

    setEmployees: (Employees: IEmployee[]) => void

    getEmployee: () => IEmployee[]

    Id : string | undefined

    setId: (Id: string | undefined) => void

    getId: (id: string | undefined) => IEmployee | undefined

    isOpen : boolean

    setIsOpen: (isOpen: boolean) => void
}
