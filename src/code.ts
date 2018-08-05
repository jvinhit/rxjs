import { Observable } from 'rxjs';
import 'rxjs/add/operator/share';
import { fromEvent } from 'rxjs/Observable/fromEvent';
import { interval } from 'rxjs/Observable/interval';
// var observable = Observable.create((observer: any) => {
//     try {
//         observer.next('Hey guys!');
//         observer.next('How are you?');
//         setInterval(() => {
//             observer.next("I'm good");
//         }, 2000);
//         //observer.complete();
//         //observer.next('This will not send');
//     } catch (error) {
//         observer.error(error);
//     }
// }).share();

// var observer = observable.subscribe(
//     (x: any) => addItem(x),
//     (error: any) => addItem(error),
//     () => addItem('Completed!')
// );
// var observer2 = observable.subscribe((x: any) => addItem(`ob2: ${x}`));
// observer.add(observer2);
// setTimeout(() => {
//     observer.unsubscribe();
// }, 6001);

// hot observe
// setTimeout(() => {
//     var observer2 = observable.subscribe((x: any) => addItem(`ob2: ${x}`));
// }, 2000);

//from event:
// var observable = fromEvent(document, 'mousemove');
// setTimeout(() => {
//     var subscription = observable.subscribe((x: any) => addItem(x));
// }, 3000);

// Usig subject
import { Subject } from 'rxjs/Subject';

// var subject = new Subject();
// subject.subscribe(
//     data => addItem(`SubjectObsevable: ${data}`),
//     err => addItem(err),
//     () => addItem(`OncOmpleted!`)
// );

// subject.next('a');
// setTimeout(() => {
//     subject.complete();
// }, 1000);
// setTimeout(() => {
//     subject.next('aa');
// }, 3000);

//ex2
// Observable khoi tao gia tri moi 1 giay
var source = interval(2000);
var subject = new Subject();
var subSource = source.subscribe(subject);

// broadcasting 1: subscription 1
var subscription1 = subject.subscribe(
    data => addItem(`SubjectObsevable1: ${data}`),
    err => addItem(err),
    () => addItem(`OncOmpleted1!`)
);
// broadcasting 2: subscription 2
var subscription2 = subject.subscribe(
    data => addItem(`SubjectObsevable2: ${data}`),
    err => addItem(err),
    () => addItem(`OncOmpleted2!`)
);
setTimeout(function() {
    // cho kết thúc sau 5 giây sau đó
    subject.complete();
    subscription1.unsubscribe();
    subscription2.unsubscribe();
}, 5000);

function addItem(value: any) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}
