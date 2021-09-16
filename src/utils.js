export const observer = {
    next: value => console.log('next [obs] : ',value),
    error: error => console.warn('error [obs] : ',error),
    complete: () => console.info('complete [obs] !!')
}