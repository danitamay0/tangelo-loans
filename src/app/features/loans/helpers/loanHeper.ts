import { LoanData } from "../interfaces/LoanDataInterface"

export const funtionsLoans = {

    reducerStatistics: (acc: any, el: LoanData) => {
        if (el.status == 'approved') {
            acc.approved.value++
        }
        if (el.status == 'paid') {
            acc.paid.value++
        }
        if (el.status == 'rejected') {
            acc.rejected.value++
        }
        return { ...acc }
    },
    reducerAmount: (acc: any, el: LoanData) => {
        if (el.status == 'approved') {
            acc.approved+= el.value
        }
        if (el.status == 'paid') {
            acc.paid+= ( el.value / 2 )
        }
        return { ...acc }
    }
}