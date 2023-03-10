export const GET_IMAGES = 'GET_IMAGES'

interface IGetImages {
    type: typeof GET_IMAGES,
    payload: any[]
}

interface IGetImagesTwo {
    type: any,
    payload: any
}

export type imagesDispatchTypes = IGetImages | IGetImagesTwo