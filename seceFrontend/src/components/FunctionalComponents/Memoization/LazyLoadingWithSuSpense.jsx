import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import("../About"))
const LazyLoadingWithSuspense = () => {
    return (
        <div> <Suspense fallback={<h1>Loading...</h1>}>
            <h2> this is lazy loading componeent with suspense</h2>
            <LazyComponent />
        </Suspense>
        </div>
    )

}
export default LazyLoadingWithSuspense;