import roles from "./constants/roles";

export const navigations = [
    {
        name : "Dashboard",
        icon : "bolsta",
        path : "/dashboard",
        auth : [roles.ADMIN , roles.SUPER_ADMIN]
    },
    {
        name : "Trainings",
        icon : "training",
        path : "/trainings",
        auth : [roles.ADMIN , roles.SUPER_ADMIN, roles.STUDENT]
    },
    {
        name : "Add Account",
        icon : "addaccount",
        path : "/addaccount",
        auth : [roles.SUPER_ADMIN]
    },
    {
        name : "Persons",
        icon : "person",
        path : "/persons",
        auth : [roles.ADMIN]
    },
]