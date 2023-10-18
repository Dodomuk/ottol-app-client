import Swal from 'sweetalert2'

function warning(contents: string) {
    Swal.fire({
        icon: 'warning',
        text: contents,
        iconColor: '#f44336',
        buttonsStyling: true,
        confirmButtonColor: '#f44336'
    })
}

export default { warning }
