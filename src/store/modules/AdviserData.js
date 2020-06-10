export default{
    actions: {
    },
    mutations: {
    },
    state: {
        adviser_personal_data:
        [
            {
            id: 0,
            name: "Ирина",
            surname: "Иванова",
            middname: "Владимировна",
            position: "старший преподаватель",
            faculty: "Факультет Иинформационных Технологий",
            department: "Кафедра программного обеспечения",
            phone: "00000",
            mobile_phone: "00000000",
            email: "mail@mail.ru"
        }
    ],
    adviser_groups_data:
    [
        {
        id: 0,
        faculty: "ФИТ",
        course: 1,
        study_group: "19-201-43/Рус.",
        specialty: "6B06103 - Информационные технологии и робототехника"
        },
        {
        id: 1,
        faculty: "ФИТ",
        course: 1,
        study_group: "19-211-44/Рус.",
        specialty: "6B06103 - Информационные технологии и робототехника сокр.СПО"
    }
]
    },
    getters: {
        getadviser_personal_data(state){
            return state.adviser_personal_data
        },
        get_adviser_groups_data(state){
            return state.adviser_groups_data
        }
    }

}