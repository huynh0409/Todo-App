const theme = document.querySelector('body>div');
const themeBtn = document.querySelector('.theme-icon');
themeBtn.addEventListener('click', () => {
    if(theme.classList.contains('dark-theme')) {
        theme.classList.replace('dark-theme', 'light-theme');
    } else {
        theme.classList.replace('light-theme', 'dark-theme');
    }
});
const container = document.querySelector('.item-container');
const input = document.querySelector('.main__input input');
input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        content = input.value; 
        newItem = createTodoItem(content);
        container.insertAdjacentHTML('afterbegin', newItem);
        input.value = ' ';
    }

    tickCompleted();
    removeTodoItem();    
    countItem();
    
});

const createTodoItem = (content) => {
    return `
    <div class="todo-item active">
        <p class="todo-item__text">${content}</p>
        <div class="circle-tick">
            <i class="fa-solid fa-circle"></i>
            <div>
                <i class="fa-solid fa-check"></i>
            </div>
        </div>
        <div class="icon-close">
           <i class="fa-solid fa-xmark"></i>
        </div>
    </div> 
    `;
}

const tickCompleted = () => {
    const completedBtns = document.querySelectorAll('.circle-tick');
    completedBtns.forEach(e => {
        e.addEventListener('click', e => {
            e.preventDefault();
            e.currentTarget.parentElement.classList.add('completed');
            countItem();
        });
    });
}

const removeTodoItem = () => {
    const removeItemBtns = document.querySelectorAll('.icon-close');
    removeItemBtns.forEach(e => {
        e.addEventListener('click', (e) => {
            e.preventDefault();
            e.currentTarget.parentElement.remove();
            countItem();
        });
    });
}

const countItem = () => {
    const listItem = document.querySelectorAll('.todo-item');
    let count = 0;
    listItem.forEach(e => {
        if(!e.classList.contains('completed')) {
            count++;
        }
        document.querySelector('.value-count').textContent = count;
    });
}

document.querySelectorAll('.all').forEach(e => {
    e.addEventListener('click', () => {
        const listItem = document.querySelectorAll('.todo-item');
        listItem.forEach(e => {
            if(e.classList.contains('todo-item')) {
                e.style.display = 'block';
                // console.log('yes');
            }
        });
    }); 
});

document.querySelectorAll('.active').forEach(e => {
    e.addEventListener('click', () => {
        const listItem = document.querySelectorAll('.todo-item');
        listItem.forEach(e => {
            if(e.classList.contains('active') && !e.classList.contains('completed')) {
                e.style.display = 'block';
                // console.log('yes');
            } else {
                e.style.display = 'none';
            }
        });
    }) 
});

document.querySelectorAll('.completed').forEach(e => {
    e.addEventListener('click', () => {
        const listItem = document.querySelectorAll('.todo-item');
        listItem.forEach(e => {
            if(e.classList.contains('completed')) {
                e.style.display = 'block';
                // console.log('yes');
            } else {
                e.style.display = 'none';
            }
        });
    }); 
});

document.querySelector('.clear-completed').addEventListener('click', () => {
    const listItem = document.querySelectorAll('.todo-item');
    listItem.forEach(e => {
        if(e.classList.contains('completed')) {
            e.remove();
        }
    });
}); 
