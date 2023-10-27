export const submitinModal = () => {
    Swal.fire(
        'Cheers!',
        'Submitted your restaurant!',
        'success'
    )
}

export const editedModal = () => {
    Swal.fire(
        'Succes!',
        'Congrats you edited a restaurant!',
        'success'
    )
}

export const deletedModal = () => {
    Swal.fire(
        'Well..',
        'Want it oooor not you just deleted a restaurant :('
    )
}