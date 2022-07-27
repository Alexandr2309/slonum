import path from './imgPass'
import { IAdvantages, IFooterLinks, IPlanItems, IQuesAndAns } from '../types'

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
