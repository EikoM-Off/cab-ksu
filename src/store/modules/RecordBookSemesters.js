export default{
  actions: {
  },
  mutations: {
  },
  state: {
      semesters:
      [
        
        {
            id: 0,
            name: "Шетел тілі (Иностранный язык)",
            date: "00-00-0000",
            mark: 75,
            coefficient: 2.67,
            credit: 5,
            attestations: [],
            control_form: "экзамен",
            discipline_cycle: "оод",
            discipline_type: "ОК"
        },
        {
            id: 1,
            name: "Программирование на языках высокого уровня",
            date: "00-00-0000",
            mark: 75,
            coefficient: 2.67,
            credit: 3,
            attestations: [76,	72,	79,	80,	75],
            control_form: "экзамен",
            discipline_cycle: "бд",
            discipline_type: "ОК"
        },
        {
            id: 2,
            name: "Қазақстанның қазіргі заман тарихы (мемлекеттік емтихан) (Современная история Казахстана (государственный экзамен))",
            date: "12-05-2017",
            mark: 79,
            coefficient: 2.67,
            credit: 3,
            attestations: [77, 88, 91, 91, 90],
            control_form: "экзамен",
            discipline_cycle: "оод",
            discipline_type: "ОК"
        },
  ]
  },
  getters: {
      getSemesters(state){
        return state.semesters
      }
  }

}