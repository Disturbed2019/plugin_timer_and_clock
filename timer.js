
export  function Clock(selector, options) {
    const block = document.querySelector(selector);

    const rightTime = (time) => {
        return time < 10 ? '0'+time : time
    }
    const rightDays = (days) => {
        if (days === 1){
            return  `Остался ${days} день`
        }
        if (days > 1 && days <=4){
            return  `Осталось ${days} дня`

        }
        if(days > 4){
            return  `Осталось ${days} дней`
        }
    }
    const createElement = (el, className) => {
        const element = document.createElement(el);
        element.classList.add(className);
        return element
    }

    const timerDays = () => {
        let interval
        const hoursBlock = createElement('div', 'hours');
        block.insertAdjacentElement('afterbegin', hoursBlock)
        const daysBlock = createElement('div', 'days' );
        block.insertAdjacentElement('afterbegin', daysBlock);

        const timeDay = () => {
            const date = new Date().getTime()
            const deadlineDay = new Date(options.day + options.month + options.year).getTime()
            const timeRemaining = (deadlineDay - date) / 1000
            const days = Math.floor(timeRemaining /60 /60 /24)
            const lastDays = days * 24
            const hours = Math.floor(timeRemaining / 60 / 60 ) - lastDays
            const minutes = Math.floor((timeRemaining / 60) % 60)
            const seconds = Math.floor(timeRemaining % 60)


            if (days > 1){
                daysBlock.textContent = `${rightDays(days)}`
                hoursBlock.textContent = `${rightTime(hours)}:${rightTime(minutes)}:${rightTime(seconds)}`
            } else {
                daysBlock.textContent = `${rightTime(hours)}:${rightTime(minutes)}:${rightTime(seconds)}`
            }

            if (timeRemaining <=0){
                clearInterval(interval)
                daysBlock.textContent=`00:00:00`
            }
        }
        setInterval(timeDay,500)
    }

    const timer = () => {
        let interval
        const timerBlock = createElement('div', 'timer' );
        block.insertAdjacentElement('afterbegin', timerBlock)

        const time = () => {
            const date = new Date().getTime()
            const deadlineDay = new Date(options.day + options.month + options.year).getTime()
            const timeRemaining = (deadlineDay - date) / 1000
            const hours = Math.floor(timeRemaining / 60 / 60 )
            const minutes = Math.floor((timeRemaining / 60) % 60)
            const seconds = Math.floor(timeRemaining % 60)

            timerBlock.textContent = `${rightTime(hours)}:${rightTime(minutes)}:${rightTime(seconds)}`

            if (timeRemaining <=0){
                clearInterval(interval)
                timerBlock.textContent=`00:00:00`
            }
        }
        setInterval(time,500)
    }

    const clock = () => {
        const clock = createElement('div', 'clock' );
        block.insertAdjacentElement('afterbegin', clock)
        const time = () => {
            const date = new Date();
            const hours = date.getHours()
            const minutes = date.getMinutes()
            const seconds = date.getSeconds()
            clock.textContent = `${rightTime(hours)}:${rightTime(minutes)}:${rightTime(seconds)}`
        }
        setInterval(time,500)
    }



    if (options.type === 'timer'){
        timer();

    }
    if (options.type === 'clock'){
        clock();

    }
    if (options.type === 'timer_day'){
        timerDays();

    }

}




