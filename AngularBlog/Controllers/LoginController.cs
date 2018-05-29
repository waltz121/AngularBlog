using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlog.Models.FormModel;
using AngularBlog.Models.ViewModel;
using AngularBlog.Models;

namespace AngularBlog.Controllers
{
    public class LoginController : ApiController
    {
        [HttpPost]
        public UserRegistrationFormModel saveUserInfo([FromBody]UserRegistrationFormModel userRegistrationFM)
        {
            using(BlogEntities entities = new BlogEntities())
            {
                user tmpUser = new user();
                tmpUser.name = userRegistrationFM.firstName;
                tmpUser.lastname = userRegistrationFM.lastName;
                tmpUser.birthdate = userRegistrationFM.birthDate;
                tmpUser.created = userRegistrationFM.created;
                tmpUser.updated = userRegistrationFM.updated;
                tmpUser.status = userRegistrationFM.status;
                tmpUser.email = userRegistrationFM.email;

                userLogin tmpUserLogin = new userLogin();

                tmpUserLogin.username = userRegistrationFM.userName;
                tmpUserLogin.password = userRegistrationFM.password;
                tmpUserLogin.user = tmpUser;


                entities.users.Add(tmpUser);
                entities.userLogins.Add(tmpUserLogin);

                entities.SaveChanges();

            }

            return userRegistrationFM;
        }

        [HttpGet]
        public LoginViewModel IsCorrectLogin(string username, string password)
        {
            using(BlogEntities entities = new BlogEntities())
            {
                var tmpUserLogin = entities.userLogins.Where(x => (x.username == username) && (x.password == password)).FirstOrDefault();
                LoginViewModel vm = new LoginViewModel();

                if(tmpUserLogin == null)
                {
                    vm.IsCorrectLogin = false;
                    vm.successLogin = false;
                }
                else
                {
                    vm.IsCorrectLogin = true;
                    vm.successLogin = true;
                    vm.userName = tmpUserLogin.username;
                    vm.passWord = tmpUserLogin.password;
                    vm.userID = tmpUserLogin.user_id;
                }
                return vm;
            }
        }
    }
}
