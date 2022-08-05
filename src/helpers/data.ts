import path from './imgPass'
import {
  IAdvantages,
  IFooterLinks,
  IMathItem,
  IPlanet,
  IPlanItems,
  IQuesAndAns,
  IStar,
} from '../types'
import {randomInt} from "./helperFunc";

export const timeInfo: [number, number, number] = [1, 9, 43]

export const advantages: IAdvantages[] = [
  { img: path.star, text: 'Шанс занять 1 место — в вашем городе и по всей России' },
  { img: path.winne, text: 'Развитие самостоятельности + свободное время для родителей ;)' },
  { img: path.certificate, text: 'Персональный диплом в разных номинациях каждому участнику' },
  { img: path.gift, text: 'Призы и скидки для подписчиков и авторизованных пользователей' },
  { img: path.email, text: 'Бесплатный диплом на email — через 1 день после конкурса' },
  {
    img: path.vkAdvantage,
    text: 'Публикация работ победителей во ВКонтакте. <a>Подписывайтесь!</a>',
  },
]

export const headingText: { [p: string]: string } = {
  advantage: 'Для чего <span>нужно</span> участвовать',
  plan: 'Пошаговый <span>план</span>',
  diploma: 'Выдаём <span>дипломы</span> участникам',
  application: 'Зарегистрируйтесь, чтобы участвовать',
  question: 'Вопрос/Ответ',
  mailing: 'Подпишись на нашу рассылку',
}

export const inputPlaceholders: string[] = [
  'ФИО ребёнка',
  'Дата рождения',
  'Город',
  'Email',
  'Пароль',
]
export const policyText: { label: string } = {
  label:
    '<div>Отправляя данные я соглашаюсь с <span class="policy-accent">Условиями конкурса</span > и <span class="policy-accent">Политикой обработки данных</span></div>',
}

export const quesAndAns: IQuesAndAns[] = [
  { question: 'Может ли ребёнок заниматься самостоятельно?', answer: '' },
  { question: 'Как происходит оплата?', answer: '' },
  { question: 'Есть ли гарантии усвоения материала?', answer: '' },
  { question: 'С кем будет общаться мой ребёнок?', answer: '' },
  { question: 'Каковы принципы обучения?', answer: '' },
  { question: 'Сколько раз в неделю можно заниматься?', answer: '' },
]

export const footerLinks: IFooterLinks[] = [
  { title: 'Главная', path: '' },
  { title: 'Личный кабинет', path: '' },
  { title: 'Контакты', path: '' },
  { title: 'Конфиденциальность', path: '' },
]

export const planItems: IPlanItems[] = [
  { num: 1, text: 'Зарегистрируйтесь<br/> на конкурс <a>Здесь</a>' },
  { num: 2, text: 'Выполните все<br/> условия конкурса' },
  { num: 3, text: 'Загрузите рисунок <a>Здесь</a> или в Личном кабинете' },
]

export const planetProps: { [p: string]: IPlanet } = {
  planet1: { src: path.planet1, left: 445, top: 138, duration: 20, alt: 'планета' },
  planet2: { src: path.planet2, left: 335, top: 465, duration: 20, delay: 0.5, alt: 'планета' },
  bigPlanet: {
    src: path.bigPlanet,
    left: 227,
    top: 86,
    duration: 25,
    delay: 1,
    direction: 'reverse',
    alt: 'планета',
  },
}
export const mathItemsProps: { [p: string]: IMathItem } = {
  plus: { left: 450, top: 245, src: path.plus, alt: 'плюс' },
  division: { left: 532, top: 189, src: path.division, alt: 'деление' },
  zero: { left: 721, top: 270, src: path.zero, alt: 'ноль' },
  unit: { left: 820, top: 212, src: path.unit, alt: 'единица' },
}

export const starsItemsProps: IStar[] = [
  { src: path.animStar1, delay: randomInt(0.1, 1.5), left: 136, top: 18 },
  { src: path.animStar2, delay:randomInt(0.1, 1.5), left: 387, top: 86 },
  { src: path.animStar3, delay: randomInt(0.1, 1.5), left: 304, top: 189 },
  { src: path.animStar4, left: 657, top: 110 },
  { src: path.animStar5, delay: randomInt(0.1, 1.5), left: 773, top: 37 },
  { src: path.animStar6, delay: randomInt(0.1, 1.5), left: 735, top: 205 },
  { src: path.animStar7, delay: randomInt(0.1, 1.5), left: 823, top: 148 },
  { src: path.littleAnimStar1, delay: randomInt(0.1, 1.5), left: 322.5, top: 460 },
  { src: path.littleAnimStar2, delay: randomInt(0.1, 1.5), left: 320, top: 517 },
  { src: path.littleAnimStar3, delay: randomInt(0.1, 1.5), left: 405, top: 515 },
]
