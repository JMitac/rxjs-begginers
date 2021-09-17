import { fromEvent } from "rxjs";
import { observer } from "../utils";

export default () => {
    const obs$ = fromEvent(document, 'click' );
    const obs2$ = fromEvent(document, 'keyup' );

    obs$.subscribe(observer);
    obs2$.subscribe(observer);
};