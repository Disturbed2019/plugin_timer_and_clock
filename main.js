import {Clock} from './timer'


const timerDay = new Clock('.time', {
    type: 'timer_day',
    day: '25',
    month: 'march',
    year: '2022'
})

const timer = new Clock('.time', {
    type: 'timer',
    day: '25',
    month: 'march',
    year: '2022'
})

const clock = new Clock('.time', {
    type: 'clock',
})