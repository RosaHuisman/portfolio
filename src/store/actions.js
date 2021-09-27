export const CLICK_IMAGE = 'CLICK_IMAGE';
export const CLICK_CV = 'CLICK_CV';
export const CLICK_OPEN_DESCRIPTION = 'CLICK_OPEN_DESCRIPTION' 
export const CHANGE_VALUE = 'CHANGE_VALUE'
export const INPUT_EMPTY = 'INPUT_EMPTY'
export const MESSAGE_SEND = 'MESSAGE_SEND'

export const clickOnImage = () => ({
    type: CLICK_IMAGE
})

export const clickOnButtonCV = () => ({
    type: CLICK_CV
})

export const clickOpenDescription = (element) => ({
    type: CLICK_OPEN_DESCRIPTION,
    element
})

export const changeInputValue = (key, value)=> ({
    type: CHANGE_VALUE,
    value,
    key
})

export const inputIsEmpty = () => ({
    type: INPUT_EMPTY,
})

export const messageSend = () => ({
    type: MESSAGE_SEND,
})