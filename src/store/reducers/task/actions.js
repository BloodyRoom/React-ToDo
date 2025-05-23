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

        tasks.sort((a, b) => a.complete - b.complete);

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

    const newTasks = [{id: generateID(), complete: false, ...task}, ...tasks];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    return { type: "CREATE_TASK", payload: newTasks };
}

export const completeToggle = (id) => {
    const localData = localStorage.getItem("tasks");
    let tasks = [];
    if (localData) {
        tasks = JSON.parse(localData);
    }

    tasks.forEach(task => {
        if (task.id === id) {
            task.complete = !task.complete;
        }
    });
    tasks.sort((a, b) => a.complete - b.complete);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return { type: "UPDATE_TASK", payload: tasks };

}

export const deleteTask = (id) => {
    const localData = localStorage.getItem("tasks");
    let tasks = [];
    if (localData) {
        tasks = JSON.parse(localData);
    }

    const newTasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    return { type: "DELETE_TASK", payload: newTasks };
}