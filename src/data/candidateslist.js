const candidateslist = [
    {
        id: 1,
        title: 'John Smith',
        email: 'johnsmith@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 2,
        title: 'Emily Johnson',
        email: 'emilyjohnson@mailinator.com',
        designation: 'Physician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 3,
        title: 'Michael Davis',
        email: 'michaeldavis@mailinator.com',
        designation: 'Medical Laboratory Technician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 4,
        title: 'Sarah Thompson',
        email: 'sarahthompson@mailinator.com',
        designation: 'Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 5,
        title: 'Jessica Martinez',
        email: 'jessicamartinez@mailinator.com',
        designation: 'Medical Imaging Technologist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 6,
        title: 'Robert Anderson',
        email: 'robertanderson@mailinator.com',
        designation: 'Medical Billing and Coding Specialist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 7,
        title: 'Olivia Taylor',
        email: 'oliviataylor@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 8,
        title: 'Daniel Garcia',
        email: 'danielgarcia@mailinator.com',
        designation: 'Project Manager',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 9,
        title: 'Sophia Taylor',
        email: 'sophiataylor@mailinator.com',
        designation: 'Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 10,
        title: 'David Wilson',
        email: 'davidwilson@mailinator.com',
        designation: 'Physical Therapist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 11,
        title: 'John Smith',
        email: 'johnsmith@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 12,
        title: 'Emily Johnson',
        email: 'emilyjohnson@mailinator.com',
        designation: 'Physician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 13,
        title: 'Michael Davis',
        email: 'michaeldavis@mailinator.com',
        designation: 'Medical Laboratory Technician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 14,
        title: 'Sarah Thompson',
        email: 'sarahthompson@mailinator.com',
        designation: 'Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 15,
        title: 'Jessica Martinez',
        email: 'jessicamartinez@mailinator.com',
        designation: 'Medical Imaging Technologist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 16,
        title: 'Robert Anderson',
        email: 'robertanderson@mailinator.com',
        designation: 'Medical Billing and Coding Specialist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 17,
        title: 'Olivia Taylor',
        email: 'oliviataylor@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 18,
        title: 'Daniel Garcia',
        email: 'danielgarcia@mailinator.com',
        designation: 'Project Manager',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 19,
        title: 'Sophia Taylor',
        email: 'sophiataylor@mailinator.com',
        designation: 'Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
    {
        id: 20,
        title: 'David Wilson',
        email: 'davidwilson@mailinator.com',
        designation: 'Physical Therapist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/default_icon.png')
    },
];

export default candidateslist;