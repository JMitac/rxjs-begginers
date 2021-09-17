import { Observable } from "rxjs";
import { observer } from "../utils";

export default () => {
    const obs$ = new Observable( subs => {
        let count = 0;

        setInterval(() => {
            count++
            subs.next(count)
        },1000);

        setInterval(() => {
            subs.complete()
        },5000);
    })

    const subs1 = obs$.subscribe( observer );
    const subs2 = obs$.subscribe( observer );
    const subs3 = obs$.subscribe( observer );

    subs1.add( subs2 ).add( subs3 )

    setInterval(() => {
        //cancelar subscripcion
        subs1.unsubscribe()
    }, 8000)
}