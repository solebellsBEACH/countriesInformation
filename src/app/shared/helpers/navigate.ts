import { Router } from "@angular/router"

function navigate(router: Router, path: string) {
    router.navigate([path])
}  // TODO: CREATE UNIT TESTS

export const navigateHelpers = {
    navigate
}