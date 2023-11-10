import { ToastrService } from 'ngx-toastr';

function showError(toastr: ToastrService, label?: string) {
    toastr.error((label || 'An error occurred during the operation.'), 'Erro');
}

function showSuccess(toastr: ToastrService, label?: string) {
    toastr.success((label || 'Operation completed successfully!'), 'Erro');
}

export const ToastrHelpers = {
    showError,
    showSuccess
}