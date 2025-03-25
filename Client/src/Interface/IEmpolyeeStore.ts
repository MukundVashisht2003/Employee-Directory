import type { IEmployee } from "./IEmployee";

export interface IEmpolyeeStore {
    

    Employees: IEmployee[]

    setEmployees: (Employees: IEmployee[]) => void

    getEmployee: () => IEmployee[]

}
