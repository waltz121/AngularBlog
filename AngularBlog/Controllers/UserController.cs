using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlog.Models;
using AngularBlog.Models.ViewModel;

namespace AngularBlog.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public List<UserViewModel> getAllUsers()
        {
            using(BlogEntities entities = new BlogEntities())
            {
                var UserList = from user in entities.users.ToList()
                               select new UserViewModel
                               {
                                  id = user.id,
                                  name = user.name,
                                  lastname = user.lastname,
                                  birthdate = user.birthdate,
                                  created = user.created,
                                  updated = user.updated,
                                  status = user.status,
                                  email = user.email
                               };

                var vm = UserList.ToList();

                return vm;
            }
        }

        [HttpGet]
        public user GetUser(int id)
        {
            using (BlogEntities entities = new BlogEntities())
            {
                var tmpUser = entities.users.Where(x => x.id == id).FirstOrDefault();
                return tmpUser;
            }
        }
    }
}
