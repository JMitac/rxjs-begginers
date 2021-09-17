import { Observable, Subject } from "rxjs";
import { observer } from "../utils";

export default () => {

    const obs$ = new Observable( subs => {

        setInterval(() => {
            subs.next(Math.random())
        },1000)
    });

    const subject$ = new Subject();
    const subscription = obs$.subscribe( subject$ );

    const subs1 = subject$.subscribe( observer );
    const subs2 = subject$.subscribe( observer );

    setInterval(() => {
        subject$.next('emitiendo un valor desde el subject');
        subject$.complete();

        //cancelar la subscripcion del obs$
        subscription.unsubscribe()
    },5000);
};