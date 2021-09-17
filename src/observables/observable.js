import { Observable } from "rxjs";
import { observer } from "../utils";

export default () => {
    const obs$ = new Observable( subs => {
        subs.next("Hola");
        subs.next(true);
        subs.next([1,2,3,4,5,6])
        subs.next(function(){})
        subs.next({
            name: 'bruce',
            lastName: 'wayne'
        })

        let count = 0;

        setInterval(() => {
            count++;
            subs.next(count)
        },1000)
        

        setInterval(() => {
            subs.complete()
        },4000)
    })

    const subscribe = obs$.subscribe(observer);
    
    setInterval(() => {
        subscribe.unsubscribe();
    },8000)
}