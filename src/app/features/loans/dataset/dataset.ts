import { SatusLoanInterface } from "../interfaces/StatusLoanInterface";

export const statusLoans: Array<SatusLoanInterface> = [
    {
        label: 'Aprobados',
        icon: 'task_alt',
        canPay: true,
    },
    {
        label: 'Pagados',
        icon: 'payments',
        canPay: false,
    },
    {
        label: 'Rechazados',
        icon: 'cancel',
        canPay: false,
    },
    {
        label: 'Todos',
        icon: 'list',
        canPay: false,
    },
]
