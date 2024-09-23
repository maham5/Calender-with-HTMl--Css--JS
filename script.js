const date = new Date();
const renderCalendar = () => {
    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    // First day of the month index (0 - 6, where 0 = Sunday, 1 = Monday, ...)
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    // Last day of the month index (0 - 6, where 0 = Sunday, 1 = Monday, ...)
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = date.toDateString();

    let days = '';

    // Days from the previous month
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    // Days of the current month
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    // Days from the next month
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    monthDays.innerHTML = days;
};

document.querySelector('#prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);  // Move to previous month
    renderCalendar();
});

document.querySelector('#next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);  // Move to next month
    renderCalendar();
});

renderCalendar();
