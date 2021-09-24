export const CLICK_IMAGE = 'CLICK_IMAGE';
export const CLICK_CV = 'CLICK_CV';
export const CLICK_OPEN_DESCRIPTION = 'CLICK_OPEN_DESCRIPTION' 

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