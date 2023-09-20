const candidateslist = [
    {
        id: 1,
        title: 'John Smith',
        email: 'johnsmith@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-01.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 2,
        title: 'Emily Johnson',
        email: 'emilyjohnson@mailinator.com',
        designation: 'Senior Physician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-02.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 3,
        title: 'Michael Davis',
        email: 'michaeldavis@mailinator.com',
        designation: 'Medical Laboratory Technician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-03.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 4,
        title: 'Sarah Thompson',
        email: 'sarahthompson@mailinator.com',
        designation: 'Senior Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 5,
        title: 'Jessica Martinez',
        email: 'jessicamartinez@mailinator.com',
        designation: 'Medical Imaging Technologist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-04.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 6,
        title: 'Robert Anderson',
        email: 'robertanderson@mailinator.com',
        designation: 'Medical Billing and Coding Specialist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-05.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 7,
        title: 'Olivia Taylor',
        email: 'oliviataylor@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 8,
        title: 'Daniel Garcia',
        email: 'danielgarcia@mailinator.com',
        designation: 'Project Manager',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-01.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 9,
        title: 'Sophia Taylor',
        email: 'sophiataylor@mailinator.com',
        designation: 'Senior Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-02.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 10,
        title: 'David Wilson',
        email: 'davidwilson@mailinator.com',
        designation: 'Physical Therapist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-03.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 11,
        title: 'John Smith',
        email: 'johnsmith@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 12,
        title: 'Emily Johnson',
        email: 'emilyjohnson@mailinator.com',
        designation: 'Senior Physician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-04.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 13,
        title: 'Michael Davis',
        email: 'michaeldavis@mailinator.com',
        designation: 'Medical Laboratory Technician',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/user-05.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 14,
        title: 'Sarah Thompson',
        email: 'sarahthompson@mailinator.com',
        designation: 'Senior Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 15,
        title: 'Jessica Martinez',
        email: 'jessicamartinez@mailinator.com',
        designation: 'Medical Imaging Technologist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 16,
        title: 'Robert Anderson',
        email: 'robertanderson@mailinator.com',
        designation: 'Medical Billing and Coding Specialist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 17,
        title: 'Olivia Taylor',
        email: 'oliviataylor@mailinator.com',
        designation: 'Registered Nurse',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 18,
        title: 'Daniel Garcia',
        email: 'danielgarcia@mailinator.com',
        designation: 'Project Manager',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 19,
        title: 'Sophia Taylor',
        email: 'sophiataylor@mailinator.com',
        designation: 'Senior Pharmacist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
    {
        id: 20,
        title: 'David Wilson',
        email: 'davidwilson@mailinator.com',
        designation: 'Physical Therapist',
        company: 'MedixGen Health',
        description: 'Registered Nurses are responsible for providing patient care, administering medications, monitoring vital signs, and assisting doctors and other healthcare professionals in various medical settings such as hospitals, clinics, and long-term care facilities. They also educate patients and their families on health conditions and treatments',
        last_updated: 1689290885995,
        image: require('./../../assets/images/dummy-profile-image.png'),
        phone: "+8129875682",
        experience: [
            { id: 1, title: 'Physician', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 2, title: 'Medical Laboratory Technician', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 3, title: 'Pharmacist', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' },
            { id: 4, title: 'Physical Therapist', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }
        ],
        education: [
            { id: 1, title: 'Doctor of Osteopathic Medicine', company: 'VitalMed Group', startdate: '2023-01-16', enddate: null, },
            { id: 2, title: 'Doctor of Dental Medicine (D.M.D.)', company: 'Precision HealthTech', startdate: '2022-03-23', enddate: '2023-01-16', },
            { id: 3, title: 'Doctor of Pharmacy (Pharm.D.)', company: 'BioTech Medical', startdate: '2022-03-23', enddate: '2023-01-01', },
            // { title: 'Doctor of Psychology (Psy.D.)', company: 'LifeCure Technologies', startdate: '2020-08-11', enddate: '2021-06-26', }
        ],
        skills: [
            { id: 1, title: 'Cold Calling', experience: true },
            { id: 2, title: 'Communication', experience: true },
            { id: 3, title: 'Technician', experience: true },
            { id: 4, title: 'Laboratory', experience: true },
        ],
        languages: [
            { id: 1, title: 'English', experience: true },
            { id: 2, title: 'French', experience: true },
        ],
    },
];

export default candidateslist;