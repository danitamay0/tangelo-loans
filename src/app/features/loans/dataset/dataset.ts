import { SatusLoanInterface } from "../interfaces/StatusLoanInterface";

export const statusLoans: Array<SatusLoanInterface> = [
    {
        label: 'Aprobados',
        icon: 'task_alt',
        canPay: true,
        status:'approved'
    },
    {
        label: 'Pagados',
        icon: 'payments',
        canPay: false,
        status:'paid'
    },
    {
        label: 'Rechazados',
        icon: 'cancel',
        canPay: false,
        status:'rejected'
    },
    {
        label: 'Todos',
        icon: 'list',
        canPay: false,
        status:'all'
    },
]
