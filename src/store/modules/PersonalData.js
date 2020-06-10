export default{
    actions: {
    },
    mutations: {
    },
    state: {
        personal_data:
        [
            {
            id: 0,
            name: "Ярослав",
            surname: "Манаков",
            middname: "Федорович",
            faculty: "Факультет Иинформационных Технологий",
            course: 4,
            specialty: "5B070400 - Вычислительная техника и программное обеспечение",
            study_group: "16-201-42/Рус.",
            adviser: "Иванова И.В.",
            age: 23
        }
    ]
    },
    getters: {
        getPersData(state){
            return state.personal_data
        }
    }

}