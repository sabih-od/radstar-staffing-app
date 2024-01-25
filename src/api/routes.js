/* Candidate */
export const CandidateLoginAPI = '/candidate/login';
export const CandidateRegisterAPI = '/candidate/register';
export const CandidateForgetPassAPI = '/candidate/password/email';
export const CandidateSubmitOtpAPI = '/candidate/verify/otp';
export const CandidateResetPassAPI = '/candidate/password/reset';
export const CandidateProfileAPI = '/candidate/my-profile';

/* Employer */
export const EmployerLoginAPI = '/company/login';
export const EmployerRegisterAPI = '/company/register';
export const EmployerForgetPassAPI = '/company/password/email';
export const EmployerSubmitOtpAPI = '/company/verify/otp';
export const EmployerResetPassAPI = '/company/password/reset';
export const EmployerFollowersAPI = '/company/followers';
export const EmployerPostedJobsAPI = '/company/job/get';
export const EmployerCreateJobAPI = '/company/job/create';
export const EmployerUpdateProfileAPI = '/company/job/update';


/* Common */
export const GetStatesAPI = '/states/{CountryId}';
export const GetCitiesAPI = '/cities/{stateId}';








export const UpdateProfilePictureAPI = '/auth/upload-profile-picture';

export const GetProfileAPI = '/auth/me';
export const BlockedUsersListAPI = '/auth/blocked-users';
export const BlockUserAPI = '/auth/block-user';

// export const EditProfileAPI = '/users';
export const EditProfileAPI = '/auth/update-profile';
export const GetUserByIdAPI = '/getuser';
export const DeleteUserAPI = '/users';


export const GetSermonsAPI = '/sermons';
export const GetPostsAPI = '/posts';
export const GetEventsAPI = '/events';
export const GetUpcomingEventsAPI = '/events';
export const GetOurStaffAPI = '/staff-members';
export const GetOurSpeakerAPI = '/speakers';
export const GetNotificationsAPI = '/notifications';
export const GetAnnouncementAPI = '/announcements';
export const GetBooksAPI = '/books';
export const GetRequestedPrayerAPI = '/prayer-requests';
export const GetHomeBannerAPI = '/pages/home-banner/get';

export const ReportUserAPI = '/reports/report-user';
export const ReportMessageAPI = '/reports/report-message';
export const SendGroupRequestAPI = '/group-requests';

// export const GetSermonsDetailAPI = '';
// export const GetPostsDetailAPI = '';
// export const GetAnnouncementDetailAPI = '';
// export const GetEventsDetailAPI = '';
// export const GetUpcomingEventsDetailAPI = '';
// export const GetOurStaffDetailAPI = '';
// export const GetOurSpeakerDetailAPI = '';
// export const GetBooksDetailAPI = '';

export const GetGroupsAPI = '/groups';
export const GetMessagesAPI = '/groups/get-messages';
export const SendMessageAPI = '/messages';
export const DeleteMessageAPI = '/messages'

export const RequestPrayerAPI = '/prayer-requests';
export const ContactAPI = '/contacts';
export const AboutAPI = '/pages/get-by-name/about';
export const EventPageContentAPI = '/pages/get-by-name/web-events-page';