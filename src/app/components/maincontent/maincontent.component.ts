import {Component, ViewChild,  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import {ComentsComponent} from '../coments/coments.component';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit, OnDestroy{
  @ViewChild(ComentsComponent) viewChild: ComentsComponent;
  message: string;
  items: any[];
  comments: any[];
  info = [
    {name: 'Твоё Имя', img: 'https://static.hdrezka.ac/i/2017/8/31/q5294ebceb73avf58s78u.jpg', desc: 'Девушка, живущая в провинциальном городке в Японии и молодой человек из Токио внезапно осознают, что между ними имеется определенная связь. Парочка чувствует друг друга на расстоянии через сновидения.'},
    {name: 'Медальон', img: 'https://static.hdrezka.ac/i/2014/2/21/l7f529c85d8eecj61x27w.jpg', desc: 'Фильм «Медальон» рассказывает о похищении дочери бывшего преступника, который не так давно решил завязать со своим криминальным прошлым и взяться за ум. Похитители сообщают ему, что они держат девочку в багажнике машины такси. И в распоряжении отца всего несколько часов на то, чтобы отыскать негодяев и вызволить свою девочку'},
    {name: 'Честный вор', img: 'https://static.hdrezka.ac/i/2020/8/5/qbe5428f573babc13v61q.png', desc: 'В центре сюжета криминального детектива под названием «Честный вор» - опытный грабитель, один из лучших специалистов своего дела Том Картер. Он неоднократно сидел в тюрьме, но после выхода на свободу всегда возвращался к любимому делу, ведь планирование ограблений, а затем и воплощение этих планов в реальность приносят ему не только материальную выгоду, но и огромное моральное удовлетворение.'},
  ];
  constructor() { }
  a = false;
  Destroy(){
    this.a = true;
  }
  View(){
    this.a = false;

  }

  ngOnInit(): void {
    this.items = ['Твоё имя', 'Джокер', 'Сад изящных слов', 'Принцесса Мононоке', 'Форма голоса', 'Карты деньги два ствола'];
    this.comments = [];
    console.log('AppComponent:OnInit');
  }
  addComment(comment){
    this.comments.unshift(comment);
    return false;
  }
  ngOnDestroy() {
  }

}
