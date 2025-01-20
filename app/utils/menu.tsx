import { list, check, todo, home } from "./Icons";

const menu = [
    {
        id: 1,
        title: "All Tasks",
        icon: home,
        category: "tasks",
    },
    {
        id: 2,
        title: "Important!",
        icon: list,
        category: "important",
    },
    {
        id: 3,
        title: "Completed!",
        icon: check,
        category: "completed",
    },
    {
        id: 4,
        title: "Do It Now",
        icon: todo,
        category: "incomplete",
    },
];

export default menu;
