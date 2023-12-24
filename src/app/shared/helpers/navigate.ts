import { Router } from "@angular/router"

function navigate(router: Router, path: string) {
    router.navigate([path])
}

export const navigateHelpers = {
    navigate
}