const generateID = (length = 8) => {
    const localData = localStorage.getItem("tasks");
    let tasks = [];
    if (localData) {
        tasks = JSON.parse(localData);
    }

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    if (tasks.find((task) => {
        if (task.id === result) {
            return true;
        }
        return false;
    })) {
        generateID(length++);
    }

    return result;
}

export const loadTasks = () => {
    const localData = localStorage.getItem("tasks");
    if (localData) {
        const tasks = JSON.parse(localData);
        return { type: "LOAD_TASKS", payload: tasks };
    } else {
        return { type: "LOAD_TASKS", payload: [] };
    }
}

export const createTasks = (task) => {
    const localData = localStorage.getItem("tasks");
    let tasks = [];
    if (localData) {
        tasks = JSON.parse(localData);
    }

    const newTasks = [...tasks, {id: generateID(), ...task}];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    return { type: "CREATE_TASK", payload: newTasks };
}