import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  items;
  newsitems;
  comments;
  constructor(private loggingService: LoggingService) {
    this.items = [{name: 'Атака титанов 3', imgsrc:'https://yummyanime.club/img/posters/1570960789.jpg', id: 1},
      {name: 'Восхождение героя', imgsrc:'https://yummyanime.club/img/posters/1578820706.jpg', id:2},
      {name: 'Ванпанчмен 2', imgsrc:'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/51e91c45-75b3-439c-bcde-792f88cda34a/300x450', id: 3},
      {name: 'Остров Фантазий', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/98d7dce5-6ff4-4b2a-92eb-08d8ea351831/300x450', id:13},
      {name: 'Зов предков', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/1f7ccff8-ce03-40eb-b4ab-bdafa44e945b/300x450', id:14},
      {name: 'Аладдин', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/60add1e1-d3ae-4e5c-af67-4fdabadb40ac/300x450', id:15},
      {name: 'Моя академия 4', imgsrc:'https://yummyanime.club/img/posters/1569054917.jpg', id: 4},
      {name: 'Aпрельская ложь', imgsrc:'https://yummyanime.club/img/posters/1568207901.jpg', id: 5},
      {name: 'Шарлотта', imgsrc:'https://yummyanime.club/img/posters/1578819321.jpg', id: 6},
      {name: 'Один дома', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/82af3f64-2908-4684-be9e-f60eaff3281d/300x450', id:17},
      {name: 'Марсианин', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6f631486-e947-487d-94d6-41c2b5a8f5a0/300x450', id:18},
      {name: 'Однажды в Голливуде', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/2a728585-702e-4552-a6d1-1d0d7f8e2127/300x450', id:19},
      {name: 'Класс превосходства', imgsrc: 'https://yummyanime.club/img/posters/1590508519.jpg', id: 7},
      {name: 'Военная хроника маленькой девочки', imgsrc: 'https://yummyanime.club/img/posters/1570889567.jpg', id:8},
      {name: 'Мастера Меча Онлайн', imgsrc: 'https://yummyanime.club/img/posters/1568209023.jpg', id:9},
      {name: 'Форсаж 5', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/90ecc695-b927-45b4-a012-d9da7e674f52/300x450', id:20},
      {name: 'Адреналин', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/4bca7110-93d1-4e4f-a9d4-5d10e4af7f01/300x450', id:21},
      {name: 'Маленькие женщины', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/e4a926f0-0024-43cc-a519-6a5e0fbf7c25/300x450', id:22},
      {name: 'Хвост Феи', imgsrc: 'https://yummyanime.club/img/posters/1567840112.jpg', id:10},
      {name: 'Невеста чародея', imgsrc: 'https://yummyanime.club/img/posters/1518075347.png', id:11},
      {name: 'Башня Бога', imgsrc: 'https://yummyanime.club/img/posters/1593255886.jpg', id:12},
      {name: 'Властелин колец', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/9ff24e1f-5bc8-4d85-af62-67c6b2637247/300x450', id:23},
      {name: 'Хоббит', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6e9383da-f6e5-4c33-9c50-1bfa5a2a3d05/300x450', id:24},
      {name: 'Джокер', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/300x450', id:16},];

    this.newsitems = [{name: 'Кристофер Нолан раскритиковал Warner за выпуск фильмов онлайн и назвал HBO Max худшим сервисом', desc: 'Кристофер Нолан раскритиковал Warner Bros. за то, что студия решила выпустить несколько фильмов на HBO Max, не предупредив своих партнеров. Режиссер считает это неуважением к другим кинематографистам.«Это очень-очень неприятно. Настоящий развод. Нельзя так относиться к людям, которые многое вложили в свои фильмы. Они заслужили, чтобы с ними посоветовались и обсудили, что будет с их проектами», — сказал Нолан.', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/cec982751dbba26354a92324e0184def/960x540'},
      {name: '«Это гражданская война»: Новый трейлер второго сезона «Пенниуорта»', desc: 'Главный герой сериала — молодой Альфред Пенниуорт (его играет Джек Бэннон). Действие происходит в 1960-е, задолго до того, как он стал дворецким Брюса Уэйна. По сюжету Альфред открывает в Лондоне охранное агентство и начинает работать с Томасом Уэйном (Бен Элдридж), отцом Брюса. Во втором сезоне Альфред и его друзья столкнутся с неонацистом лордом Харвудом (Джейсон Флеминг), который начнет в Великобритании гражданскую войну в надежде подчинить себе всю страну.«Пенниуорт» вернется на экраны 13 декабря. В России продолжение будет доступно эксклюзивно на КиноПоиск HD, где прямо сейчас можно посмотреть первый сезон сериала.', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1374145/af88d1112fa8eb578f49b87a360c0bae/960x540'},
      {name: 'Появились новые мемы по мотивам «Хода королевы». Бет играет в «Монополию» и шахматы из «Гарри Поттера»', desc: 'В соцсетях появились новые мемы по мотивам сериала «Ход королевы» с Аней Тейлор-Джой. Пользователи заменили шахматы, в которых преуспела главная героиня, на другие настольные игры. Теперь Бет Хармон играет в «Четыре в ряд», «Операцию» и даже в «Монополию».', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1642096/07cb3f718bbfffc895c92077212b21fb/960x540'},
      {name: 'Чедвика Боузмана посмертно наградили премией MTV Movie & TV Awards. Его назвали «героем на все времена»', desc: '7 декабря прошла церемония вручения премии MTV Movie & TV Awards: Greatest of All Time, на которой посмертно отметили Чедвика Боузмана. Звезде «Черной Пантеры» присудили награду Hero of the Ages («Герой на все времена»).На виртуальной церемонии показали ролик, в котором память Боузмана почтили его коллеги по фильмам Marvel — Роберт Дауни-мл. и Дон Чидл.«Мистер Боузман воплощал в себе образ настоящего супергероя. Его влияние как актера, новаторски игравшего главные роли, и иконы экрана будут оценивать не по его кассовым рекордам, а по легиону фанатов, которые будут чествовать его долгие годы», — сказал Дауни-мл.', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1642096/d49d9a9b985194bc0f4f7326c46b6b95/960x540'},
      {name: 'Фанаты «Мандалорца» не оценили настоящее имя Малыша Йоды', desc: 'В пятой серии «Мандалорца» авторы раскрыли, что настоящее имя Дитя — Грогу. Однако многие фанаты сериала отказываются принимать новое имя полюбившегося персонажа и намерены продолжать называть его Малыш Йода', imgsrc: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101693/fcf9cd26fb89b49f8c9657fc0e5a93d5/960x540'}
    ];
    this.comments = [];
  }
  public getSharedItems() {
    this.loggingService.log(this.items);
    return this.items;
}
  public getSharedNews(){
    this.loggingService.log(this.newsitems);
    return this.newsitems;
  }
  public  getSharedComm(){
    this.loggingService.log(this.comments);
    return this.comments;
  }
}
