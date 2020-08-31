const menuData = [
    {
        label: 'Dashboard',
        path: '/'
    },
    {
        label: 'Detalhes',
        path: 'user-details'
    },
    {
        label: 'Repositórios',
        path: '/repos'
    }
]

export const getSideBar = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(menuData);
        }, 4000)
    })
}