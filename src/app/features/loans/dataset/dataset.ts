import { SatusLoanInterface } from "../interfaces/StatusLoanInterface";

export const statusLoans: Array<SatusLoanInterface> = [
    {
        label: 'Aprobados',
        icon: 'task_alt',
        canPay: true,
        status: 'approved'
    },
    {
        label: 'Pagados',
        icon: 'payments',
        canPay: false,
        status: 'paid'
    },
    {
        label: 'Rechazados',
        icon: 'cancel',
        canPay: false,
        status: 'rejected'
    },
    {
        label: 'Todos',
        icon: 'list',
        canPay: false,
        status: 'all'
    },
]

export const statisticsData = {
    approved: {
        title: 'Prestámos por pagar 🤩', value: 0
    },
    paid: {
        title: 'Prestámos pagos 😎', value: 0
    },
    rejected: {
        title: 'Prestámos rechazados 😥', value: 0
    },
    all: {
        title: 'Solicitudes en total 🥳', value: 0
    }
}
export const amountCurrentData = {
    approved: 0,
    paid: 0,
}


